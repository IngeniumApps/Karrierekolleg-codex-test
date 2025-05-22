'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

type Props = {
  name: string;
  topic: string;
  school: string;
  link: string;
  color: string;
  image: string;
  /**
   * Visual style variant. `default` matches the current design while
   * `glass` applies a frosted glass look with a subtle 3D hover effect.
   */
  variant?: 'default' | 'glass';
};

export default function CollegeCard({
  name,
  topic,
  school,
  link,
  color,
  image,
  variant = 'default',
}: Props) {
  const isGlass = variant === 'glass';

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={isGlass ? { y: -6 } : { scale: 1.03 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={clsx(
        'group relative block w-72 shrink-0 snap-center',
        isGlass && 'overflow-hidden rounded-2xl shadow-xl backdrop-blur-lg bg-white/20',
      )}
      aria-label={`Mehr erfahren über ${name} an der ${school}`}
    >
      <img
        src={image}
        alt={`Symbolbild für ${topic}`}
        className={clsx(
          'w-full h-52 object-cover',
          isGlass ? 'absolute inset-0 z-0 scale-105 transition-transform duration-500 group-hover:scale-110' : 'rounded-2xl shadow-lg',
        )}
        loading="lazy"
      />

      {isGlass ? (
        <div className="absolute inset-0 z-10 bg-white/10 backdrop-blur-lg transition-colors group-hover:bg-white/20" />
      ) : (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      )}

      <div className={clsx('absolute bottom-0 left-0 right-0 text-white', isGlass ? 'z-20 p-5' : 'p-4')}>
        <span
          className={clsx(
            'inline-block mb-1 text-xs font-semibold text-white px-3 py-1 rounded-full',
            color,
          )}
        >
          {topic}
        </span>
        <h3 className="text-lg font-bold leading-snug">{name}</h3>
        <p className="text-sm opacity-90">{school}</p>
      </div>
    </motion.a>
  );
}
