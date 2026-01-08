import React from 'react';

// Subtle, reusable skeleton components for loading states
// - SkeletonAvatar: circular avatar placeholder
// - SkeletonTextLines: one or more text-line placeholders with variable widths
// - SkeletonCard: simple card skeleton composed of avatar + text lines

export const SkeletonAvatar = ({ size = 12, className = '' }) => {
  const px = `w-${size}`; // tailwind width helper not dynamic at runtime; keep default classes below
  return (
    <div
      className={`rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse flex-shrink-0 ${className}`}
      style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
      aria-hidden
    />
  );
};

export const SkeletonTextLines = ({ lines = 3, className = '' }) => {
  const widths = ['w-11/12', 'w-9/12', 'w-7/12'];
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`h-3 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse ${widths[i % widths.length]}`}
          aria-hidden
        />
      ))}
    </div>
  );
};

export const SkeletonCard = ({ withAvatar = true, lines = 3, className = '' }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4 shadow-sm ${className}`}
      aria-hidden
    >
      <div className="flex items-start gap-4">
        {withAvatar && <SkeletonAvatar size={10} />}

        <div className="flex-1 w-full">
          <div className="mb-3">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-3/5 animate-pulse mb-2" />
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-md w-2/5 animate-pulse" />
          </div>

          <SkeletonTextLines lines={lines} />

          <div className="mt-4 flex items-center gap-3">
            <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
            <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
