import React, { useState } from 'react';

interface HeaderProps {
  onNavigateHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-light/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center cursor-pointer"
            onClick={onNavigateHome}
          >
            <svg className="w-8 h-8 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            <h1 className="ml-2 text-2xl font-serif font-bold text-brand-primary">
              Wedding Bliss
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a onClick={onNavigateHome} className="text-brand-primary hover:text-brand-secondary transition duration-300 cursor-pointer">Home</a>
            <a href="#categories" className="text-brand-primary hover:text-brand-secondary transition duration-300">Categories</a>
            <a href="#" className="text-brand-primary hover:text-brand-secondary transition duration-300">Real Weddings</a>
            <a href="#" className="text-brand-primary hover:text-brand-secondary transition duration-300">Blog</a>
          </nav>
           <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
           </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <a onClick={onNavigateHome} className="block py-2 text-center text-brand-primary hover:text-brand-secondary transition duration-300 cursor-pointer">Home</a>
            <a href="#categories" className="block py-2 text-center text-brand-primary hover:text-brand-secondary transition duration-300">Categories</a>
            <a href="#" className="block py-2 text-center text-brand-primary hover:text-brand-secondary transition duration-300">Real Weddings</a>
            <a href="#" className="block py-2 text-center text-brand-primary hover:text-brand-secondary transition duration-300">Blog</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
