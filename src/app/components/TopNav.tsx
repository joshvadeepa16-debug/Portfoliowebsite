import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { AuthModal } from './Auth/AuthModal';
import { LogOut, User, Home, LayoutList } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router';

export function TopNav() {
  const { user, logout, isLoading } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();

  if (isLoading) return null;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 p-6 w-full flex justify-between items-center pointer-events-none">
        {/* Navigation Links */}
        <div className="pointer-events-auto flex gap-3">
          <Link to="/">
            <motion.div 
              className={`flex items-center gap-2 backdrop-blur-md rounded-full px-5 py-2 border transition-all duration-300 font-medium text-sm group ${
                location.pathname === '/' 
                ? 'bg-blue-500/20 text-white border-blue-500/30' 
                : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border-white/10 hover:border-white/20'
              }`}
            >
              <Home size={16} className={location.pathname === '/' ? 'text-blue-400' : ''} />
              <span>Home</span>
            </motion.div>
          </Link>
          <Link to="/services">
            <motion.div 
              className={`flex items-center gap-2 backdrop-blur-md rounded-full px-5 py-2 border transition-all duration-300 font-medium text-sm group ${
                location.pathname === '/services' 
                ? 'bg-blue-500/20 text-white border-blue-500/30' 
                : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border-white/10 hover:border-white/20'
              }`}
            >
              <LayoutList size={16} className={location.pathname === '/services' ? 'text-blue-400' : ''} />
              <span>Services & Pricing</span>
            </motion.div>
          </Link>
        </div>

        {/* Auth System */}
        <div className="pointer-events-auto">
          {user ? (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 shadow-lg"
            >
              <div className="flex items-center gap-2 text-white/80">
                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium pr-2 max-w-[150px] truncate">
                  {user.username}
                </span>
              </div>
              <div className="h-4 w-px bg-white/20"></div>
              <button
                onClick={logout}
                className="flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors group"
              >
                <LogOut size={16} className="group-hover:text-red-400 transition-colors" />
                <span className="group-hover:text-red-400 transition-colors">Logout</span>
              </button>
            </motion.div>
          ) : (
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setIsAuthModalOpen(true)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300 text-white font-medium text-sm group"
            >
              <User size={18} className="group-hover:scale-110 transition-transform duration-300 text-blue-400" />
              <span>Login / Register</span>
            </motion.button>
          )}
        </div>
      </div>

      <AuthModal isOpen={isAuthModalOpen} onOpenChange={setIsAuthModalOpen} />
    </>
  );
}
