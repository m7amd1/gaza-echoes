import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import oliveTree from '@/assets/olive-tree.jpg';

gsap.registerPlugin(ScrollTrigger);

export const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: 'power3.out',
      });

      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        duration: 1.2,
        delay: 0.3,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-background w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div ref={imageRef} className="relative w-full">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={oliveTree}
                alt="Olive tree symbolizing Palestinian resilience"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg" />
          </div>

          <div ref={textRef} className="space-y-5 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Rooted in Resilience
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              The olive tree has stood as a symbol of Palestinian identity, heritage, and perseverance for
              generations. Like these ancient trees, the people of Gaza remain steadfast, their roots deep
              despite the storms that seek to uproot them.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Through destruction and displacement, through loss and grief, the spirit of Palestine endures—
              a testament to the unbreakable will of a people who refuse to be forgotten.
            </p>
            <div className="pt-3 sm:pt-4">
              <blockquote className="border-l-4 border-primary pl-4 sm:pl-6 italic text-foreground/80 text-sm sm:text-base">
                "They tried to bury us. They didn't know we were seeds."
                <footer className="text-muted-foreground mt-2 not-italic text-xs sm:text-sm">
                  — Palestinian Proverb
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
