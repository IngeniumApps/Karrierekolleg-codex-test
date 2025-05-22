import { renderHook, act } from '@testing-library/react';
import { useScrollSpy } from './useScrollSpy';
import { afterEach, describe, expect, test } from 'vitest';
import { cleanup } from '@testing-library/react';

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div id="section1">Section 1</div>
      <div id="section2">Section 2</div>
      <div id="section3">Section 3</div>
      {children}
    </div>
  );
}

describe('useScrollSpy', () => {
  afterEach(() => {
    cleanup();
  });

  test('updates active id when sections enter the viewport', () => {
    const { result } = renderHook(() => useScrollSpy(['section1', 'section2', 'section3']), {
      wrapper: Wrapper,
    });

    const s1 = document.getElementById('section1') as HTMLElement;
    const s2 = document.getElementById('section2') as HTMLElement;
    const s3 = document.getElementById('section3') as HTMLElement;

    act(() => {
      Object.defineProperty(s1, 'offsetTop', { value: 0, configurable: true });
      Object.defineProperty(s2, 'offsetTop', { value: 100, configurable: true });
      Object.defineProperty(s3, 'offsetTop', { value: 200, configurable: true });
      Object.defineProperty(window, 'scrollY', {
        value: 0,
        writable: true,
        configurable: true,
      });
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe('section1');

    act(() => {
      window.scrollY = 150;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe('section2');

    act(() => {
      window.scrollY = 250;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe('section3');
  });
});
