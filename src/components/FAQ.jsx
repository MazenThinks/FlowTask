import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How does FlowTask help improve productivity?',
      answer: 'FlowTask streamlines your workflow with intelligent task management, automated reminders, and real-time collaboration features. Our analytics help you identify bottlenecks and optimize team performance.'
    },
    {
      question: 'Can I switch plans at any time?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges or credits based on your billing cycle.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide email support for all plans, priority support for Pro users, and 24/7 dedicated support for Enterprise customers. Our average response time is under 2 hours for priority tickets.'
    },
    {
      question: 'Is my data secure with FlowTask?',
      answer: 'Absolutely. We use enterprise-grade encryption, regular security audits, and comply with GDPR, SOC 2, and ISO 27001 standards. Your data is encrypted both in transit and at rest.'
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes! All plans come with a 14-day free trial. No credit card required. You can explore all features and cancel anytime during the trial period without any charges.'
    },
    {
      question: 'Can I integrate FlowTask with other tools?',
      answer: 'FlowTask integrates seamlessly with popular tools like Slack, Google Workspace, Microsoft Teams, Jira, and more. Our API allows custom integrations for Enterprise plans.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300" style={{ letterSpacing: '-0.02em', lineHeight: '1.2' }}>
            Frequently Asked <span className="font-display text-blue-600 dark:text-blue-400">Questions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300" style={{ lineHeight: '1.6' }}>
            Everything you need to know about FlowTask
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/30 overflow-hidden transition-colors duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ(index);
                  }
                }}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-start sm:items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 active:bg-gray-100 dark:active:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset gap-4 touch-manipulation"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg leading-snug transition-colors duration-300">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300"
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10 sm:mt-12 px-4"
        >
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 sm:px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl md:transform md:hover:-translate-y-1 touch-manipulation w-full sm:w-auto max-w-xs"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
