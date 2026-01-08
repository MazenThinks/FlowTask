import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager at TechCorp',
      quote: 'FlowTask transformed how our team collaborates. The intuitive interface and powerful features make project management effortless. Highly recommended!',
      avatar: 'SJ',
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Michael Chen',
      role: 'CEO at StartupHub',
      quote: 'We\'ve tried many tools, but FlowTask stands out. The analytics and automation features saved us countless hours every week. Game changer!',
      avatar: 'MC',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Lead at Creative Co',
      quote: 'The best task management tool we\'ve used. Clean design, excellent support, and features that actually help us stay productive. Love it!',
      avatar: 'ER',
      color: 'from-orange-500 to-pink-500'
    }
  ];

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
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-colors duration-300" style={{ letterSpacing: '-0.02em', lineHeight: '1.2' }}>
            Loved by Teams <span className="font-display text-blue-600 dark:text-blue-400">Worldwide</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300" style={{ lineHeight: '1.6' }}>
            See what our customers have to say about FlowTask.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl dark:hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4 sm:mb-6">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 opacity-50" />
              </div>

              {/* Testimonial Quote */}
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-5 sm:mb-6 transition-colors duration-300">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Avatar */}
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-md flex-shrink-0`}>
                  {testimonial.avatar}
                </div>

                {/* Name and Role */}
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10 sm:mt-12 px-4"
        >
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Join thousands of satisfied customers
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 sm:px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-200 shadow-lg hover:shadow-xl md:transform md:hover:-translate-y-1 touch-manipulation w-full sm:w-auto max-w-xs">
            Start Your Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
