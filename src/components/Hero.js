import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const logos = [
    'intel', 'lenovo', 'schneider', 'supermicro', 'nvidia', 
    'amd', 'cisco', 'dell', 'hp'
  ];

  return (
    <section className="relative min-h-[90vh] bg-dark overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <div className="text-center max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight whitespace-nowrap"
          >
            <span className="inline-block bg-text-gradient bg-clip-text text-transparent">
              Data Center Management System
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-gray-400 font-light"
          >
            Increase uptime, reduce costs, automate operations, and stay compliant.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-2 text-lg md:text-xl text-gray-400 font-light"
          >
            Built for colocations, data centers, and cloud providers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <a
              href="#"
              className="inline-block px-12 py-4 text-lg font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-200"
            >
              Request Demo
            </a>
          </motion.div>
        </div>
      </div>

      {/* Logo Marquee Section */}
      <div className="relative mt-24 pb-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center text-gray-500 text-base font-medium mb-12"
        >
          Seamless integrations with any data center hardware
        </motion.p>

        <div className="relative w-full overflow-hidden logo-container">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-dark to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-dark to-transparent z-10"></div>

          {/* Scrolling logos */}
          <div className="flex logo-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div 
                key={`logo1-${index}`}
                className="mx-12 flex items-center"
              >
                <img 
                  src={`/logos/${logo}.svg`}
                  alt={logo.replace('-', ' ')}
                  className="h-12 w-auto opacity-40 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {logos.map((logo, index) => (
              <div 
                key={`logo2-${index}`}
                className="mx-12 flex items-center"
              >
                <img 
                  src={`/logos/${logo}.svg`}
                  alt={logo.replace('-', ' ')}
                  className="h-8 w-auto opacity-40 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 