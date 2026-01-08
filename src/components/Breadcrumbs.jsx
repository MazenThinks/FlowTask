import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const formatSegment = (segment) => {
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  // Hide breadcrumbs on home
  if (!pathname || pathname === '/') return null;

  // Only show breadcrumbs for known top-level routes — hide on unknown paths (404)
  const allowedBases = ['/get-started', '/support', '/help-center', '/documentation', '/contact', '/status', '/developer'];
  const isAllowed = allowedBases.some((base) => pathname === base || pathname.startsWith(base + '/'));
  if (!isAllowed) return null;

  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((seg, idx) => ({
    name: formatSegment(seg),
    path: '/' + segments.slice(0, idx + 1).join('/'),
    isLast: idx === segments.length - 1,
  }));

  return (
    <nav aria-label="Breadcrumb" className="bg-transparent">
      <ol className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 mt-20 sm:mt-24 flex items-center gap-3 text-sm text-gray-500">
        <li>
          <Link to="/" className="hover:text-gray-700 text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1">
            Home
          </Link>
        </li>

        {crumbs.map((crumb) => (
          <li key={crumb.path} className="flex items-center gap-3">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {crumb.isLast ? (
              <span className="text-gray-700 font-medium">{crumb.name}</span>
            ) : (
              <Link to={crumb.path} className="hover:text-gray-700 text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1">
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
