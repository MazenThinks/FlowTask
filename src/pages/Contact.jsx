import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../contexts/ToastContext';

const Contact = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid
      setIsSubmitting(true);

      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('Form submitted:', formData);

        // Show success toast
        toast.success(
          'Message sent successfully!',
          `Thanks ${formData.name}, we'll get back to you within 2 hours.`
        );

        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        // Show error toast
        toast.error(
          'Failed to send message',
          'Something went wrong. Please try again or contact us directly.'
        );
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
      toast.error('Form validation failed', 'Please check the form and try again.');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'support@flowtask.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: '< 2 hours',
      description: 'Average response time'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '1-800-FLOWTASK',
      description: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Office',
      content: 'San Francisco, CA',
      description: 'Visit our headquarters'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-24 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300" style={{ letterSpacing: '-0.02em', lineHeight: '1.1' }}>
            Contact <span className="font-accent text-blue-600 dark:text-blue-400">Support</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300" style={{ lineHeight: '1.6' }}>
            Have a question or need help? Our support team is here for you. Fill out the form below and we'll get back to you soon.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/50 p-6 sm:p-8 md:p-12 transition-colors duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 transition-colors duration-300">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-lg border-2 transition-colors text-base ${errors.name
                      ? 'border-red-500 focus:border-red-500 dark:border-red-400 dark:focus:border-red-400'
                      : 'border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400'
                      } focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 touch-manipulation`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-lg border-2 transition-colors text-base ${errors.email
                      ? 'border-red-500 focus:border-red-500 dark:border-red-400 dark:focus:border-red-400'
                      : 'border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400'
                      } focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 touch-manipulation`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-300">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3.5 rounded-lg border-2 transition-colors resize-none text-base ${errors.message
                      ? 'border-red-500 focus:border-red-500 dark:border-red-400 dark:focus:border-red-400'
                      : 'border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400'
                      } focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 touch-manipulation`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg font-semibold text-base sm:text-lg tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl md:transform md:hover:-translate-y-1 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 touch-manipulation"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 p-6 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">{info.title}</h3>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1 transition-colors duration-300">{info.content}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Additional Help */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white"
            >
              <h3 className="font-bold text-lg mb-2">Need Immediate Help?</h3>
              <p className="text-white/90 text-sm mb-4">
                Check out our Help Center for instant answers to common questions.
              </p>
              <a
                href="#"
                className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold text-sm transition-colors"
              >
                Visit Help Center
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
