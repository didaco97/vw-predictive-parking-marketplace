"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Car, Menu, X, User, Settings } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mode, setMode] = useState<'driver' | 'host'>('driver')

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-light border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 gradient-vw rounded-xl flex items-center justify-center shadow-premium">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient-vw">ParkPredict</h1>
              <p className="text-xs text-muted-foreground">by Volkswagen</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#map" className="text-sm font-medium hover:text-[#00B1EB] transition-colors">
              Find Parking
            </a>
            <a href="#predictions" className="text-sm font-medium hover:text-[#00B1EB] transition-colors">
              AI Predictions
            </a>
            <a href="#iq-drive" className="text-sm font-medium hover:text-[#00B1EB] transition-colors">
              IQ.DRIVE
            </a>
            <a href="#host" className="text-sm font-medium hover:text-[#00B1EB] transition-colors">
              Become a Host
            </a>
          </div>

          {/* Mode Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center bg-secondary/50 rounded-full p-1">
              <button
                onClick={() => setMode('driver')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  mode === 'driver' 
                    ? 'bg-white text-[#001E50] shadow-md' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Driver
              </button>
              <button
                onClick={() => setMode('host')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  mode === 'host' 
                    ? 'bg-white text-[#001E50] shadow-md' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Host
              </button>
            </div>
            
            <Button variant="outline" size="sm" className="rounded-full">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            
            <Button className="gradient-vw-light text-white rounded-full shadow-premium hover:shadow-premium-lg transition-all">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-light border-t border-white/20"
          >
            <div className="px-4 py-6 space-y-4">
              <a href="#map" className="block py-2 text-sm font-medium hover:text-[#00B1EB] transition-colors">
                Find Parking
              </a>
              <a href="#predictions" className="block py-2 text-sm font-medium hover:text-[#00B1EB] transition-colors">
                AI Predictions
              </a>
              <a href="#iq-drive" className="block py-2 text-sm font-medium hover:text-[#00B1EB] transition-colors">
                IQ.DRIVE
              </a>
              <a href="#host" className="block py-2 text-sm font-medium hover:text-[#00B1EB] transition-colors">
                Become a Host
              </a>
              
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full rounded-full">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                <Button className="w-full gradient-vw-light text-white rounded-full">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}