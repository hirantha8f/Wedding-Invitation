import React from 'react';
import { Category } from '../types';

interface CategoryGridProps {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
}

const CategoryCard: React.FC<{ category: Category; onSelect: () => void }> = ({ category, onSelect }) => (
  <div 
    className="relative rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
    onClick={onSelect}
  >
    <img src={category.imageUrl} alt={category.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
      <h3 className="text-2xl font-serif font-bold">{category.name}</h3>
      <p className="mt-1 text-sm">{category.vendorCount} Vendors</p>
    </div>
  </div>
);

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories, onSelectCategory }) => {
  return (
    <section id="categories" className="py-16 md:py-24 bg-brand-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary">Explore by Category</h2>
          <p className="mt-2 text-lg text-brand-muted">Find exactly what you're looking for.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} onSelect={() => onSelectCategory(category)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
