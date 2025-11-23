import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    date: 'October 7, 2023',
    title: 'The Breaking Point',
    description: 'Armed conflict erupts, triggering an unprecedented military response. Within hours, airstrikes begin targeting residential areas in Gaza, marking the onset of what would become one of the deadliest escalations in decades.',
    casualties: '250+ lives lost in first 24 hours',
  },
  {
    date: 'October 9-13, 2023',
    title: 'Total Siege Declared',
    description: 'Israel announces complete blockade of Gaza. All electricity, water, fuel, and food supplies are cut off. The 2.3 million residents are trapped with rapidly depleting resources.',
    casualties: 'Essential services cut to 2.3M people',
  },
  {
    date: 'October 17-31, 2023',
    title: 'Healthcare System Collapses',
    description: 'Hospitals come under repeated bombardment. Al-Shifa Hospital, Gaza\'s largest medical facility, loses power. Premature babies die in non-functioning incubators. Surgeons operate by flashlight.',
    casualties: '30+ hospitals damaged or destroyed',
  },
  {
    date: 'November 2023',
    title: 'Mass Forced Displacement',
    description: 'Evacuation orders force over 1.9 million Palestinians to flee their homes. Families pack into overcrowded shelters, schools, and UN facilities. Many find no shelter at all.',
    casualties: '1.9M people displaced (85% of population)',
  },
  {
    date: 'December 2023',
    title: 'Southern Gaza Offensive',
    description: 'Despite assurances of safety, southern Gaza comes under heavy bombardment. Rafah, where displaced families sought refuge, becomes a new frontline. Nowhere in Gaza remains safe.',
    casualties: '20,000+ total casualties reported',
  },
  {
    date: 'January 2024',
    title: 'Famine and Disease',
    description: 'UN agencies warn of imminent famine affecting entire population. Children are dying of starvation and dehydration. Diseases spread rapidly in overcrowded, unsanitary conditions.',
    casualties: 'Acute malnutrition affects 90% of children',
  },
  {
    date: 'February-May 2024',
    title: 'ICJ Rulings and Continued Assault',
    description: 'International Court of Justice orders measures to prevent genocide. Despite global outcry and international law, bombardment continues. Infrastructure lies in ruins.',
    casualties: '35,000+ lives lost, 70% civilian infrastructure destroyed',
  },
  {
    date: 'Present Day - 2025',
    title: 'Ongoing Humanitarian Catastrophe',
    description: 'Over 50,000 lives lost, majority women and children. Entire neighborhoods erased. Generations of families wiped out. Yet Palestinians endure, their spirit unbroken.',
    casualties: '50,000+ killed, countless wounded, futures destroyed',
  },
];

export const Timeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line growth with glow effect
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: 'top',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1.5,
        },
      });

      // Enhanced event animations with 3D perspective
      gsap.utils.toArray('.timeline-event').forEach((event: any, index) => {
        const isEven = index % 2 === 0;
        
        gsap.from(event, {
          opacity: 0,
          x: isEven ? -150 : 150,
          rotationY: isEven ? -20 : 20,
          scale: 0.8,
          scrollTrigger: {
            trigger: event,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1.5,
            toggleActions: 'play none none reverse',
          },
        });

        // Pulse dot animation when in view
        const dot = event.querySelector('.timeline-dot');
        if (dot) {
          ScrollTrigger.create({
            trigger: event,
            start: 'top 70%',
            onEnter: () => {
              gsap.to(dot, {
                scale: 1.5,
                opacity: 0.5,
                duration: 0.6,
                ease: 'power2.inOut',
                yoyo: true,
                repeat: 3,
              });
            },
          });
        }
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
          {/* Center line with glow */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 -translate-x-1/2 hidden md:block shadow-[0_0_10px_rgba(220,38,38,0.3)]"
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
                {/* Dot on timeline with glow */}
                <div
                  className={`timeline-dot hidden md:block absolute top-2 w-5 h-5 bg-primary rounded-full shadow-[0_0_15px_rgba(220,38,38,0.6)] border-2 border-background ${
                    index % 2 === 0 ? 'right-0 translate-x-[50%]' : 'left-0 -translate-x-[50%]'
                  }`}
                />

                <div className="bg-card/95 backdrop-blur border border-border rounded-lg p-7 hover:border-primary/70 hover:shadow-xl transition-all duration-500 group">
                  <div className="text-primary font-bold mb-2 text-sm uppercase tracking-wider">{event.date}</div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{event.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{event.description}</p>
                  <div className="pt-3 border-t border-border/50">
                    <p className="text-primary/90 text-sm font-semibold">{event.casualties}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
