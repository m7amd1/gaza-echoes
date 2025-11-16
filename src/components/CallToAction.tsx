import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        },
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-4xl mx-auto text-center cta-content">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Your Voice Matters
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          The world cannot turn away. Share these stories, demand accountability, and stand with
          the people of Gaza in their pursuit of justice, dignity, and freedom.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
          >
            Share This Story
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
          >
            Take Action
          </Button>
        </div>
        <div className="mt-16 pt-16 border-t border-border">
          <p className="text-muted-foreground text-sm">
            "In the end, we will remember not the words of our enemies, but the silence of our friends."
          </p>
          <p className="text-muted-foreground text-xs mt-2">— Dr. Martin Luther King Jr.</p>
        </div>
      </div>
    </div>
  );
};
