'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Star, Clock, TreePine, Scissors, Truck, Leaf, ArrowRight, CheckCircle, Menu, X } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Tree Trimming',
    description: 'Professional shaping and pruning to enhance the health and appearance of your trees.'
  },
  {
    icon: TreePine,
    title: 'Tree Removal',
    description: 'Safe and efficient removal of dead, diseased, or hazardous trees of any size.'
  },
  {
    icon: Truck,
    title: 'Stump Grinding',
    description: 'Complete stump removal to clear your yard and prevent pest infestations.'
  },
  {
    icon: Leaf,
    title: 'Storm Damage',
    description: 'Emergency services for storm-damaged trees. We respond quickly to restore safety.'
  }
]

const reviews = [
  { name: 'James M.', rating: 5, text: 'Chris did an amazing job trimming our large oak trees. Professional, on time, and great price!' },
  { name: 'Sarah L.', rating: 5, text: 'Removed a dead tree that was leaning toward our house. Fast and clean work. Highly recommend!' },
  { name: 'Robert K.', rating: 5, text: 'Best tree service in Memphis! Fair pricing and Chris really knows his stuff.' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-forest/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <TreePine className="h-8 w-8 text-lime" />
              <span className="ml-2 text-white font-bold text-lg">CS & S Tree Experts</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-cream hover:text-lime transition">Services</a>
              <a href="#about" className="text-cream hover:text-lime transition">About</a>
              <a href="#reviews" className="text-cream hover:text-lime transition">Reviews</a>
              <a href="#contact" className="bg-lime text-forest px-4 py-2 rounded-lg font-semibold hover:bg-white transition">
                Get Free Quote
              </a>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-forest-dark">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-cream py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="block text-cream py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#reviews" className="block text-cream py-2" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
              <a href="#contact" className="block bg-lime text-forest px-4 py-2 rounded-lg font-semibold text-center" onClick={() => setMobileMenuOpen(false)}>Get Free Quote</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-light"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-lime rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lime font-semibold text-lg mb-4 tracking-wider">MEMPHIS' TRUSTED TREE EXPERTS SINCE 2010</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Trees.<br />Our Expertise.
            </h1>
            <p className="text-xl md:text-2xl text-cream/90 mb-10 max-w-2xl mx-auto">
              Professional tree care services in Memphis. From routine trimming to emergency removal, we keep your property safe and beautiful.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-lime text-forest px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Free Estimate
              </a>
              <a href="tel:+19015550142" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-forest transition flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                (901) 555-0142
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-cream/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-lime" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-lime" />
                <span>Free Estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-lime" />
                <span>Same Day Service</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-8 w-8 text-white/50 rotate-90" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-forest mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tree care solutions tailored to your property's needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border border-gray-100"
              >
                <div className="w-14 h-14 bg-forest rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-lime" />
                </div>
                <h3 className="text-xl font-bold text-forest mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Don't see what you need? We handle custom jobs too!</p>
            <a href="#contact" className="inline-flex items-center text-forest font-semibold hover:text-lime transition">
              Contact us for custom work <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Expert Tree Care You Can Trust
              </h2>
              <p className="text-xl text-cream/80 mb-6">
                With over 14 years of experience in Memphis, CS & S Tree Experts has built a reputation for quality workmanship and customer satisfaction.
              </p>
              <p className="text-cream/70 mb-8">
                Owner Chris Sampley brings hands-on expertise to every job. We treat your property like it's our own - with respect, care, and attention to detail. From small residential trimming to large commercial removals, no job is too big or too small.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-forest-light rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-lime">14+</p>
                  <p className="text-cream">Years Experience</p>
                </div>
                <div className="bg-forest-light rounded-xl p-4 text-center">
                  <p className="text-3xl font-bold text-lime">2,500+</p>
                  <p className="text-cream">Jobs Completed</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-forest-light rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <TreePine className="h-32 w-32 text-lime mx-auto mb-4" />
                  <p className="text-cream text-lg font-semibold">CS & S Tree Experts</p>
                  <p className="text-cream/60">Owner: Chris Sampley</p>
                  <p className="text-cream/60 mt-2">Licensed & Insured</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-forest mb-4">Why Choose CS & S?</h2>
            <p className="text-xl text-gray-600">The difference is in the details</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Professional Equipment', desc: 'Modern, well-maintained equipment for efficient and safe tree work.' },
              { title: 'Clean Worksite', desc: 'We leave your property cleaner than we found it. No mess left behind.' },
              { title: 'Competitive Pricing', desc: 'Fair, transparent pricing with no hidden fees. Free estimates on all work.' },
              { title: 'Safety First', desc: 'Strict safety protocols to protect your property, our crew, and bystanders.' },
              { title: 'Local & Responsive', desc: 'Based right here in Memphis. We answer our phones and show up on time.' },
              { title: 'Satisfaction Guaranteed', desc: "Your satisfaction is our top priority. We don't leave until you're happy." }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <CheckCircle className="h-6 w-6 text-lime flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-forest mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-forest mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-lime text-lime" />
              ))}
              <span className="text-forest font-semibold ml-2">5.0 Rating</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-lime text-lime" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <p className="font-semibold text-forest">- {review.name}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://www.google.com/maps/place/CS+%26+S+TREE+EXPERTS-OWNER:+CHRIS+SAMPLEY/@35.149708,-90.7598483,97015m/data=!3m1!1e3!4m10!1m2!2m1!1sTree+Triming+Memphis!3m6!1s0x87d57764e495b881:0x72cd783bbe1f061f!8m2!3d35.149708!4d-90.1830661!15sChVUcmVlIFRyaW1taW5nIE1lbXBoaXNaFyIVdHJlZSB0cmltbWluZyBtZW1waGlzkgEMdHJlZV9zZXJ2aWNlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU40TURsUVUwNTNFQUXgAQD6AQUI2QEQIg!16s%2Fg%2F11h08896lr?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-forest font-semibold hover:text-lime transition"
            >
              View all reviews on Google <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-forest-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Service Area</h2>
            <p className="text-xl text-cream/80">Proudly serving Memphis and surrounding areas</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {['Memphis', 'Germantown', 'Bartlett', 'Collierville', 'Cordova', 'East Memphis', 'Midtown', 'Whitehaven'].map((area) => (
              <div key={area} className="bg-forest rounded-xl py-3 px-4">
                <p className="text-cream font-medium">{area}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-cream/70 mt-8">
            Don't see your area? Call us! We may be able to serve you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-forest mb-6">Get Your Free Quote</h2>
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form or give us a call. We'll get back to you within 24 hours with a free estimate.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-forest rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-lime" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest">Phone</p>
                    <a href="tel:+19015550142" className="text-gray-600 hover:text-forest">(901) 555-0142</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-forest rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-lime" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest">Service Area</p>
                    <p className="text-gray-600">Memphis, TN and surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-forest rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-lime" />
                  </div>
                  <div>
                    <p className="font-semibold text-forest">Business Hours</p>
                    <p className="text-gray-600">Mon-Sat: 7:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Emergency: Available</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-cream rounded-3xl p-8 shadow-xl"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition" placeholder="(901) 555-0100" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition" placeholder="you@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition">
                    <option>Tree Trimming</option>
                    <option>Tree Removal</option>
                    <option>Stump Grinding</option>
                    <option>Storm Damage</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address / Location</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition" placeholder="Your address or neighborhood" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Describe Your Project</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition" placeholder="Tell us about your tree care needs..."></textarea>
                </div>

                <button type="submit" className="w-full bg-forest text-white py-4 rounded-xl font-bold text-lg hover:bg-forest-dark transition shadow-lg hover:shadow-xl">
                  Request Free Quote
                </button>

                <p className="text-sm text-gray-500 text-center">We typically respond within 24 hours</p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TreePine className="h-8 w-8 text-lime" />
                <span className="text-white font-bold text-lg">CS & S Tree Experts</span>
              </div>
              <p className="text-cream/70">Memphis' trusted tree care professionals. Quality service at fair prices since 2010.</p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-cream/70 hover:text-lime transition">Services</a></li>
                <li><a href="#about" className="text-cream/70 hover:text-lime transition">About Us</a></li>
                <li><a href="#reviews" className="text-cream/70 hover:text-lime transition">Reviews</a></li>
                <li><a href="#contact" className="text-cream/70 hover:text-lime transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-cream/70">
                <li><a href="tel:+19015550142" className="hover:text-lime transition">(901) 555-0142</a></li>
                <li>Memphis, TN</li>
                <li>Mon-Sat: 7AM - 6PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cream/10 pt-8 text-center text-cream/50">
            <p>© 2024 CS & S Tree Experts. All rights reserved. Licensed & Insured.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
