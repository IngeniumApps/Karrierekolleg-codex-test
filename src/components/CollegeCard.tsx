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
};

export default function CollegeCard({ name, topic, school, link, color, image }: Props) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="group relative block w-72 shrink-0 snap-center"
      aria-label={`Mehr erfahren über ${name} an der ${school}`}
    >
      <img
        src={image}
        alt={`Symbolbild für ${topic}`}
        className="w-full h-52 object-cover rounded-2xl shadow-lg"
        loading="lazy"
      />

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
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
