
import React from 'react';

interface HeroProps {
  couple: { her: string; him: string };
  date: Date;
}

const Hero: React.FC<HeroProps> = ({ couple, date }) => {
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?image=1043')` }}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-brand-light p-4">
        <h2 className="text-xl md:text-2xl font-sans tracking-widest uppercase">We're Getting Married</h2>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif my-4">
          {couple.her} & {couple.him}
        </h1>
        <p className="text-xl md:text-2xl font-sans font-light">{formattedDate}</p>

        <a href="#rsvp" className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center">
          <span className="font-sans text-sm tracking-wider">RSVP</span>
          <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
