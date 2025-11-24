import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: 50000, label: 'Lives Lost', suffix: '+' },
  { value: 75, label: 'Percentage Children & Women', suffix: '%' },
  { value: 2000000, label: 'Displaced People', suffix: '+' },
  { value: 70, label: 'Infrastructure Destroyed', suffix: '%' },
];

export const Statistics = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards first
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 60,
        scale: 0.9,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Then animate numbers
      let hasAnimated = false;
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          if (!hasAnimated) {
            hasAnimated = true;
            
            stats.forEach((stat, index) => {
              const element = statRefs.current[index];
              if (element) {
                const obj = { value: 0 };
                gsap.to(obj, {
                  value: stat.value,
                  duration: 2.5,
                  delay: 0.3 + (index * 0.15),
                  ease: 'power2.out',
                  onUpdate: function() {
                    const currentValue = Math.floor(obj.value);
                    const formatted = formatNumber(currentValue);
                    element.textContent = formatted + (stat.suffix || '');
                  },
                });
              }
            });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <div ref={sectionRef} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-secondary/50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16 md:mb-20 text-foreground px-2">
          The Human Cost
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card bg-card border border-border rounded-lg p-6 sm:p-8 text-center hover:border-primary/50 transition-all duration-500"
            >
              <div 
                ref={el => statRefs.current[index] = el}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-3 sm:mb-4"
              >
                0{stat.suffix}
              </div>
              <div className="text-base sm:text-lg text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
