import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FolderOpen, 
  Search, 
  Inbox, 
  FileText, 
  Users, 
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

/**
 * EmptyState Component
 * Displays friendly empty state messages with optional CTAs
 * 
 * @param {string} variant - Predefined variant: 'no-results', 'no-data', 'getting-started', 'no-notifications', 'no-tasks', 'no-users'
 * @param {ReactNode} icon - Custom icon component (defaults based on variant)
 * @param {string} title - Main heading message
 * @param {string} description - Supporting text explanation
 * @param {string} buttonText - CTA button text
 * @param {string} buttonLink - CTA button link (internal route)
 * @param {function} onButtonClick - CTA button click handler (for non-link actions)
 * @param {ReactNode} children - Custom content to display instead of default button
 */
const EmptyState = ({
  variant = 'no-data',
  icon: CustomIcon,
  title,
  description,
  buttonText,
  buttonLink,
  onButtonClick,
  children,
  className = ''
}) => {
  // Predefined variants with defaults
  const variants = {
    'no-results': {
      icon: Search,
      title: title || 'No results found',
      description: description || 'We couldn\'t find anything matching your search. Try adjusting your filters or search terms.',
      iconColor: 'text-gray-400',
      bgColor: 'bg-gray-50'
    },
    'no-data': {
      icon: Inbox,
      title: title || 'Nothing here yet',
      description: description || 'Get started by creating your first item. It only takes a few seconds.',
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-50'
    },
    'getting-started': {
      icon: FolderOpen,
      title: title || 'Let\'s get you set up',
      description: description || 'You\'re all set! Create your first project to start organizing your work.',
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-50'
    },
    'no-notifications': {
      icon: CheckCircle,
      title: title || 'You\'re all caught up',
      description: description || 'No new notifications right now. We\'ll let you know when something needs your attention.',
      iconColor: 'text-green-400',
      bgColor: 'bg-green-50'
    },
    'no-tasks': {
      icon: Clock,
      title: title || 'No tasks assigned',
      description: description || 'Looks like you have nothing on your plate. Time to plan your next move!',
      iconColor: 'text-orange-400',
      bgColor: 'bg-orange-50'
    },
    'no-users': {
      icon: Users,
      title: title || 'No team members yet',
      description: description || 'Invite your teammates to start collaborating together.',
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-50'
    },
    'no-documents': {
      icon: FileText,
      title: title || 'No documents found',
      description: description || 'Upload or create your first document to get started.',
      iconColor: 'text-indigo-400',
      bgColor: 'bg-indigo-50'
    },
    'error': {
      icon: AlertCircle,
      title: title || 'Something went wrong',
      description: description || 'We couldn\'t load this content. Please try refreshing the page.',
      iconColor: 'text-red-400',
      bgColor: 'bg-red-50'
    }
  };

  const config = variants[variant] || variants['no-data'];
  const Icon = CustomIcon || config.icon;

  return (
    <div className={`flex items-center justify-center py-16 px-4 ${className}`}>
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${config.bgColor} mb-6`}>
          <Icon className={`w-10 h-10 ${config.iconColor}`} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {config.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {config.description}
        </p>

        {/* CTA or Custom Content */}
        {children ? (
          children
        ) : buttonText ? (
          buttonLink ? (
            <Link
              to={buttonLink}
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
            >
              {buttonText}
            </Link>
          ) : onButtonClick ? (
            <button
              onClick={onButtonClick}
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
            >
              {buttonText}
            </button>
          ) : null
        ) : null}
      </div>
    </div>
  );
};

// Convenience exports for common patterns
export const NoResultsEmptyState = (props) => (
  <EmptyState variant="no-results" {...props} />
);

export const NoDataEmptyState = (props) => (
  <EmptyState variant="no-data" {...props} />
);

export const GettingStartedEmptyState = (props) => (
  <EmptyState variant="getting-started" {...props} />
);

export const NoNotificationsEmptyState = (props) => (
  <EmptyState variant="no-notifications" {...props} />
);

export const NoTasksEmptyState = (props) => (
  <EmptyState variant="no-tasks" {...props} />
);

export const NoUsersEmptyState = (props) => (
  <EmptyState variant="no-users" {...props} />
);

export const NoDocumentsEmptyState = (props) => (
  <EmptyState variant="no-documents" {...props} />
);

export const ErrorEmptyState = (props) => (
  <EmptyState variant="error" {...props} />
);

export default EmptyState;
