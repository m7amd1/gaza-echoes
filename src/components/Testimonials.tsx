import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hopeImage from '@/assets/hope-hands.jpg';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "We are not numbers. We are people with dreams, families, and futures that have been stolen from us.",
    author: "Dr. Mahmoud Al-Haddad",
    role: "Physician, Gaza City",
  },
  {
    quote: "My children ask me when we can go home. How do I tell them there is no home to return to?",
    author: "Fatima Hassan",
    role: "Mother of Four, Rafah",
  },
  {
    quote: "Every day I witness miracles of resilience. But resilience should not be a requirement for survival.",
    author: "Ahmed Suleiman",
    role: "Aid Worker",
  },
];

export const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        opacity: 0,
        y: 60,
        stagger: 0.3,
        duration: 1.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-32 px-6 bg-secondary/30 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${hopeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 text-foreground">
          Voices From Gaza
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-20 max-w-2xl mx-auto">
          Real stories from those who live through this reality every day
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-card/80 backdrop-blur-sm border-l-4 border-primary p-8 rounded-lg"
            >
              <div className="text-primary text-5xl mb-4 font-serif">"</div>
              <p className="text-foreground text-lg mb-6 leading-relaxed italic">
                {testimonial.quote}
              </p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-muted-foreground text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
