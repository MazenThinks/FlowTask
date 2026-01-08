import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small teams',
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: [
        'Up to 10 team members',
        '5GB storage',
        'Basic analytics',
        'Email support',
        'Mobile app access',
        'Weekly reports'
      ],
      popular: false
    },
    {
      name: 'Pro',
      description: 'Best for growing businesses',
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        'Up to 50 team members',
        '50GB storage',
        'Advanced analytics',
        'Priority support',
        'Mobile app access',
        'Daily reports',
        'Custom integrations',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large-scale organizations',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'Advanced analytics & AI',
        '24/7 dedicated support',
        'Mobile app access',
        'Real-time reports',
        'Custom integrations',
        'API access',
        'SSO & SAML',
        'Custom contracts'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300" style={{ letterSpacing: '-0.02em', lineHeight: '1.2' }}>
            Simple, <span className="font-display text-blue-600 dark:text-blue-400">Transparent</span> Pricing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 transition-colors duration-300" style={{ lineHeight: '1.6' }}>
            Choose the perfect plan for your team. No hidden fees.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <span className={`text-base sm:text-lg font-medium transition-colors ${!isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-20 h-11 bg-gray-300 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 touch-manipulation"
              style={{ backgroundColor: isYearly ? '#3B82F6' : '#D1D5DB' }}
              aria-label={`Switch to ${isYearly ? 'monthly' : 'yearly'} billing`}
            >
              <motion.div
                className="absolute top-1.5 left-1.5 w-8 h-8 bg-white rounded-full shadow-md"
                animate={{ x: isYearly ? 40 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-base sm:text-lg font-medium transition-colors ${isYearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Yearly
            </span>
            {isYearly && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full"
              >
                Save 20%
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 px-4 sm:px-0">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/50 p-6 sm:p-8 transition-colors duration-300 ${plan.popular ? 'border-2 border-blue-500 dark:border-blue-400 md:transform md:scale-105' : 'border border-gray-200 dark:border-gray-700'
                }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-5 sm:mb-6 mt-2">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{plan.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 transition-colors duration-300">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    $
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={isYearly ? 'yearly' : 'monthly'}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                      >
                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 ml-2 transition-colors duration-300">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>
                {isYearly && (
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 transition-colors duration-300">
                    ${(plan.yearlyPrice / 12).toFixed(2)}/month billed annually
                  </p>
                )}
              </div>

              {/* Features List */}
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to="/get-started"
                className={`w-full px-6 py-3.5 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center touch-manipulation ${plan.popular
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl md:transform md:hover:-translate-y-1'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
