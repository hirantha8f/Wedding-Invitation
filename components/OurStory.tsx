
import React from 'react';

interface OurStoryProps {
  couple: { her: string; him: string };
  story: string;
}

const OurStory: React.FC<OurStoryProps> = ({ couple, story }) => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/800/1000?image=1062" 
              alt={`${couple.her} and ${couple.him}`}
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-primary">Our Story</h2>
            <div className="w-24 h-px bg-brand-secondary my-6 mx-auto md:mx-0"></div>
            <p className="text-lg leading-relaxed text-brand-text">
              {story}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
