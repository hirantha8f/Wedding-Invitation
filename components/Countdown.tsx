
import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

interface CountdownProps {
  date: Date;
}

const CountdownItem: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center bg-brand-light/50 rounded-lg p-4 md:p-6 w-24 h-24 md:w-32 md:h-32 shadow-lg">
    <span className="text-4xl md:text-5xl font-serif text-brand-primary">{value < 0 ? 0 : value}</span>
    <span className="text-sm uppercase tracking-wider text-brand-text">{label}</span>
  </div>
);

const Countdown: React.FC<CountdownProps> = ({ date }) => {
  const [days, hours, minutes, seconds] = useCountdown(date);

  const isWeddingDay = days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0;

  return (
    <section className="py-20 md:py-28 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?image=1025')` }}>
       <div className="absolute inset-0 bg-brand-bg/60"></div>
       <div className="relative container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-primary mb-8">
            {isWeddingDay ? "It's a beautiful day to get married!" : "Counting down the days"}
        </h2>
        {!isWeddingDay && (
             <div className="flex justify-center gap-4 md:gap-8">
                <CountdownItem value={days} label="Days" />
                <CountdownItem value={hours} label="Hours" />
                <CountdownItem value={minutes} label="Minutes" />
                <CountdownItem value={seconds} label="Seconds" />
            </div>
        )}
       </div>
    </section>
  );
};

export default Countdown;
