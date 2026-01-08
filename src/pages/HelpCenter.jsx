import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, BookOpen, CreditCard, FolderKanban, AlertCircle, ChevronRight } from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Learn the basics and set up your account',
      color: 'blue',
      articles: [
        {
          title: 'How to create your first project',
          description: 'Step-by-step guide to setting up your first project in FlowTask',
          readTime: '5 min read'
        },
        {
          title: 'Understanding the dashboard',
          description: 'Navigate through the main dashboard and key features',
          readTime: '3 min read'
        },
        {
          title: 'Inviting team members',
          description: 'Add collaborators and manage team permissions',
          readTime: '4 min read'
        },
        {
          title: 'Keyboard shortcuts guide',
          description: 'Speed up your workflow with helpful keyboard shortcuts',
          readTime: '6 min read'
        }
      ]
    },
    {
      icon: CreditCard,
      title: 'Account & Billing',
      description: 'Manage your subscription and payment settings',
      color: 'purple',
      articles: [
        {
          title: 'How to upgrade your plan',
          description: 'Learn about different plans and how to upgrade',
          readTime: '4 min read'
        },
        {
          title: 'Managing payment methods',
          description: 'Add, update, or remove payment information',
          readTime: '3 min read'
        },
        {
          title: 'Understanding billing cycles',
          description: 'Learn how billing works and when charges occur',
          readTime: '5 min read'
        },
        {
          title: 'Canceling your subscription',
          description: 'Steps to cancel or pause your subscription',
          readTime: '2 min read'
        }
      ]
    },
    {
      icon: FolderKanban,
      title: 'Projects & Tasks',
      description: 'Organize and manage your work efficiently',
      color: 'green',
      articles: [
        {
          title: 'Creating and organizing tasks',
          description: 'Best practices for task creation and organization',
          readTime: '7 min read'
        },
        {
          title: 'Using labels and tags',
          description: 'Categorize tasks with labels for better organization',
          readTime: '4 min read'
        },
        {
          title: 'Setting up automated workflows',
          description: 'Automate repetitive tasks and save time',
          readTime: '8 min read'
        },
        {
          title: 'Project templates',
          description: 'Use and create templates for common project types',
          readTime: '5 min read'
        }
      ]
    },
    {
      icon: AlertCircle,
      title: 'Troubleshooting',
      description: 'Find solutions to common issues',
      color: 'orange',
      articles: [
        {
          title: 'Login and authentication issues',
          description: 'Resolve common login problems and reset your password',
          readTime: '3 min read'
        },
        {
          title: 'Notifications not working',
          description: 'Fix notification settings and delivery issues',
          readTime: '4 min read'
        },
        {
          title: 'Data sync problems',
          description: 'Troubleshoot synchronization issues across devices',
          readTime: '5 min read'
        },
        {
          title: 'Browser compatibility',
          description: 'Ensure optimal performance across different browsers',
          readTime: '3 min read'
        }
      ]
    }
  ];

  const colorClasses = {
    blue: {
      gradient: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200'
    },
    purple: {
      gradient: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-200'
    },
    green: {
      gradient: 'from-green-500 to-green-600',
      bg: 'bg-green-50',
      text: 'text-green-600',
      border: 'border-green-200'
    },
    orange: {
      gradient: 'from-orange-500 to-orange-600',
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      border: 'border-orange-200'
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
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300" style={{ letterSpacing: '-0.02em', lineHeight: '1.1' }}>
            <span className="font-logo text-blue-600 dark:text-blue-400">FlowTask</span> Help Center
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 transition-colors duration-300" style={{ lineHeight: '1.6' }}>
            Find answers, learn best practices, and get the most out of FlowTask. Search below or browse by category.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for articles, guides, or topics..."
                className="w-full pl-14 pr-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none text-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm transition-colors duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/50 transition-colors duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses[category.color].gradient} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                      {category.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {category.articles.map((article, articleIndex) => (
                    <a
                      key={articleIndex}
                      href="#"
                      className={`group p-6 rounded-xl border-2 ${colorClasses[category.color].border} hover:border-transparent hover:shadow-lg transition-all duration-200 ${colorClasses[category.color].bg} dark:bg-opacity-20 hover:bg-white dark:hover:bg-gray-700`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed transition-colors duration-300">
                            {article.description}
                          </p>
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 transition-colors duration-300">
                            {article.readTime}
                          </span>
                        </div>
                        <ChevronRight className={`w-5 h-5 ${colorClasses[category.color].text} flex-shrink-0 group-hover:translate-x-1 transition-transform`} />
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg dark:shadow-gray-900/50 transition-colors duration-300"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-300">
            Our support team is here to help. Get in touch and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
            >
              Contact Support
            </a>
            <a
              href="#"
              className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-semibold text-lg tracking-wide transition-all duration-200 inline-block"
            >
              View All Articles
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HelpCenter;
