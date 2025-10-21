"use client"

import { motion } from 'framer-motion'
import { Brain, TrendingUp, Activity, BarChart3, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

export default function AIPredictions() {
  const predictions = [
    {
      location: 'Downtown Financial District',
      confidence: 98,
      timeSlot: '8:00 AM - 10:00 AM',
      trend: 'increasing',
      spotsForecast: 45
    },
    {
      location: 'Shopping Mall East',
      confidence: 87,
      timeSlot: '2:00 PM - 4:00 PM',
      trend: 'stable',
      spotsForecast: 120
    },
    {
      location: 'Airport Terminal 2',
      confidence: 92,
      timeSlot: '6:00 PM - 8:00 PM',
      trend: 'decreasing',
      spotsForecast: 28
    }
  ]

  const metrics = [
    { label: 'Prediction Accuracy', value: '98.3%', icon: Brain, color: 'text-green-500' },
    { label: 'Real-time Updates', value: '30sec', icon: Activity, color: 'text-[#00B1EB]' },
    { label: 'Data Points Analyzed', value: '500M+', icon: BarChart3, color: 'text-purple-500' }
  ]

  return (
    <section id="predictions" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #00B1EB 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 gradient-vw text-white border-0">
            <Sparkles className="w-4 h-4 mr-2" />
            Machine Learning Powered
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-vw mb-4">
            Predictive Intelligence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI analyzes millions of data points to predict parking availability with unprecedented accuracy
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-premium hover-lift text-center"
            >
              <metric.icon className={`w-12 h-12 ${metric.color} mx-auto mb-4`} />
              <div className="text-4xl font-bold mb-2">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Prediction Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {predictions.map((prediction, index) => (
            <motion.div
              key={prediction.location}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.15 }}
              className="bg-card rounded-2xl p-6 shadow-premium-lg hover-lift relative overflow-hidden group"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 animate-shimmer" />
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold mb-1">{prediction.location}</h3>
                    <p className="text-sm text-muted-foreground">{prediction.timeSlot}</p>
                  </div>
                  <Badge variant={
                    prediction.trend === 'increasing' ? 'default' :
                    prediction.trend === 'stable' ? 'secondary' : 'outline'
                  }>
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {prediction.trend}
                  </Badge>
                </div>

                {/* Confidence Meter */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">AI Confidence</span>
                    <span className="text-2xl font-bold text-[#00B1EB]">{prediction.confidence}%</span>
                  </div>
                  
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${prediction.confidence}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.15, duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#00B1EB] to-[#001E50] relative"
                    >
                      {/* Animated Pulse */}
                      <motion.div
                        animate={{
                          x: ['-100%', '200%']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Forecast Info */}
                <div className="bg-muted/50 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Estimated Available</span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">{prediction.spotsForecast}</span>
                      <span className="text-sm text-muted-foreground">spots</span>
                    </div>
                  </div>
                </div>

                {/* AI Indicator */}
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Brain className="w-4 h-4 text-[#00B1EB]" />
                  <span>Updated 2 min ago</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Data Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-card rounded-2xl p-8 shadow-premium-lg"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Live Availability Forecast</h3>
              <p className="text-muted-foreground">Next 24 hours prediction</p>
            </div>
            <Badge className="bg-green-500 text-white border-0">
              <Activity className="w-4 h-4 mr-2" />
              Live
            </Badge>
          </div>

          {/* Simulated Chart */}
          <div className="grid grid-cols-12 gap-2 items-end h-48">
            {Array.from({ length: 12 }).map((_, i) => {
              const height = Math.random() * 60 + 40
              return (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.05, duration: 0.5 }}
                  className={`rounded-t-lg ${
                    height > 80 ? 'bg-green-500' :
                    height > 50 ? 'bg-yellow-500' : 'bg-red-500'
                  } relative group cursor-pointer hover:opacity-80 transition-opacity`}
                >
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-card text-xs py-1 px-2 rounded shadow-lg whitespace-nowrap">
                    {Math.round(height)}%
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="flex justify-between mt-4 text-xs text-muted-foreground">
            <span>12 AM</span>
            <span>6 AM</span>
            <span>12 PM</span>
            <span>6 PM</span>
            <span>12 AM</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
