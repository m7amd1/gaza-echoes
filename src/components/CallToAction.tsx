import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      tl.from('.cta-heading', {
        opacity: 0,
        y: 80,
        scale: 0.9,
        duration: 1,
        ease: 'power4.out',
      })
      .from('.cta-text', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5')
      .from('.cta-button', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.6,
        ease: 'back.out(1.4)',
      }, '-=0.4')
      .from('.cta-quote', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.3');

      // Magnetic button effect
      const buttons = document.querySelectorAll('.cta-button');
      buttons.forEach((button) => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.4,
            ease: 'power2.out',
          });
        });
        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-secondary/30 via-background to-secondary/20 relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_50%)]" />
      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <h2 className="cta-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 text-foreground bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text px-2">
          Your Voice Matters
        </h2>
        <p className="cta-text text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 sm:mb-12 md:mb-14 max-w-2xl mx-auto leading-relaxed px-2">
          The world cannot turn away. Share these stories, demand accountability, and stand with
          the people of Gaza in their pursuit of justice, dignity, and freedom.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-6 sm:mb-8 px-2">
          <Button
            size="lg"
            className="cta-button w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Share This Story
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="cta-button w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-semibold transition-all duration-300"
          >
            Take Action
          </Button>
        </div>
        <div className="cta-quote mt-12 sm:mt-16 md:mt-20 pt-12 sm:pt-16 border-t border-border/50">
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg italic mb-2 sm:mb-3 leading-relaxed px-2">
            "In the end, we will remember not the words of our enemies, but the silence of our friends."
          </p>
          <p className="text-muted-foreground/70 text-xs sm:text-sm font-medium">— Dr. Martin Luther King Jr.</p>
        </div>
      </div>
    </div>
  );
};
