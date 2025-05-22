import { motion } from 'framer-motion';
import clsx from 'clsx';
import Logo from '@components/common/Logo.tsx';
import DesktopNavigation from './DesktopNavigation.tsx';
import MobileNavigation from './MobileNavigation.tsx';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full z-40 transition-all duration-300',
        scrolled ? 'bg-primary shadow-md h-20' : 'bg-transparent h-36 lg:overflow-hidden',
      )}
    >
      {/* 🎨 Blob-Deko links */}
      {/*{!scrolled && (*/}
      {/*    <motion.div*/}
      {/*        className="hidden lg:block absolute -top-20 -left-32 w-[400px] h-[400px] rounded-full bg-accent opacity-40 blur-3xl z-0"*/}
      {/*        animate={{ scale: [1, 1.1, 1] }}*/}
      {/*        transition={{ duration: 6, repeat: Infinity }}*/}
      {/*    />*/}
      {/*)}*/}

      {/* 🎉 Welle oder Form rechts */}
      {/*{!scrolled && (*/}
      {/*    <motion.div*/}
      {/*        className="hidden lg:block absolute -bottom-10 right-10 w-32 h-32 rounded-full bg-yellow-400 opacity-60 blur-2xl z-0"*/}
      {/*        animate={{ rotate: [0, 30, -30, 0] }}*/}
      {/*        transition={{ duration: 8, repeat: Infinity }}*/}
      {/*    />*/}
      {/*)}*/}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5 flex items-center justify-between h-full z-10">
        <Logo scrolled={scrolled} />

        <div className="hidden lg:flex items-center gap-10">
          <DesktopNavigation scrolled={scrolled} />

          {/* 🎯 Call-to-Action oben */}
          {!scrolled && (
            <motion.a
              href={`${import.meta.env.BASE_URL}#kollegs`}
              className="
                    inline-block bg-white text-primary font-bold border border-primary px-8 py-4 rounded-full shadow-md transition -rotate-3 hover:rotate-0 hover:scale-105"
              whileHover={{ rotate: 0, scale: 1.05 }}
            >
              Starte jetzt!
            </motion.a>
          )}
        </div>

        <div className="lg:hidden">
          <MobileNavigation scrolled={scrolled} />
        </div>
      </div>
    </header>
  );
}
