import clsx from 'clsx';
// import GraduationCapIcon from 'assets/icons/custom/GraduationCapIcon'; // Optional

interface LogoProps {
  scrolled: boolean;
}

export default function Logo({ scrolled }: LogoProps) {
  return (
    <div className="relative flex items-center gap-2 h-full z-10">
      {/* Background-Blob */}
      <div
        className={clsx(
          'absolute -left-[6.875rem] top-[8.75rem] -translate-y-1/2 w-[37.5rem] pointer-events-none transition-opacity duration-300',
          scrolled ? 'opacity-0' : 'opacity-100',
        )}
      >
        {/*<ColorBlob />*/}
      </div>

      {/* Icon - Optional */}

      {/*<div className="z-10 transition-all duration-300">*/}
      {/*    <GraduationCapIcon*/}
      {/*        className={clsx(*/}
      {/*            'fill-current text-white transition-all duration-300',*/}
      {/*            scrolled ? 'h-10' : 'h-12'*/}
      {/*        )}*/}
      {/*    />*/}
      {/*</div>*/}

      {/* Titel - Optional */}

      {/*<span*/}
      {/*    className={clsx(*/}
      {/*        'font-headline font-semibold text-white z-10 transition-all duration-300',*/}
      {/*        scrolled ? 'text-3xl' : 'text-4xl md:text-4xl'*/}
      {/*    )}*/}
      {/*>*/}
      {/*    Karriere Kolleg*/}
      {/*</span>*/}
    </div>
  );
}
