export interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  vendorCount: number;
}

export interface Vendor {
  id: string;
  name: string;
  categorySlug: string;
  location: string;
  description: string;
  coverImageUrl: string;
  galleryImages: string[];
  services: string[];
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
}

export type View = 'home' | 'vendorList' | 'vendorDetail';
