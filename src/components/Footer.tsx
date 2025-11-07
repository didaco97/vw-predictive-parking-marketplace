"use client";

import { motion } from 'framer-motion';
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  const links = {
    product: [
    { label: 'Find Parking', href: '#map' },
    { label: 'AI Predictions', href: '#predictions' },
    { label: 'IQ.DRIVE', href: '#iq-drive' },
    { label: 'Become a Host', href: '#host' }],

    company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Blog', href: '#' }],

    support: [
    { label: 'Help Center', href: '#' },
    { label: 'Safety', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'FAQ', href: '#' }],

    legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Licenses', href: '#' }]

  };

  const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' }];


  return (
    <footer className="relative gradient-premium overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full bg-[#00B1EB]/20 rounded-full blur-3xl" />

      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-light rounded-3xl p-8 md:p-12 mb-16 !bg-transparent !border !border-white">

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-white/70">
                Get the latest updates on AI predictions, new features, and exclusive offers
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 bg-white border-0 rounded-full" />

              <Button className="h-12 px-8 bg-white text-[#001E50] hover:bg-white/90 rounded-full font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4">

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-premium">
                  <Car className="w-6 h-6 text-[#001E50]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">ParkPredict</h3>
                  <p className="text-xs text-white/60">by Volkswagen</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                AI-powered predictive parking marketplace that revolutionizes urban mobility.
              </p>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:hello@parkpredict.com" className="hover:text-white transition-colors">
                    hello@parkpredict.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(links).map(([category, items], index) =>
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}>

              <h4 className="text-white font-semibold mb-4 capitalize">{category}</h4>
              <ul className="space-y-2">
                {items.map((link) =>
              <li key={link.label}>
                    <a
                  href={link.href}
                  className="text-white/70 text-sm hover:text-white transition-colors">

                      {link.label}
                    </a>
                  </li>
              )}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2024 ParkPredict by Volkswagen. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) =>
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full glass-light flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label={social.label}>

                  <social.icon className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>);

}