import React, { useState } from 'react';
import { CalendarDays, Code, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { WorkshopReservationModal } from './WorkshopReservationModal';

export function WorkshopAnnouncement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 relative overflow-hidden bg-[#030014]">
      {/* Visual background flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-blue-900/40 to-black border border-blue-500/30 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm max-w-5xl mx-auto overflow-hidden relative group"
        >
          {/* Decorative shapes */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-[50px] group-hover:bg-cyan-500/30 transition-colors duration-500" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[50px] group-hover:bg-blue-500/30 transition-colors duration-500" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-semibold text-sm mb-6 uppercase tracking-wider">
                <CalendarDays size={16} />
                <span>Coming this May</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Summer Holiday <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Web Designing</span> Workshop
              </h2>
              
              <p className="text-lg text-white/70 max-w-2xl mb-6">
                Ready to level up your development skills? Join our exclusive summer boot camp! Learn modern UI/UX principles, master React & Tailwind, and build fully functional websites from scratch.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 text-white/80 bg-white/5 py-2 px-4 rounded-xl border border-white/10">
                  <Code size={18} className="text-cyan-400" />
                  <span className="text-sm font-medium">Beginner Friendly</span>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105 group"
              >
                Reserve Your Spot
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-white/40 text-xs mt-3 uppercase tracking-wide">Limited seats available</span>
            </div>

          </div>
        </motion.div>
      </div>
      <WorkshopReservationModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}
