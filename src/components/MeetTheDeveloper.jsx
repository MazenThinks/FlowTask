import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ExternalLink } from 'lucide-react';

const MeetTheDeveloper = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Decorative Line */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-xs"></div>
          </div>

          {/* Signature-style Title */}
          <h2 className="text-lg uppercase tracking-widest text-gray-500 mb-4 font-medium">
            Meet the Developer
          </h2>

          {/* Name with Handwritten Accent */}
          <h3 className="text-5xl md:text-6xl font-signature text-gray-900 mb-6" style={{ lineHeight: '1.2' }}>
            Mazen Magdy
          </h3>

          {/* One-line Description */}
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto" style={{ lineHeight: '1.6' }}>
            Frontend Developer specializing in modern, product-focused interfaces
          </p>

          {/* LinkedIn Card */}
          <motion.a
            href="https://www.linkedin.com/in/mazenmagdyy/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-4 bg-white border-2 border-gray-200 hover:border-blue-500 rounded-2xl px-8 py-5 shadow-md hover:shadow-xl transition-all duration-300 group focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
          >
            {/* LinkedIn Logo */}
            <div className="w-12 h-12 rounded-lg bg-[#0077B5] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-7 h-7 text-white" fill="white" />
            </div>

            {/* Text Content */}
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  View LinkedIn Profile
                </span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <span className="text-sm text-gray-500">
                Connect and learn more about my work
              </span>
            </div>
          </motion.a>

          {/* Signature Stamp Element */}
          <div className="mt-12 inline-block">
            <div className="relative">
              <div className="text-sm font-medium text-gray-400 tracking-wider uppercase">
                Built with care
              </div>
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetTheDeveloper;
