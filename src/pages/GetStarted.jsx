import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Briefcase, Users, CheckCircle, ArrowRight } from 'lucide-react';

const GetStarted = () => {
  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Create an Account',
      description: 'Sign up with your email in seconds. No credit card required for your 14-day free trial.',
      color: 'blue'
    },
    {
      number: '02',
      icon: Briefcase,
      title: 'Setup Your Workspace',
      description: 'Customize your workspace with project boards, task lists, and workflows that fit your team.',
      color: 'purple'
    },
    {
      number: '03',
      icon: Users,
      title: 'Invite Your Team',
      description: 'Add team members via email and assign roles. Collaborate in real-time from day one.',
      color: 'green'
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Start Managing Tasks',
      description: 'Create your first tasks, set priorities, track progress, and watch your productivity soar.',
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600',
    orange: 'from-orange-500 to-orange-600'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
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
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 transition-colors duration-300" style={{ letterSpacing: '-0.02em', lineHeight: '1.1' }}>
            Get Started with <span className="font-logo text-blue-600 dark:text-blue-400">FlowTask</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300" style={{ lineHeight: '1.6' }}>
            Follow these simple steps to set up your account and start managing tasks like a pro.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg dark:shadow-gray-900/50 hover:shadow-2xl transition-all duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-11 h-11 sm:w-12 sm:h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-base sm:text-lg shadow-lg transition-colors duration-300">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colorClasses[step.color]} flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {step.description}
                </p>

                {/* Arrow Connector (except for last item on desktop) */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-400" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl dark:shadow-gray-900/50 max-w-3xl mx-auto transition-colors duration-300">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Ready to Get <span className="font-accent text-blue-600 dark:text-blue-400">Started?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
              Join thousands of teams already using FlowTask to streamline their workflows.
            </p>

            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300">
              Create Free Account
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Setup in 5 minutes</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
            Need help getting started?{' '}
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-colors duration-300">
              View our documentation
            </a>
            {' '}or{' '}
            <a href="#contact" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-colors duration-300">
              contact support
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStarted;
