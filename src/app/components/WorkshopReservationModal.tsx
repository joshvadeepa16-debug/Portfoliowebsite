import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, Loader2, CalendarCheck } from 'lucide-react';
import { toast } from 'sonner';

interface WorkshopReservationModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WorkshopReservationModal({ isOpen, onOpenChange }: WorkshopReservationModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`http://localhost:3001/api/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit reservation');
      }

      toast.success("Spot Reserved Successfully! We will contact you soon.");
      onOpenChange(false);
      setFormData({ name: '', email: '', phone: '' });
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
                className="fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] p-6"
              >
                <div className="relative overflow-hidden rounded-3xl bg-[#0a0f1d] p-8 shadow-[0_0_50px_rgba(59,130,246,0.3)] border border-blue-500/30">
                  <Dialog.Close className="absolute right-4 top-4 rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white">
                    <X size={20} />
                  </Dialog.Close>

                  <div className="mb-8 text-center relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.1 }}
                      className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/30 to-cyan-500/10 text-cyan-400 mb-6 border border-cyan-500/20"
                    >
                      <CalendarCheck size={32} />
                    </motion.div>
                    <Dialog.Title className="text-2xl font-bold tracking-tight text-white mb-2">
                      Reserve Your Spot
                    </Dialog.Title>
                    <Dialog.Description className="text-sm text-cyan-200/60 font-medium">
                      Join the summer workshop. Enter your contact details below to guarantee your seat!
                    </Dialog.Description>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                    <div className="space-y-4">
                      
                      {/* Name Input */}
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-400/80 group-focus-within:text-cyan-400 transition-colors">
                          <User size={18} />
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="block w-full rounded-xl border border-white/10 bg-white/5 p-3.5 pl-11 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-500 focus:bg-white/10 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                          placeholder="Your Full Name"
                        />
                      </div>

                      {/* Email Input */}
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-400/80 group-focus-within:text-cyan-400 transition-colors">
                          <Mail size={18} />
                        </div>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="block w-full rounded-xl border border-white/10 bg-white/5 p-3.5 pl-11 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-500 focus:bg-white/10 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                          placeholder="Email Address"
                        />
                      </div>
                      
                      {/* Phone Input */}
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-400/80 group-focus-within:text-cyan-400 transition-colors">
                          <Phone size={18} />
                        </div>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="block w-full rounded-xl border border-white/10 bg-white/5 p-3.5 pl-11 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-500 focus:bg-white/10 focus:ring-1 focus:ring-cyan-500 transition-all duration-300"
                          placeholder="Phone Number"
                        />
                      </div>
                      
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 mt-2 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-cyan-400 hover:shadow-cyan-500/40 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-[#0a0f1d] disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {isLoading ? (
                        <Loader2 className="animate-spin" size={20} />
                      ) : (
                        <span className="relative z-10 tracking-widest uppercase text-xs">Confirm Registration</span>
                      )}
                    </button>
                    <p className="text-center text-[10px] text-white/30 uppercase tracking-widest mt-4">Safe & Secure Booking</p>
                  </form>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
