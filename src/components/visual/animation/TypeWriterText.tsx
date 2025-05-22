'use client';

import { useTypewriter, Cursor } from 'react-simple-typewriter';
import type { FC } from 'react';
import clsx from 'clsx';
import { useRef, useEffect, useState } from 'react';

interface TypewriterTextProps {
  words: string[];
  loop?: number | boolean;
  className?: string;
  cursorStyle?: string;
}

const TypewriterText: FC<TypewriterTextProps> = ({
  words,
  loop = true,
  className = '',
  cursorStyle = '|',
}) => {
  const [text] = useTypewriter({
    words,
    loop,
    typeSpeed: 150,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  const colors = [
    'text-accent',
    'text-pink',
    'text-yellow',
    'text-red',
    'text-green',
    'text-orange',
    'text-lavendel',
    'text-dark_orange',
  ];

  const colorIndex = useRef(0);
  const previousLength = useRef(0);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  useEffect(() => {
    const wasEmpty = previousLength.current === 0;
    const isNewWordStart = text.length === 1 && wasEmpty;

    if (isNewWordStart) {
      colorIndex.current = (colorIndex.current + 1) % colors.length;
      setCurrentColor(colors[colorIndex.current]);
    }

    previousLength.current = text.length;
  }, [text]);

  const maxWordLength = Math.max(...words.map((word) => word.length));

  return (
    <span
      className={clsx('inline-block w-full max-w-[90vw]', className)}
      style={{ minWidth: `${maxWordLength}ch` }}
    >
      <span className={currentColor}>{text.charAt(0)}</span>
      <span>{text.slice(1)}</span>
      <span className={currentColor}>
        <Cursor cursorStyle={cursorStyle} />
      </span>
    </span>
  );
};

export default TypewriterText;
