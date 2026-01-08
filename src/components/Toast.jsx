import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X, Info, AlertTriangle } from 'lucide-react';

/**
 * Individual Toast Component
 */
export const Toast = ({ id, variant = 'success', title, message, onDismiss, duration = 5000 }) => {
  useEffect(() => {
    if (duration && duration > 0) {
      const timer = setTimeout(() => {
        onDismiss(id);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [id, duration, onDismiss]);

  const variants = {
    success: {
      icon: CheckCircle,
      iconColor: 'text-green-500',
      bgColor: 'bg-white',
      borderColor: 'border-green-200',
      progressColor: 'bg-green-500'
    },
    error: {
      icon: XCircle,
      iconColor: 'text-red-500',
      bgColor: 'bg-white',
      borderColor: 'border-red-200',
      progressColor: 'bg-red-500'
    },
    warning: {
      icon: AlertTriangle,
      iconColor: 'text-orange-500',
      bgColor: 'bg-white',
      borderColor: 'border-orange-200',
      progressColor: 'bg-orange-500'
    },
    info: {
      icon: Info,
      iconColor: 'text-blue-500',
      bgColor: 'bg-white',
      borderColor: 'border-blue-200',
      progressColor: 'bg-blue-500'
    }
  };

  const config = variants[variant] || variants.success;
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.95 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`${config.bgColor} ${config.borderColor} border-l-4 rounded-lg shadow-lg p-4 mb-3 min-w-[320px] max-w-md`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="flex-shrink-0 pt-0.5">
          <Icon className={`w-5 h-5 ${config.iconColor}`} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className="text-sm font-semibold text-gray-900 mb-1">
              {title}
            </h4>
          )}
          {message && (
            <p className="text-sm text-gray-600">
              {message}
            </p>
          )}
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => onDismiss(id)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              onDismiss(id);
            }
          }}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Progress Bar (optional) */}
      {duration && duration > 0 && (
        <motion.div
          className={`h-1 ${config.progressColor} mt-3 rounded-full`}
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: duration / 1000, ease: 'linear' }}
        />
      )}
    </motion.div>
  );
};

/**
 * Toast Container Component
 */
export const ToastContainer = ({ toasts, onDismiss, position = 'top-right' }) => {
  const positions = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2'
  };

  return (
    <div
      className={`fixed ${positions[position]} z-[9999] pointer-events-none`}
      aria-label="Notifications"
      role="region"
    >
      <div className="pointer-events-auto">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              {...toast}
              onDismiss={onDismiss}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Toast;
