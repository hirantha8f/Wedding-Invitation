import React from 'react';
import { Vendor } from '../types';

interface VendorCardProps {
  vendor: Vendor;
  onSelect: () => void;
}

const VendorCard: React.FC<VendorCardProps> = ({ vendor, onSelect }) => {
  return (
    <div 
      className="bg-brand-light rounded-lg shadow-md overflow-hidden group cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
      onClick={onSelect}
    >
      <div className="relative h-48 overflow-hidden">
        <img src={vendor.coverImageUrl} alt={vendor.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold font-serif text-brand-primary group-hover:text-brand-secondary transition-colors">{vendor.name}</h3>
        <p className="text-sm text-brand-muted mt-1 flex items-center">
            <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
            {vendor.location}
        </p>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{vendor.description}</p>
      </div>
    </div>
  );
};

export default VendorCard;
