'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ChatEntry {
  sender: string;
  time: string;
  text: string;
  image: string;
}

interface ChatBubbleProps {
  position?: string;
  entries: ChatEntry[];
  delayOffset?: number;
}

export default function HeroChatBubble({
  position = 'top-0 left-0',
  entries,
  delayOffset = 0,
}: ChatBubbleProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % entries.length);
      }, 8000);
      return () => clearInterval(interval);
    }, delayOffset);
    return () => clearTimeout(timeout);
  }, [entries.length, delayOffset]);

  const current = entries[index];

  return (
    <div className={`absolute ${position} z-20`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-2"
        >
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={`${import.meta.env.BASE_URL}images/${current.image}`}
            width="80"
            height="80"
            alt={`${current.sender} Avatar`}
          />
          <div className="flex flex-col w-full max-w-[220px] p-2 border border-gray-200 bg-white/70 backdrop-blur-md rounded-e-xl rounded-es-xl shadow-sm">
            <div className="flex items-center space-x-1">
              <span className="text-[10px] font-semibold">{current.sender}</span>
              <span className="text-[10px] text-gray-500">{current.time}</span>
            </div>
            <p className="text-xs py-1">{current.text}</p>
            <span className="text-[10px] text-gray-400">Zugestellt</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
