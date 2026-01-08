import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, FileText, MessageCircle, Activity, Search, Mail, Phone, Clock, ArrowRight } from 'lucide-react';
import { useToast } from '../contexts/ToastContext';

const Support = () => {
  const toast = useToast();
  const supportCards = [
    {
      icon: BookOpen,
      title: 'Help Center',
      subtitle: 'Self-service support for common questions',
      description: 'Browse articles, guides, and tutorials to get the most out of FlowTask.',
      link: '/help-center',
      color: 'blue',
      features: ['Getting Started', 'Best Practices', 'Video Tutorials', 'FAQs']
    },
    {
      icon: FileText,
      title: 'Documentation',
      subtitle: 'Technical guides for developers',
      description: 'Comprehensive technical documentation, API references, and integration guides.',
      link: '/documentation',
      color: 'purple',
      features: ['API Reference', 'SDK Guides', 'Webhooks', 'Integrations']
    },
    {
      icon: MessageCircle,
      title: 'Contact Support',
      subtitle: 'Direct help from our team',
      description: 'Get personalized help from our support team via email, chat, or phone.',
      link: '/contact',
      color: 'green',
      features: ['Live Chat', 'Email Support', 'Priority Support', '24/7 Available']
    },
    {
      icon: Activity,
      title: 'System Status',
      subtitle: 'Real-time service monitoring',
      description: 'Check real-time status of all FlowTask services and subscribe to updates.',
      link: '/status',
      color: 'orange',
      features: ['Uptime Monitor', 'Incident History', 'Status Updates', 'Performance Metrics']
    }
  ];

  const colorClasses = {
    blue: {
      gradient: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      hover: 'hover:bg-blue-100'
    },
    purple: {
      gradient: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      hover: 'hover:bg-purple-100'
    },
    green: {
      gradient: 'from-green-500 to-green-600',
      bg: 'bg-green-50',
      text: 'text-green-600',
      hover: 'hover:bg-green-100'
    },
    orange: {
      gradient: 'from-orange-500 to-orange-600',
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      hover: 'hover:bg-orange-100'
    }
  };

  const quickLinks = [
    { icon: Search, text: 'Search Knowledge Base', link: '#search' },
    { icon: Mail, text: 'Submit a Ticket', link: '#ticket' },
    { icon: Phone, text: 'Schedule a Call', link: '#call' },
    { icon: Clock, text: 'View Support Hours', link: '#hours' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-24 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300" style={{ letterSpacing: '-0.02em', lineHeight: '1.1' }}>
            How Can We <span className="font-accent text-blue-600 dark:text-blue-400">Help?</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 transition-colors duration-300" style={{ lineHeight: '1.6' }}>
            Find answers, explore resources, and get support from our team. We're here to help you succeed.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or documentation..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.target.value.trim()) {
                    toast.info('Search submitted', `Searching for "${e.target.value}"`);
                  }
                }}
                className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Main Support Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {supportCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Link
                  to={card.link}
                  className="group block bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md dark:shadow-gray-900/50 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colorClasses[card.color].gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title, Subtitle, and Description */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 transition-colors duration-300">
                      {card.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      {card.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {card.features.map((feature, i) => (
                      <div key={i} className={`${colorClasses[card.color].bg} dark:bg-opacity-20 ${colorClasses[card.color].text} dark:text-opacity-90 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group-hover:shadow-sm`}>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Arrow indicator */}
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md dark:shadow-gray-900/50 mb-16 transition-colors duration-300"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center transition-colors duration-300">
            Quick Actions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8 transition-colors duration-300">
            Common tasks to get you started
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <button
                  key={index}
                  onClick={() => toast.success('Action completed!', link.text)}
                  className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white text-sm transition-colors duration-300">{link.text}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 md:p-12 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Still Need Help?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our support team is ready to assist you with any questions or issues you may have. We're here to ensure your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              Contact Support Team
            </Link>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg tracking-wide transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white/30">
              View Support Hours
            </button>
          </div>

          {/* Support Info */}
          <div className="mt-10 pt-8 border-t border-white/20 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>support@flowtask.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>1-800-FLOWTASK</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>24/7 Support Available</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Support;
