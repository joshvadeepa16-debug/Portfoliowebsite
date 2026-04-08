import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Monitor, ShoppingCart, Rocket, Layers } from 'lucide-react';
import { Footer } from '../components/Footer';

const services = [
  {
    id: 1,
    title: 'Landing Page',
    icon: <Monitor size={40} className="mb-4 text-blue-400" />,
    price: '$500',
    description: 'A beautiful, single-page website to highlight your personal brand or product effectively.',
    features: [
      'Responsive Design',
      'Contact Form',
      'Custom Domain Integration',
      'SEO Basics'
    ],
    recommended: false,
  },
  {
    id: 2,
    title: 'Full-Stack Web App',
    icon: <Rocket size={40} className="mb-4 text-blue-500" />,
    price: '$1,500',
    description: 'Dynamic frontend and backend logic. Perfect for dashboards and SaaS applications.',
    features: [
      'Database Architecture',
      'User Authentication',
      'REST/GraphQL API',
      'Advanced Security'
    ],
    recommended: true,
  },
  {
    id: 3,
    title: 'Custom E-Commerce',
    icon: <ShoppingCart size={40} className="mb-4 text-blue-300" />,
    price: '$2,500',
    description: 'A robust online store configured to process payments and handle digital or physical inventory.',
    features: [
      'Stripe Integration',
      'Content Management System',
      'Shopping Cart & Checkout',
      'Inventory Tracking'
    ],
    recommended: false,
  }
];

export function Services() {
  return (
    <div className="min-h-screen bg-[#030014] text-white pt-32 pb-20 relative overflow-hidden flex flex-col">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex-grow">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
          >
            Website Creation Options
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Transforming your ideas into scalable, beautiful digital assets. Select a package below to kickstart your next project.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 + 0.3 }}
              className={`relative rounded-3xl backdrop-blur-sm p-8 border ${
                service.recommended 
                ? 'bg-blue-900/20 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.15)]' 
                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
              } flex flex-col transition-all duration-300 group`}
            >
              {service.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-white/10 uppercase tracking-widest">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <div className="inline-block p-4 rounded-2xl bg-black/30 border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/50 text-sm h-16">{service.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  {service.price}
                </span>
                <span className="text-white/50 text-sm border-l border-white/10 pl-2 ml-2">Starting at</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-white/80 shrink-0">
                    <CheckCircle2 size={16} className="text-blue-400 mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
                service.recommended
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white hover:shadow-cyan-500/25 border border-white/10'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/30'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-blue-900/30 to-black border border-blue-500/20 p-10 flex flex-col md:flex-row items-center justify-between backdrop-blur-md shadow-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-blue-500/5 rotate-180 transition-transform duration-700 ease-in-out group-hover:rotate-0" />
          <div className="relative z-10 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl mt-0 font-bold mb-2 flex items-center justify-center md:justify-start gap-3">
              <Layers className="text-blue-400" />
              Need a Custom Solution?
            </h3>
            <p className="text-white/60 max-w-md">
              Not seeing exactly what you need? Reach out for a specialized quote on enterprise architecture or custom modules.
            </p>
          </div>
          <button className="relative z-10 whitespace-nowrap bg-white text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-white/10 hover:shadow-white/25">
            Contact Me
          </button>
        </div>
      </div>
      
      <div className="mt-auto z-10 w-full relative">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="pt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}
