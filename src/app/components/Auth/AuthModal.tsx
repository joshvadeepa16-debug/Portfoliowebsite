import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'sonner';

interface AuthModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthModal({ isOpen, onOpenChange }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { login } = useAuth();

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({ username: '', password: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const endpoint = isLogin ? '/api/login' : '/api/register';
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      login(data.token, data.user);
      onOpenChange(false);
      toast.success(isLogin ? `Welcome back, ${data.user.username}!` : 'Registration successful!');
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
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                className="fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] p-6"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/10 p-8 shadow-2xl backdrop-blur-md border border-white/20">
                  <Dialog.Close className="absolute right-4 top-4 rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white">
                    <X size={20} />
                  </Dialog.Close>

                  <div className="mb-8 text-center">
                    <motion.div
                      key={isLogin ? 'login' : 'register'}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300 mb-4"
                    >
                      {isLogin ? <Lock size={24} /> : <User size={24} />}
                    </motion.div>
                    <Dialog.Title className="text-2xl font-bold tracking-tight text-white mb-2">
                      {isLogin ? 'Welcome back' : 'Create an account'}
                    </Dialog.Title>
                    <Dialog.Description className="text-sm text-white/60">
                      {isLogin 
                        ? 'Enter your credentials to access your account' 
                        : 'Sign up to unlock all features'
                      }
                    </Dialog.Description>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-4">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-400/80">
                          <User size={18} />
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.username}
                          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                          className="block w-full rounded-xl border border-white/10 bg-white/5 p-3 pl-10 text-sm text-white placeholder-white/40 outline-none focus:border-blue-500 focus:bg-white/10 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                          placeholder="Username"
                        />
                      </div>
                      
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-400/80">
                          <Lock size={18} />
                        </div>
                        <input
                          type="password"
                          required
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          className="block w-full rounded-xl border border-white/10 bg-white/5 p-3 pl-10 text-sm text-white placeholder-white/40 outline-none focus:border-blue-500 focus:bg-white/10 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-blue-600 p-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-70"
                    >
                      {isLoading ? (
                        <Loader2 className="animate-spin" size={20} />
                      ) : (
                        <span className="relative z-10">{isLogin ? 'Sign In' : 'Sign Up'}</span>
                      )}
                      {!isLoading && (
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                      )}
                    </button>
                  </form>

                  <div className="mt-6 text-center text-sm text-white/60">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button
                      type="button"
                      onClick={handleToggle}
                      className="font-medium text-blue-400 hover:text-blue-300 hover:underline transition-all"
                    >
                      {isLogin ? 'Sign up' : 'Sign in'}
                    </button>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
