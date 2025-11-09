import React, { useState, useMemo } from 'react';
import { Vendor, Category } from '../types';
import VendorCard from './VendorCard';
import Breadcrumb from './Breadcrumb';

interface VendorListProps {
  vendors: Vendor[];
  categories: Category[];
  selectedCategory: Category | null;
  onSelectVendor: (vendorId: string) => void;
  onSelectCategory: (category: Category) => void;
  onClearCategory: () => void;
}

const VendorList: React.FC<VendorListProps> = ({ vendors, categories, selectedCategory, onSelectVendor, onSelectCategory, onClearCategory }) => {
  const [locationFilter, setLocationFilter] = useState('');

  const locations = useMemo(() => {
    return [...new Set(vendors.map(v => v.location))].sort();
  }, [vendors]);

  const filteredVendors = useMemo(() => {
    return vendors.filter(vendor => {
      const categoryMatch = selectedCategory ? vendor.categorySlug === selectedCategory.slug : true;
      const locationMatch = locationFilter ? vendor.location === locationFilter : true;
      return categoryMatch && locationMatch;
    });
  }, [vendors, selectedCategory, locationFilter]);
  
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = categories.find(c => c.slug === e.target.value);
    if(category) {
        onSelectCategory(category);
    } else {
        onClearCategory();
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
       <Breadcrumb items={[{ label: 'Home', isCurrent: !selectedCategory }, ...(selectedCategory ? [{ label: selectedCategory.name, isCurrent: true }] : [])]} />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-brand-primary">
          {selectedCategory ? selectedCategory.name : 'All Vendors'}
        </h1>
        <p className="mt-2 text-lg text-brand-muted">
          Browse our curated list of professional wedding vendors.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="md:w-1/4 lg:w-1/5">
          <div className="bg-brand-light p-6 rounded-lg shadow-md sticky top-24">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Filters</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select 
                  id="category"
                  value={selectedCategory?.slug || ''}
                  onChange={handleCategoryChange}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-secondary focus:border-brand-secondary"
                >
                  <option value="">All Categories</option>
                  {categories.map(cat => <option key={cat.id} value={cat.slug}>{cat.name}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <select 
                  id="location"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-secondary focus:border-brand-secondary"
                >
                  <option value="">All Locations</option>
                  {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                </select>
              </div>
            </div>
          </div>
        </aside>

        {/* Vendor Grid */}
        <main className="md:w-3/4 lg:w-4/5">
          {filteredVendors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredVendors.map(vendor => (
                <VendorCard key={vendor.id} vendor={vendor} onSelect={() => onSelectVendor(vendor.id)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-primary">No Vendors Found</h3>
              <p className="text-brand-muted mt-2">Try adjusting your filters.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default VendorList;
