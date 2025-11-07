"use client";

import { motion } from 'framer-motion';
import { Car, Smartphone, Wifi, Navigation2, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function IQDriveIntegration() {
  const features = [
  {
    icon: Wifi,
    title: 'Seamless Connectivity',
    description: 'Direct integration with your Volkswagen IQ.DRIVE system'
  },
  {
    icon: Navigation2,
    title: 'Auto-Navigation',
    description: 'Automatically route to your reserved spot'
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Reserve parking directly from your vehicle display'
  },
  {
    icon: Shield,
    title: 'Secure Access',
    description: 'Automated gate entry with vehicle recognition'
  }];


  const steps = [
  { number: '01', title: 'Connect', description: 'Link your VW account' },
  { number: '02', title: 'Search', description: 'Find parking via IQ.DRIVE' },
  { number: '03', title: 'Navigate', description: 'Auto-route to your spot' },
  { number: '04', title: 'Park', description: 'Seamless entry & payment' }];


  return (
    <section id="iq-drive" className="py-24 gradient-premium relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-64 h-64 bg-[#00B1EB]/10 rounded-full blur-3xl" />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">

          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Car className="w-4 h-4 mr-2" />
            Volkswagen Technology
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            IQ.DRIVE Integration
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Experience the future of parking with seamless integration into your Volkswagen's intelligent driving system
          </p>
        </motion.div>

        {/* 3D Car Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16">

          <div className="glass-dark rounded-3xl p-12 shadow-premium-lg relative overflow-hidden">
            {/* Simulated 3D Car */}
            <motion.div
              animate={{
                rotateY: [0, 15, 0, -15, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="transform-3d mx-auto max-w-4xl">

              <div className="relative aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 flex items-center justify-center">
                {/* Car Silhouette */}
                <svg
                  viewBox="0 0 400 200"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">

                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M50 150 L80 150 L90 130 L120 130 L130 110 L170 100 L230 100 L270 110 L280 130 L310 130 L320 150 L350 150 M130 150 L130 140 M270 150 L270 140 M100 110 L110 100 L150 95 L240 95 L280 100 L290 110"
                    stroke="url(#carGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round" />

                  <defs>
                    <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00B1EB" />
                      <stop offset="100%" stopColor="#FFFFFF" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Connection Indicators */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#00B1EB] rounded-full shadow-lg" />

                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-1/3 right-1/4 w-4 h-4 bg-[#00B1EB] rounded-full shadow-lg" />

              </div>
            </motion.div>

            {/* Feature Badges */}
            <div className="absolute top-8 left-8 glass rounded-xl p-3 text-white text-sm">
              <Smartphone className="w-5 h-5 mb-1" />
              Connected
            </div>
            <div className="absolute top-8 right-8 glass rounded-xl p-3 text-white text-sm">
              <Wifi className="w-5 h-5 mb-1" />
              Live Sync
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) =>
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-light rounded-2xl p-6 text-center hover-lift !bg-transparent">

              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#00B1EB] to-[#001E50] flex items-center justify-center shadow-premium">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </motion.div>
          )}
        </div>

        {/* Integration Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-light p-8 md:p-12 !opacity-100 !bg-transparent !border !rounded-[139px] !border-white">

          <h3 className="text-3xl font-bold text-white text-center mb-12">
            How It Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) =>
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative">

                {/* Connection Line */}
                {index < steps.length - 1 &&
              <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#00B1EB] to-white/30" />
              }

                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#00B1EB] to-[#001E50] text-white text-3xl font-bold mb-4 shadow-premium">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-white/70 text-sm">{step.description}</p>
                </div>
              </motion.div>
            )}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-[#001E50] hover:bg-white/90 rounded-full px-8 shadow-premium-lg">
              <Car className="w-5 h-5 mr-2" />
              Connect Your Volkswagen
            </Button>
          </div>
        </motion.div>
      </div>
    </section>);

}