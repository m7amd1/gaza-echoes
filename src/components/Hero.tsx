import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '@/assets/hero-gaza.jpg';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth staggered reveal with elastic ease
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      
      tl.from(titleRef.current, {
        opacity: 0,
        y: 100,
        scale: 0.9,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)',
      })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
      }, '-=0.8');

      // Enhanced parallax with scale
      gsap.to(imageRef.current, {
        y: 250,
        scale: 1.1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen overflow-hidden w-full">
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-[120vh]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center w-full">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 text-foreground max-w-5xl px-2"
        >
          Gaza: Voices of{' '}
          <span className="text-primary">Resilience</span>
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl text-balance px-2"
        >
          An interactive documentary chronicling the ongoing humanitarian catastrophe
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};
