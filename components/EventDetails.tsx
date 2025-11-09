
import React from 'react';

interface EventDetailsProps {
  date: Date;
  venue: {
    name: string;
    address: string;
    mapUrl: string;
  };
}

const EventDetails: React.FC<EventDetailsProps> = ({ date, venue }) => {
  const formattedDay = date.toLocaleDateString('en-US', { weekday: 'long' });
  const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <section className="py-20 md:py-32 bg-brand-accent/20">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-brand-primary">The Wedding</h2>
        <p className="mt-2 text-lg text-brand-text">Join us to celebrate</p>
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="text-center">
            <h3 className="text-2xl font-serif text-brand-primary">When</h3>
            <p className="mt-2 text-lg">{formattedDay}</p>
            <p className="text-lg">{formattedDate}</p>
            <p className="text-lg">{formattedTime}</p>
          </div>
          <div className="h-24 w-px bg-brand-primary/20 hidden md:block"></div>
          <div className="text-center">
            <h3 className="text-2xl font-serif text-brand-primary">Where</h3>
            <p className="mt-2 text-lg">{venue.name}</p>
            <p className="text-lg">{venue.address}</p>
            <a 
              href={venue.mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 inline-block text-brand-secondary hover:text-brand-primary transition-colors duration-300"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
