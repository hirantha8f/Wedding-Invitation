import React, { useState } from 'react';
import { Vendor, Category } from '../types';
import Breadcrumb from './Breadcrumb';

interface VendorDetailProps {
  vendor: Vendor;
  category: Category;
  onBack: () => void;
}

const VendorDetail: React.FC<VendorDetailProps> = ({ vendor, category, onBack }) => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
       <Breadcrumb items={[
         { label: 'Home' },
         { label: 'Vendors', onClick: onBack },
         { label: vendor.name, isCurrent: true }
       ]} />

      {/* Header */}
      <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
        <img src={vendor.coverImageUrl} alt={vendor.name} className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <span className="bg-brand-secondary text-brand-primary px-3 py-1 text-sm font-semibold rounded-full">{category.name}</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2">{vendor.name}</h1>
          <p className="text-lg flex items-center mt-1">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
            {vendor.location}
          </p>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="w-full lg:w-2/3">
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button onClick={() => setActiveTab('about')} className={`${activeTab === 'about' ? 'border-brand-secondary text-brand-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>About</button>
              <button onClick={() => setActiveTab('gallery')} className={`${activeTab === 'gallery' ? 'border-brand-secondary text-brand-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>Gallery</button>
            </nav>
          </div>

          {activeTab === 'about' && (
             <div className="prose max-w-none">
                <p className="text-lg leading-relaxed">{vendor.description}</p>
             </div>
          )}

          {activeTab === 'gallery' && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {vendor.galleryImages.map((img, index) => (
                <div key={index} className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                   <img src={img} alt={`${vendor.name} gallery image ${index + 1}`} className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3">
           <div className="bg-brand-light p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">Services Offered</h3>
              <ul className="list-disc list-inside space-y-2 text-brand-muted">
                 {vendor.services.map((service, i) => <li key={i}>{service}</li>)}
              </ul>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 border-b pb-2">Contact Info</h3>
              <div className="space-y-3 text-brand-muted">
                 {vendor.contact.phone && <p><strong>Phone:</strong> {vendor.contact.phone}</p>}
                 {vendor.contact.email && <p><strong>Email:</strong> <a href={`mailto:${vendor.contact.email}`} className="text-brand-secondary hover:underline">{vendor.contact.email}</a></p>}
                 {vendor.contact.website && <p><strong>Website:</strong> <a href={vendor.contact.website} target="_blank" rel="noopener noreferrer" className="text-brand-secondary hover:underline">Visit Website</a></p>}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDetail;
