
import React from 'react';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import { weddingDate, couple, venue, ourStory } from './config';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-brand-text bg-brand-bg">
      <main className="flex-grow">
        <Hero couple={couple} date={weddingDate} />
        <OurStory couple={couple} story={ourStory} />
        <Countdown date={weddingDate} />
        <EventDetails venue={venue} date={weddingDate} />
        <RSVP />
      </main>
      <Footer couple={couple} />
    </div>
  );
};

export default App;
