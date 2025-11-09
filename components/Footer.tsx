
import React from 'react';

interface FooterProps {
  couple: { her: string; him: string };
}

const Footer: React.FC<FooterProps> = ({ couple }) => {
  return (
    <footer className="bg-brand-bg py-8">
      <div className="container mx-auto px-6 lg:px-8 text-center text-brand-text">
        <h3 className="text-2xl font-serif text-brand-primary">{couple.her} & {couple.him}</h3>
        <p className="mt-2 text-sm">&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
