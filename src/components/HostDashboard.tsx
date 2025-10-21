"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, Users, Calendar, Star, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Card } from '@/components/ui/card'

export default function HostDashboard() {
  const [hoursPerDay, setHoursPerDay] = useState([8])
  const [daysPerWeek, setDaysPerWeek] = useState([5])
  const [pricePerHour, setPricePerHour] = useState([15])

  const monthlyEarnings = hoursPerDay[0] * daysPerWeek[0] * 4 * pricePerHour[0]

  const stats = [
    { label: 'Avg. Monthly Income', value: '$2,450', icon: DollarSign, change: '+23%' },
    { label: 'Active Hosts', value: '12.5K', icon: Users, change: '+15%' },
    { label: 'Booking Rate', value: '94%', icon: TrendingUp, change: '+8%' },
    { label: 'Avg. Rating', value: '4.9', icon: Star, change: '+0.2' }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      location: 'San Francisco, CA',
      earnings: '$3,200/mo',
      rating: 5,
      quote: 'I rent out my driveway while at work. It\'s completely passive income!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
    },
    {
      name: 'Michael Torres',
      location: 'Austin, TX',
      earnings: '$2,800/mo',
      rating: 5,
      quote: 'The AI predictions help me optimize pricing. Love the VW integration!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
    },
    {
      name: 'Emily Johnson',
      location: 'Seattle, WA',
      earnings: '$4,100/mo',
      rating: 5,
      quote: 'Best decision ever! My garage now earns more than my monthly car payment.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
    }
  ]

  const heatmapData = Array.from({ length: 7 }, (_, day) =>
    Array.from({ length: 24 }, (_, hour) => ({
      day,
      hour,
      occupancy: Math.random() * 100
    }))
  ).flat()

  return (
    <section id="host" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#00B1EB 1px, transparent 1px), linear-gradient(90deg, #00B1EB 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 gradient-vw-light text-white border-0">
            <TrendingUp className="w-4 h-4 mr-2" />
            Earn Passive Income
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-vw mb-4">
            Become a Parking Host
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your unused parking space into a revenue-generating asset
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-premium hover-lift"
            >
              <div className="flex items-center justify-between mb-3">
                <stat.icon className="w-8 h-8 text-[#00B1EB]" />
                <Badge variant="secondary" className="text-green-600 bg-green-50">
                  {stat.change}
                </Badge>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Earnings Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 md:p-12 shadow-premium-lg mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-2">Calculate Your Earnings</h3>
              <p className="text-muted-foreground mb-8">
                See how much you could earn by hosting your parking space
              </p>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium">Hours per day</label>
                    <span className="text-sm font-bold text-[#00B1EB]">{hoursPerDay[0]} hours</span>
                  </div>
                  <Slider
                    value={hoursPerDay}
                    onValueChange={setHoursPerDay}
                    max={24}
                    min={1}
                    step={1}
                    className="cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium">Days per week</label>
                    <span className="text-sm font-bold text-[#00B1EB]">{daysPerWeek[0]} days</span>
                  </div>
                  <Slider
                    value={daysPerWeek}
                    onValueChange={setDaysPerWeek}
                    max={7}
                    min={1}
                    step={1}
                    className="cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium">Price per hour</label>
                    <span className="text-sm font-bold text-[#00B1EB]">${pricePerHour[0]}</span>
                  </div>
                  <Slider
                    value={pricePerHour}
                    onValueChange={setPricePerHour}
                    max={30}
                    min={5}
                    step={1}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="gradient-premium rounded-2xl p-8 text-white text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4" />
                <div className="text-sm font-medium mb-2">Estimated Monthly Earnings</div>
                <motion.div
                  key={monthlyEarnings}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-6xl font-bold mb-4"
                >
                  ${monthlyEarnings.toLocaleString()}
                </motion.div>
                <p className="text-white/80 text-sm mb-6">
                  Based on {hoursPerDay[0]} hours/day, {daysPerWeek[0]} days/week
                </p>
                <Button size="lg" className="w-full bg-white text-[#001E50] hover:bg-white/90 rounded-full shadow-lg">
                  Start Hosting Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">What Our Hosts Say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-card rounded-2xl p-6 shadow-premium hover-lift"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Monthly Earnings</span>
                    <span className="text-lg font-bold text-green-600">{testimonial.earnings}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Availability Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 shadow-premium-lg"
        >
          <h3 className="text-2xl font-bold mb-2">Demand Heatmap</h3>
          <p className="text-muted-foreground mb-8">
            Peak demand times for optimal pricing
          </p>

          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-25 gap-1">
                {/* Header */}
                <div className="col-span-1" />
                {Array.from({ length: 24 }, (_, i) => (
                  <div key={i} className="text-xs text-center text-muted-foreground">
                    {i}
                  </div>
                ))}

                {/* Heatmap Rows */}
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, dayIndex) => (
                  <>
                    <div key={day} className="text-xs text-muted-foreground flex items-center">
                      {day}
                    </div>
                    {Array.from({ length: 24 }, (_, hourIndex) => {
                      const data = heatmapData.find(d => d.day === dayIndex && d.hour === hourIndex)
                      const intensity = data ? data.occupancy : 0
                      return (
                        <motion.div
                          key={`${dayIndex}-${hourIndex}`}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (dayIndex * 24 + hourIndex) * 0.005 }}
                          className="aspect-square rounded cursor-pointer hover:ring-2 ring-[#00B1EB] transition-all"
                          style={{
                            backgroundColor: intensity > 75 ? '#EF4444' :
                                           intensity > 50 ? '#F59E0B' :
                                           intensity > 25 ? '#10B981' : '#E5E7EB'
                          }}
                          title={`${day} ${hourIndex}:00 - ${Math.round(intensity)}% demand`}
                        />
                      )
                    })}
                  </>
                ))}
              </div>

              <div className="flex items-center justify-center gap-6 mt-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-200 rounded" />
                  <span className="text-muted-foreground">Low</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded" />
                  <span className="text-muted-foreground">Medium</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded" />
                  <span className="text-muted-foreground">High</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded" />
                  <span className="text-muted-foreground">Peak</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
