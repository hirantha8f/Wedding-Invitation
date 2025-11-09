import { Category, Vendor } from '../types';

const categories: Category[] = [
  { id: '1', name: 'Photographers', slug: 'photographers', imageUrl: 'https://picsum.photos/400/300?image=1084', vendorCount: 4 },
  { id: '2', name: 'Venues', slug: 'venues', imageUrl: 'https://picsum.photos/400/300?image=1075', vendorCount: 3 },
  { id: '3', name: 'Florists & Decor', slug: 'florists-decor', imageUrl: 'https://picsum.photos/400/300?image=1025', vendorCount: 3 },
  { id: '4', name: 'Catering', slug: 'catering', imageUrl: 'https://picsum.photos/400/300?image=30', vendorCount: 2 },
  { id: '5', name: 'Bridal Wear', slug: 'bridal-wear', imageUrl: 'https://picsum.photos/400/300?image=1027', vendorCount: 2 },
  { id: '6', name: 'Music & Bands', slug: 'music-bands', imageUrl: 'https://picsum.photos/400/300?image=1069', vendorCount: 2 },
  { id: '7', name: 'Makeup Artists', slug: 'makeup-artists', imageUrl: 'https://picsum.photos/400/300?image=646', vendorCount: 2 },
  { id: '8', name: 'Invitations', slug: 'invitations', imageUrl: 'https://picsum.photos/400/300?image=431', vendorCount: 1 },
];

const vendors: Vendor[] = [
  // Photographers
  {
    id: 'p1', name: 'Eternal Moments', categorySlug: 'photographers', location: 'Colombo',
    description: 'Capturing timeless memories with a blend of classic and photojournalistic styles. We believe every picture tells a story.',
    coverImageUrl: 'https://picsum.photos/800/600?image=219',
    galleryImages: ['https://picsum.photos/600/400?image=103', 'https://picsum.photos/600/400?image=111', 'https://picsum.photos/600/400?image=124', 'https://picsum.photos/600/400?image=201', 'https://picsum.photos/600/400?image=219'],
    services: ['Full-Day Wedding Coverage', 'Engagement Shoots', 'Drone Photography', 'Fine Art Albums'],
    contact: { email: 'contact@eternalmoments.lk', website: 'https://eternalmoments.lk' }
  },
  {
    id: 'p2', name: 'Pixel Perfect', categorySlug: 'photographers', location: 'Kandy',
    description: 'Modern, vibrant photography for the contemporary couple. We focus on authentic emotions and stunning visuals.',
    coverImageUrl: 'https://picsum.photos/800/600?image=1043',
    galleryImages: ['https://picsum.photos/600/400?image=1043', 'https://picsum.photos/600/400?image=1045', 'https://picsum.photos/600/400?image=1053'],
    services: ['Candid Photography', 'Pre-Wedding Shoots', 'Cinematic Videography'],
    contact: { phone: '+94 77 123 4567' }
  },
  // ... (adding more photographers)
  {
    id: 'p3', name: 'Shutter Dream', categorySlug: 'photographers', location: 'Galle',
    description: 'Dreamy and romantic photography with a focus on natural light and beautiful landscapes. Specializing in destination weddings.',
    coverImageUrl: 'https://picsum.photos/800/600?image=399',
    galleryImages: ['https://picsum.photos/600/400?image=399', 'https://picsum.photos/600/400?image=401', 'https://picsum.photos/600/400?image=403'],
    services: ['Destination Wedding Packages', 'Elopement Photography', 'Couple Portraits'],
    contact: { email: 'info@shutterdream.com', website: 'https://shutterdream.com' }
  },
  {
    id: 'p4', name: 'Creative Clicks', categorySlug: 'photographers', location: 'Colombo',
    description: 'Unique and artistic wedding photography for couples who dare to be different. We push creative boundaries.',
    coverImageUrl: 'https://picsum.photos/800/600?image=577',
    galleryImages: ['https://picsum.photos/600/400?image=577', 'https://picsum.photos/600/400?image=582', 'https://picsum.photos/600/400?image=593'],
    services: ['Artistic Wedding Photography', 'Themed Shoots', 'Event Videography'],
    contact: { phone: '+94 71 987 6543' }
  },
  // Venues
  {
    id: 'v1', name: 'The Grand Ballroom', categorySlug: 'venues', location: 'Colombo',
    description: 'An elegant and spacious ballroom perfect for lavish celebrations. State-of-the-art facilities and impeccable service.',
    coverImageUrl: 'https://picsum.photos/800/600?image=1018',
    galleryImages: ['https://picsum.photos/600/400?image=1018', 'https://picsum.photos/600/400?image=1028', 'https://picsum.photos/600/400?image=1040'],
    services: ['Seating for 500 guests', 'In-house Catering', 'Valet Parking', 'Bridal Suite'],
    contact: { email: 'events@grandballroom.lk' }
  },
  {
    id: 'v2', name: 'Lakeside Gardens', categorySlug: 'venues', location: 'Kandy',
    description: 'A breathtaking outdoor venue with stunning lake views. Ideal for romantic, nature-inspired weddings.',
    coverImageUrl: 'https://picsum.photos/800/600?image=1048',
    galleryImages: ['https://picsum.photos/600/400?image=1048', 'https://picsum.photos/600/400?image=1049', 'https://picsum.photos/600/400?image=1050'],
    services: ['Outdoor Ceremony Space', 'Marquee Hire', 'Landscaped Gardens'],
    contact: { phone: '+94 81 222 3333' }
  },
  {
    id: 'v3', name: 'Coastal Charm Villa', categorySlug: 'venues', location: 'Galle',
    description: 'A beautiful beachfront villa offering an intimate and exclusive setting for your special day.',
    coverImageUrl: 'https://picsum.photos/800/600?image=835',
    galleryImages: ['https://picsum.photos/600/400?image=835', 'https://picsum.photos/600/400?image=838', 'https://picsum.photos/600/400?image=866'],
    services: ['Private Beach Access', 'Boutique Accommodation', 'Poolside Reception Area'],
    contact: { website: 'https://coastalcharm.lk' }
  },
   // Florists & Decor
  {
    id: 'f1', name: 'Bloom & Petal', categorySlug: 'florists-decor', location: 'Colombo',
    description: 'Creating exquisite floral arrangements and bespoke decor to transform your venue.',
    coverImageUrl: 'https://picsum.photos/800/600?image=788',
    galleryImages: ['https://picsum.photos/600/400?image=788', 'https://picsum.photos/600/400?image=790', 'https://picsum.photos/600/400?image=823'],
    services: ['Bridal Bouquets', 'Ceremony Arch Decor', 'Table Centerpieces'],
    contact: { email: 'hello@bloomandpetal.com' }
  },
  {
    id: 'f2', name: 'The Decor Story', categorySlug: 'florists-decor', location: 'Kandy',
    description: 'We craft personalized wedding themes, from rustic charm to modern elegance.',
    coverImageUrl: 'https://picsum.photos/800/600?image=659',
    galleryImages: ['https://picsum.photos/600/400?image=659', 'https://picsum.photos/600/400?image=669', 'https://picsum.photos/600/400?image=685'],
    services: ['Theme Conceptualization', 'Lighting & Drapery', 'Custom Backdrops'],
    contact: { phone: '+94 77 555 8888' }
  },
   {
    id: 'f3', name: 'Enchanted Designs', categorySlug: 'florists-decor', location: 'Colombo',
    description: 'Bringing fairytale weddings to life with magical decor and breathtaking floral designs.',
    coverImageUrl: 'https://picsum.photos/800/600?image=993',
    galleryImages: ['https://picsum.photos/600/400?image=993', 'https://picsum.photos/600/400?image=1011', 'https://picsum.photos/600/400?image=1039'],
    services: ['Luxury Floral Installations', 'Event Styling', 'Bespoke Stationery'],
    contact: { website: 'https://enchanteddesigns.lk' }
  },
  // Catering
  {
    id: 'c1', name: 'Gourmet Gatherings', categorySlug: 'catering', location: 'Colombo',
    description: 'Exceptional culinary experiences with customized menus to suit your taste and style.',
    coverImageUrl: 'https://picsum.photos/800/600?image=225',
    galleryImages: ['https://picsum.photos/600/400?image=225', 'https://picsum.photos/600/400?image=312', 'https://picsum.photos/600/400?image=355'],
    services: ['Buffet & Plated Dinners', 'Live Action Stations', 'Cocktail & Canapés'],
    contact: { email: 'catering@gourmet.lk' }
  },
  {
    id: 'c2', name: 'Spice Route Cuisine', categorySlug: 'catering', location: 'Kandy',
    description: 'Authentic Sri Lankan and international cuisine, prepared with the freshest local ingredients.',
    coverImageUrl: 'https://picsum.photos/800/600?image=433',
    galleryImages: ['https://picsum.photos/600/400?image=433', 'https://picsum.photos/600/400?image=435', 'https://picsum.photos/600/400?image=440'],
    services: ['Traditional Rice & Curry', 'Fusion Menus', 'Dessert Bars'],
    contact: { phone: '+94 76 111 2222' }
  },
  // Others
  { id: 'bw1', name: 'Ivory & Lace Bridal', categorySlug: 'bridal-wear', location: 'Colombo', description: 'Exquisite collection of designer wedding gowns and accessories.', coverImageUrl: 'https://picsum.photos/800/600?image=1074', galleryImages: [], services: [], contact: {} },
  { id: 'bw2', name: 'The Groom\'s Room', categorySlug: 'bridal-wear', location: 'Colombo', description: 'Bespoke suits and formal wear for the modern groom.', coverImageUrl: 'https://picsum.photos/800/600?image=836', galleryImages: [], services: [], contact: {} },
  { id: 'm1', name: 'The Groove Merchants', categorySlug: 'music-bands', location: 'Colombo', description: 'A high-energy live band to keep your guests dancing all night.', coverImageUrl: 'https://picsum.photos/800/600?image=177', galleryImages: [], services: [], contact: {} },
  { id: 'm2', name: 'Serenade Strings', categorySlug: 'music-bands', location: 'Kandy', description: 'Elegant string quartet for ceremonies and cocktail hours.', coverImageUrl: 'https://picsum.photos/800/600?image=465', galleryImages: [], services: [], contact: {} },
  { id: 'mua1', name: 'Glam by Nishi', categorySlug: 'makeup-artists', location: 'Colombo', description: 'Professional bridal makeup artist specializing in natural and radiant looks.', coverImageUrl: 'https://picsum.photos/800/600?image=822', galleryImages: [], services: [], contact: {} },
  { id: 'mua2', name: 'Beauty Strokes', categorySlug: 'makeup-artists', location: 'Galle', description: 'Airbrush makeup and hairstyling for a flawless finish.', coverImageUrl: 'https://picsum.photos/800/600?image=550', galleryImages: [], services: [], contact: {} },
  { id: 'inv1', name: 'Paper & Gold Co.', categorySlug: 'invitations', location: 'Colombo', description: 'Luxury wedding invitations and stationery with custom designs.', coverImageUrl: 'https://picsum.photos/800/600?image=175', galleryImages: [], services: [], contact: {} },
];

const simulateDelay = <T,>(data: T): Promise<T> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, 500); // 500ms delay
    });
};

export const getCategories = (): Promise<Category[]> => {
    return simulateDelay(categories);
};

export const getVendors = (): Promise<Vendor[]> => {
    return simulateDelay(vendors);
};

export const getVendorById = (id: string): Promise<Vendor | undefined> => {
    return simulateDelay(vendors.find(v => v.id === id));
};
