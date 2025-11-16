import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    date: 'October 7, 2023',
    title: 'The Breaking Point',
    description: 'Escalation begins, marking the start of an unprecedented humanitarian crisis.',
  },
  {
    date: 'October 2023',
    title: 'Siege Tightens',
    description: 'Complete blockade imposed. Water, electricity, and medical supplies cut off.',
  },
  {
    date: 'November 2023',
    title: 'Hospitals Under Attack',
    description: 'Medical facilities targeted. Healthcare system collapses under relentless assault.',
  },
  {
    date: 'December 2023',
    title: 'Mass Displacement',
    description: 'Over 1.9 million people forced from their homes, seeking safety that doesn\'t exist.',
  },
  {
    date: 'January 2024',
    title: 'Famine Warnings',
    description: 'UN warns of imminent famine. Children dying of malnutrition and preventable diseases.',
  },
  {
    date: 'Present Day',
    title: 'Ongoing Catastrophe',
    description: 'The world watches as the humanitarian crisis deepens. The call for justice grows louder.',
  },
];

export const Timeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line growth
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: 'top',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      });

      // Animate each event
      gsap.utils.toArray('.timeline-event').forEach((event: any, index) => {
        gsap.from(event, {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          scrollTrigger: {
            trigger: event,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-32 px-6 bg-background relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 text-foreground">
          Timeline of Tragedy
        </h2>

        <div className="relative">
          {/* Center line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/30 -translate-x-1/2 hidden md:block"
          />

          {/* Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`timeline-event relative md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
                }`}
              >
                {/* Dot on timeline */}
                <div
                  className={`hidden md:block absolute top-0 w-4 h-4 bg-primary rounded-full ${
                    index % 2 === 0 ? 'right-0 translate-x-[50%]' : 'left-0 -translate-x-[50%]'
                  }`}
                />

                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-500">
                  <div className="text-primary font-semibold mb-2">{event.date}</div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{event.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
