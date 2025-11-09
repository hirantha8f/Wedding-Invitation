
import React, { useState, useEffect } from 'react';

const RSVP: React.FC = () => {
  const [guestName, setGuestName] = useState('');
  const [attendance, setAttendance] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [shareableLink, setShareableLink] = useState('');
  const [linkGuestName, setLinkGuestName] = useState('');

  useEffect(() => {
    // Check for guest name in URL query parameters
    const params = new URLSearchParams(window.location.search);
    const nameFromUrl = params.get('guest');
    if (nameFromUrl) {
      setGuestName(nameFromUrl);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !attendance) {
      alert('Please fill in your name and attendance status.');
      return;
    }
    setSubmitted(true);
    // In a real application, you would send this data to a server.
    console.log({ guestName, attendance, message });
  };
  
  const generateLink = () => {
    if (!linkGuestName) {
        setShareableLink('');
        return;
    };
    const url = new URL(window.location.href);
    url.searchParams.set('guest', linkGuestName);
    setShareableLink(url.href);
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-20 md:py-32 bg-brand-bg">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-primary">Thank You!</h2>
          <p className="mt-4 text-lg">Your response has been received.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 md:py-32 bg-brand-bg">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-primary">Kindly RSVP</h2>
            <p className="mt-4 text-lg text-brand-text">Please let us know if you can make it by August 20th, 2025.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-12 space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-text">Full Name(s)</label>
                <input type="text" id="name" value={guestName} onChange={e => setGuestName(e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary p-3"/>
            </div>
            <div>
                <fieldset>
                    <legend className="text-sm font-medium text-brand-text">Will you be attending?</legend>
                    <div className="mt-2 space-y-2 md:space-y-0 md:flex md:gap-8">
                        <div className="flex items-center"><input type="radio" id="attending" name="attendance" value="attending" onChange={e => setAttendance(e.target.value)} required className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300"/><label htmlFor="attending" className="ml-3 block text-sm text-brand-text">Joyfully Accepts</label></div>
                        <div className="flex items-center"><input type="radio" id="not-attending" name="attendance" value="not-attending" onChange={e => setAttendance(e.target.value)} className="h-4 w-4 text-brand-primary focus:ring-brand-primary border-gray-300"/><label htmlFor="not-attending" className="ml-3 block text-sm text-brand-text">Regretfully Declines</label></div>
                    </div>
                </fieldset>
            </div>
             <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-text">Leave a message for the couple (optional)</label>
                <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary p-3"></textarea>
            </div>
            <div className="text-center">
                <button type="submit" className="px-10 py-3 bg-brand-primary text-brand-light font-semibold rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300">Submit RSVP</button>
            </div>
        </form>

        <div className="max-w-2xl mx-auto mt-20 p-6 bg-brand-accent/30 rounded-lg text-center">
            <h3 className="text-lg font-semibold text-brand-primary">For the Couple: Create a Shareable Link</h3>
            <p className="text-sm text-brand-text mt-1">Enter a guest's name to create a personalized RSVP link for them.</p>
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <input type="text" placeholder="Guest's Name" value={linkGuestName} onChange={e => setLinkGuestName(e.target.value)} className="flex-grow border-gray-300 rounded-md shadow-sm focus:ring-brand-primary focus:border-brand-primary p-2"/>
                <button onClick={generateLink} className="px-4 py-2 bg-brand-secondary text-brand-primary font-semibold rounded-md hover:bg-opacity-90">Generate</button>
            </div>
            {shareableLink && <input type="text" readOnly value={shareableLink} className="mt-4 w-full bg-brand-light p-2 rounded-md text-sm text-center" onClick={(e) => (e.target as HTMLInputElement).select()} />}
        </div>
      </div>
    </section>
  );
};

export default RSVP;
