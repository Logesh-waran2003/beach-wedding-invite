import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const scrollLineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Cinematic reveal: overlay lifts, then content fades in
      tl.to(overlayRef.current, { yPercent: -100, duration: 1.4, ease: 'power3.inOut' })
        .from(contentRef.current.children, {
          y: 40, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power2.out',
        }, '-=0.3');

      // Scroll indicator pulse
      gsap.to(scrollLineRef.current, {
        y: 12, opacity: 0, duration: 1.2, repeat: -1, ease: 'power1.in',
      });

      // Parallax background on scroll
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });

      // Fade out content on scroll
      gsap.to(contentRef.current, {
        opacity: 0, y: -60,
        scrollTrigger: { trigger: sectionRef.current, start: '20% top', end: '50% top', scrub: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: 'url(/images/beach-hero.jpg)' }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      {/* Cinematic dark overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-[#1a1a1a] z-10" />

      {/* Content */}
      <div ref={contentRef} className="relative z-20 flex flex-col items-center justify-center h-full text-center">
        <h1 className="font-[family-name:var(--font-display)] text-7xl md:text-9xl font-light text-[#c9a96e] leading-none">
          Abhishek
        </h1>

        <div className="w-16 h-px bg-[#c9a96e] mx-auto my-4" />

        <p className="font-[family-name:var(--font-body)] text-[#c9a96e] text-sm tracking-widest uppercase">
          Weds
        </p>

        <div className="w-16 h-px bg-[#c9a96e] mx-auto my-4" />

        <h1 className="font-[family-name:var(--font-display)] text-7xl md:text-9xl font-light text-[#c9a96e] leading-none">
          Kanika
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <div ref={scrollLineRef} className="w-px h-8 bg-[#c9a96e]" />
      </div>
    </section>
  );
}
