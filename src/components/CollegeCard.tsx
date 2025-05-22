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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }} // 👈 wichtig!
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="group block max-w-xl mx-auto overflow-hidden transition-transform duration-300 hover:scale-[1.02] ring-primary/30"
      aria-label={`Mehr erfahren über ${name} an der ${school}`}
    >
      <img
        src={image}
        alt={`Symbolbild für ${topic}`}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      <div className="relative -mt-12 mx-6 bg-white p-6 z-10 h-full">
        <span
          className={clsx(
            'inline-block mb-2 text-xs font-semibold text-white px-3 py-1 rounded-full',
            color,
          )}
        >
          {topic}
        </span>
        <h3 className="text-lg sm:text-xl font-bold mb-1">{name}</h3>
        <p className="text-sm">{school}</p>
      </div>
    </motion.a>
  );
}
