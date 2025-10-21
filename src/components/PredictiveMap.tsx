"use client"

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, TrendingUp, Clock, DollarSign, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import OSM from 'ol/source/OSM'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import { fromLonLat } from 'ol/proj'
import { Icon, Style } from 'ol/style'

export default function PredictiveMap() {
  const [selectedSpot, setSelectedSpot] = useState<number | null>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<Map | null>(null)

  // Times Square coordinates and nearby parking spots
  const parkingSpots = [
    { 
      id: 1, 
      name: 'Times Square Parking', 
      availability: 85, 
      price: 25, 
      distance: '0.1 mi', 
      prediction: 'High', 
      lat: 40.758896, 
      lng: -73.985130 
    },
    { 
      id: 2, 
      name: 'Bryant Park Garage', 
      availability: 45, 
      price: 20, 
      distance: '0.3 mi', 
      prediction: 'Medium', 
      lat: 40.753596, 
      lng: -73.983233 
    },
    { 
      id: 3, 
      name: 'Port Authority Parking', 
      availability: 30, 
      price: 22, 
      distance: '0.4 mi', 
      prediction: 'Low', 
      lat: 40.757280, 
      lng: -73.989720 
    },
    { 
      id: 4, 
      name: 'Rockefeller Center', 
      availability: 70, 
      price: 28, 
      distance: '0.5 mi', 
      prediction: 'High', 
      lat: 40.758742, 
      lng: -73.978674 
    },
    { 
      id: 5, 
      name: 'Hell\'s Kitchen Lot', 
      availability: 90, 
      price: 18, 
      distance: '0.6 mi', 
      prediction: 'High', 
      lat: 40.762741, 
      lng: -73.991250 
    },
  ]

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    // Create vector source for parking markers
    const vectorSource = new VectorSource()

    // Add parking spot features
    parkingSpots.forEach((spot) => {
      const marker = new Feature({
        geometry: new Point(fromLonLat([spot.lng, spot.lat])),
        spotId: spot.id,
        spotData: spot
      })

      // Create custom marker style based on availability
      const markerColor = spot.availability > 70 ? '#22c55e' : 
                          spot.availability > 30 ? '#eab308' : '#ef4444'
      
      marker.setStyle(new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: `data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg width="32" height="42" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0C7.163 0 0 7.163 0 16c0 12 16 26 16 26s16-14 16-26c0-8.837-7.163-16-16-16z" fill="${markerColor}" stroke="white" stroke-width="2"/>
              <circle cx="16" cy="16" r="6" fill="white"/>
              <text x="16" y="20" font-size="10" font-weight="bold" text-anchor="middle" fill="${markerColor}">P</text>
            </svg>
          `)}`,
          scale: 1
        })
      }))

      vectorSource.addFeature(marker)
    })

    // Create vector layer for markers
    const vectorLayer = new VectorLayer({
      source: vectorSource
    })

    // Initialize map centered on Times Square
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        vectorLayer
      ],
      view: new View({
        center: fromLonLat([-73.985130, 40.758896]), // Times Square
        zoom: 15
      })
    })

    // Handle marker clicks
    map.on('click', (event) => {
      map.forEachFeatureAtPixel(event.pixel, (feature) => {
        const spotId = feature.get('spotId')
        if (spotId) {
          setSelectedSpot(spotId)
        }
      })
    })

    // Change cursor on hover
    map.on('pointermove', (event) => {
      const hit = map.hasFeatureAtPixel(event.pixel)
      map.getTargetElement().style.cursor = hit ? 'pointer' : ''
    })

    mapInstanceRef.current = map

    return () => {
      map.setTarget(undefined)
      mapInstanceRef.current = null
    }
  }, [])

  const handleZoomIn = () => {
    const map = mapInstanceRef.current
    if (map) {
      const view = map.getView()
      view.animate({ zoom: view.getZoom()! + 1, duration: 250 })
    }
  }

  const handleZoomOut = () => {
    const map = mapInstanceRef.current
    if (map) {
      const view = map.getView()
      view.animate({ zoom: view.getZoom()! - 1, duration: 250 })
    }
  }

  const handleRecenter = () => {
    const map = mapInstanceRef.current
    if (map) {
      const view = map.getView()
      view.animate({ 
        center: fromLonLat([-73.985130, 40.758896]),
        zoom: 15,
        duration: 500 
      })
    }
  }

  const handleFlyToSpot = (spot: typeof parkingSpots[0]) => {
    const map = mapInstanceRef.current
    if (map) {
      const view = map.getView()
      view.animate({ 
        center: fromLonLat([spot.lng, spot.lat]),
        zoom: 17,
        duration: 1000 
      })
      setSelectedSpot(spot.id)
    }
  }

  return (
    <section id="map" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 gradient-vw-light text-white border-0">
            <TrendingUp className="w-4 h-4 mr-2" />
            AI-Powered Predictions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-vw mb-4">
            Find Your Perfect Spot in Times Square
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time availability predictions for parking near Times Square, NYC
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* OpenLayers Map View */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden shadow-premium-lg"
          >
            <div 
              ref={mapRef} 
              className="absolute inset-0 w-full h-full"
              style={{ background: '#f5f6f7' }}
            />

            {/* Map Controls */}
            <div className="absolute top-4 right-4 space-y-2 z-10">
              <Button 
                size="icon" 
                className="glass-light shadow-md hover:bg-white/90"
                onClick={handleZoomIn}
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                className="glass-light shadow-md hover:bg-white/90"
                onClick={handleZoomOut}
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                className="glass-light shadow-md hover:bg-white/90"
                onClick={handleRecenter}
                title="Recenter on Times Square"
              >
                <Maximize2 className="w-4 h-4" />
              </Button>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 glass-light rounded-lg p-3 text-xs space-y-1 z-10">
              <div className="font-semibold mb-2">Parking Availability</div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span>High (&gt;70%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span>Medium (30-70%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span>Low (&lt;30%)</span>
              </div>
            </div>

            {/* Location Badge */}
            <div className="absolute top-4 left-4 glass-light rounded-lg px-3 py-2 text-sm font-semibold z-10 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00B1EB]" />
              Times Square, NYC
            </div>
          </motion.div>

          {/* Spots List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {parkingSpots.map((spot, index) => (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleFlyToSpot(spot)}
                className={`bg-card rounded-xl p-6 cursor-pointer hover-lift ${
                  selectedSpot === spot.id ? 'ring-2 ring-[#00B1EB] shadow-premium-lg' : 'shadow-premium'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{spot.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{spot.distance}</span>
                      <Clock className="w-4 h-4 ml-2" />
                      <span>5 min walk</span>
                    </div>
                  </div>
                  <Badge className={`${
                    spot.prediction === 'High' ? 'bg-green-500' :
                    spot.prediction === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                  } text-white border-0`}>
                    {spot.prediction}
                  </Badge>
                </div>

                <div className="space-y-3">
                  {/* Availability Bar */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Availability</span>
                      <span className="font-semibold">{spot.availability}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${spot.availability}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                        className={`h-full ${
                          spot.availability > 70 ? 'bg-green-500' :
                          spot.availability > 30 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-[#00B1EB]" />
                      <span className="text-2xl font-bold">${spot.price}</span>
                      <span className="text-sm text-muted-foreground">/hour</span>
                    </div>
                    <Button className="gradient-vw-light text-white shadow-md hover:shadow-lg">
                      Reserve Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}