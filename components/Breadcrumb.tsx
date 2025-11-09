import React from 'react';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  isCurrent?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.label}>
            <div className="flex items-center">
              {index > 0 && (
                <svg className="flex-shrink-0 h-5 w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              )}
              <div
                onClick={item.onClick}
                className={`ml-2 text-sm font-medium ${
                  item.isCurrent ? 'text-brand-muted cursor-default' : 'text-brand-primary hover:text-brand-secondary cursor-pointer'
                }`}
                aria-current={item.isCurrent ? 'page' : undefined}
              >
                {item.label}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
