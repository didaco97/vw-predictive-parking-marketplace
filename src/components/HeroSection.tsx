"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, MapPin, Calendar, Clock, TrendingUp, Zap, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  const stats = [
    { label: 'Active Parking Spots', value: '50K+', icon: MapPin },
    { label: 'Predictions Made', value: '2M+', icon: TrendingUp },
    { label: 'Avg. Save Time', value: '15min', icon: Clock }
  ]

  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Predictions',
      description: 'Real-time availability forecasting',
      gradient: 'from-[#00B1EB] to-[#0097D6]'
    },
    {
      icon: Shield,
      title: 'Secure Booking',
      description: 'Guaranteed parking with instant confirmation',
      gradient: 'from-[#001E50] to-[#003D82]'
    },
    {
      icon: Car,
      title: 'IQ.DRIVE Integration',
      description: 'Seamless VW vehicle connectivity',
      gradient: 'from-[#00B1EB] to-[#001E50]'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-premium opacity-90" />
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-64 h-64 bg-[#00B1EB]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#001E50]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full glass text-white text-sm font-medium border border-white/30">
                Powered by Volkswagen IQ.DRIVE
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
              Park Smarter,
              <br />
              <span className="text-[#00B1EB] animate-pulse-glow">Drive Better</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              AI-powered predictive parking marketplace that learns your habits and finds the perfect spot before you arrive
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-light rounded-2xl p-3 shadow-premium-lg">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#00B1EB]" />
                  <Input
                    type="text"
                    placeholder="Where are you going?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 bg-white border-0 text-lg rounded-xl shadow-sm focus:ring-2 focus:ring-[#00B1EB]"
                  />
                </div>
                
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#00B1EB]" />
                  <Input
                    type="datetime-local"
                    className="pl-12 h-14 bg-white border-0 rounded-xl shadow-sm focus:ring-2 focus:ring-[#00B1EB] min-w-[200px]"
                  />
                </div>
                
                <Button className="h-14 px-8 gradient-vw-light text-white rounded-xl text-lg font-semibold shadow-premium hover:shadow-premium-lg transition-all hover:scale-105">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            <p className="text-white/60 text-sm mt-4">
              🎯 AI predicts 98% accurate parking availability • ⚡ Average booking in 30 seconds
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 10, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-transparent border-2 border-white/40 rounded-xl p-6 hover:scale-105 hover:border-[#00B1EB] transition-all backdrop-blur-sm"
              >
                <stat.icon className="w-8 h-8 text-[#00B1EB] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: 1.2 + index * 0.15 }}
                whileHover={{ 
                  y: -10, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="bg-transparent border-2 border-white/40 rounded-2xl p-8 text-left hover:border-[#00B1EB] transition-all backdrop-blur-sm transform-3d-child"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-premium`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

function Car({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 17h14M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M5 17v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2M19 17v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2M7 7l2-2M17 7l-2-2" />
    </svg>
  )
}