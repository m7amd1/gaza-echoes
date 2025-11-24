import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import hopeImage from '@/assets/hope-hands.jpg';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "I have operated on children without anesthesia. I have held the hands of mothers who have lost everything. We are not statistics—we are human beings fighting to survive in conditions no one should endure.",
    author: "Dr. Mahmoud Al-Haddad",
    role: "Emergency Surgeon, Al-Shifa Hospital",
    detail: "Working 48-hour shifts with dwindling medical supplies"
  },
  {
    quote: "My daughter draws pictures of our home—the one that was bombed. She's six years old and has already witnessed more death than anyone should in a lifetime. When will her childhood begin?",
    author: "Fatima Hassan",
    role: "Mother of Four, Rafah Displacement Camp",
    detail: "Living in a tent with three generations of family"
  },
  {
    quote: "Every day I witness miracles of human spirit—neighbors sharing their last piece of bread, strangers becoming family. But resilience should never be a prerequisite for the right to live with dignity.",
    author: "Ahmed Suleiman",
    role: "Humanitarian Aid Coordinator",
    detail: "Coordinating relief efforts across Gaza since 2023"
  },
  {
    quote: "I was a teacher. Now I teach children under tarps and open skies. They deserve classrooms, they deserve futures. Instead, they're learning to survive war.",
    author: "Layla Mansour",
    role: "Elementary School Teacher, Khan Younis",
    detail: "Educating 50+ displaced children daily"
  },
];

export const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 80,
        rotationX: -15,
        stagger: {
          amount: 0.6,
          from: 'start',
        },
        duration: 1.4,
        ease: 'power4.out',
      });

      // Hover animation for cards
      const cards = document.querySelectorAll('.testimonial-card');
      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.02,
            y: -5,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-secondary/30 relative overflow-hidden w-full">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${hopeImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 sm:mb-4 text-foreground px-2">
          Voices From Gaza
        </h2>
        <p className="text-center text-muted-foreground text-base sm:text-lg mb-12 sm:mb-16 md:mb-20 max-w-2xl mx-auto px-2">
          Real stories from those who live through this reality every day
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-card/90 backdrop-blur-sm border-l-4 border-primary p-6 sm:p-7 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="text-primary text-5xl sm:text-6xl mb-2 sm:mb-3 font-serif leading-none">"</div>
              <p className="text-foreground text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed italic min-h-[120px] sm:min-h-[140px]">
                {testimonial.quote}
              </p>
              <div className="border-t border-border pt-3 sm:pt-4 space-y-1">
                <div className="font-bold text-foreground text-base sm:text-lg">{testimonial.author}</div>
                <div className="text-primary text-xs sm:text-sm font-medium">{testimonial.role}</div>
                <div className="text-muted-foreground text-xs pt-2 italic">{testimonial.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
