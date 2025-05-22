'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navItems } from '../../constants/navItems';
import XMarkIcon from '../../assets/icons/custom/XMarkIcon.tsx';
import HamburgerIcon from '../../assets/icons/custom/HamburgerIcon.tsx';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import clsx from 'clsx';

export default function MobileNavigation({ scrolled }: { scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollSpy(
    navItems.map((item) => item.id),
    100,
  );

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    document.documentElement.classList.toggle('overflow-hidden', !isOpen);
  };

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <div className="lg:hidden z-50">
      <button
        onClick={toggleDrawer}
        aria-label="Menü öffnen"
        className={clsx('z-50 relative', scrolled ? 'text-white' : 'text-gray-800')}
      >
        <HamburgerIcon className="w-10 h-10 stroke-current" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleDrawer}
            />

            {/* Drawer */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-[85vw] max-w-sm z-50 flex bg-white flex-col rounded-s-3xl overflow-hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 150 }}
            >
              {/* Oberer Bereich */}
              <div className="flex-1 relative flex flex-col items-center justify-center px-4 overflow-hidden">
                {/* Hintergrundverlauf + Deko */}
                <motion.div
                  className="absolute inset-0 z-0"
                  style={{
                    background: 'radial-gradient(ellipse at top right, #1b95cc33, transparent 90%)',
                  }}
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />

                {/* Close Button */}
                <div className="w-full flex items-center justify-end pt-4 pr-4 absolute top-0 right-0 z-10">
                  <button onClick={toggleDrawer} aria-label="Menü schließen">
                    <XMarkIcon className="w-10 h-10" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="w-full max-w-xs mt-24 flex flex-col gap-4 px-4">
                  {navItems.map((item) => {
                    const isActive = activeId === item.id;

                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={toggleDrawer}
                        className={clsx(
                          'text-center text-2xl font-headline font-bold rounded-full shadow-md px-6 py-4 transition-all',
                          isActive
                            ? 'bg-accent border-2 border-transparent'
                            : 'bg-white text-primary border border-primary',
                        )}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Unterer Bereich wie echter Footer */}
              <div className="relative bg-primary text-white px-6 pt-10 pb-8 mt-auto overflow-hidden">
                {/* Dekoelement */}
                <motion.div
                  className="absolute left-6 top-4 w-10 h-10 rounded-full bg-accent opacity-80"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Branding */}
                <div className="text-center z-10 relative space-y-2">
                  <div className="text-2xl font-bold font-grotesque">
                    Karriere <span className="text-accent">*</span>Kolleg
                  </div>

                  <p className="text-xs text-white/70">
                    © Karriere Kolleg {new Date().getFullYear()}
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
