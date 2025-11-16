import { Hero } from '@/components/Hero';
import { Statistics } from '@/components/Statistics';
import { Timeline } from '@/components/Timeline';
import { Testimonials } from '@/components/Testimonials';
import { Gallery } from '@/components/Gallery';
import { CallToAction } from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Statistics />
      <Timeline />
      <Testimonials />
      <Gallery />
      <CallToAction />
    </div>
  );
};

export default Index;
