import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';

const FeatureSection = ({ title, description, bulletPoints, media, mediaType = 'image', imagePosition = 'right', additionalText }) => {
  return (
    <div className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-12 ${imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-white mb-6 inline-block bg-[#111111] px-6 py-3 rounded-lg"
            >
              {title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 mb-8"
            >
              {description}
            </motion.p>
            <div className="space-y-4">
              {bulletPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{point}</span>
                </motion.div>
              ))}
            </div>
            {additionalText && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 text-gray-400"
              >
                {additionalText}
              </motion.p>
            )}
          </div>
          <motion.div 
            initial={{ opacity: 0, x: imagePosition === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            {mediaType === 'video' ? (
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="rounded-lg shadow-2xl border border-gray-800 w-full"
              >
                <source src={media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img 
                src={media} 
                alt={title}
                className="rounded-lg shadow-2xl border border-gray-800"
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-dark relative">
      <FeatureSection
        title="Asset Management"
        description="Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease."
        bulletPoints={[
          "Automated inventory tracking and lifecycle management",
          "Intelligent ticketing based on asset health and performance",
          "Efficient resource allocation and optimization"
        ]}
        media="/videos/hb-monitoring.mp4"
        mediaType="video"
        imagePosition="right"
      />

      <FeatureSection
        title="A Single Pane of Glass"
        description="A unified view across all of your BMS and EPMS systems, tailored to your needs."
        bulletPoints={[
          "Comprehensive visibility across all of your colocation infrastructure",
          "Customizable interface tailored to your specific operational requirements and priorities",
          "Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management"
        ]}
        media="/videos/networking-b.mp4"
        mediaType="video"
        imagePosition="left"
      />

      <FeatureSection
        title="Built-In Compliance"
        description="CentralAxis provides compliance as a service for data centers."
        bulletPoints={[
          "Track data for EU, US, and global regulatory standards",
          "We guarantee compliance and handle every step between monitoring and reporting"
        ]}
        media="/videos/__compliance.mp4"
        mediaType="video"
        imagePosition="right"
      />

      <FeatureSection
        title="Data Center Planning"
        description="Want to support the latest and greatest architectures on the market? Modern GPUs and even CPUs are more water and energy intensive than ever."
        bulletPoints={[
          "Model new architectures and see detailed implications on power and cooling needs",
          "Design unique specifications for your data center"
        ]}
        media="/videos/dc-planning.mp4"
        mediaType="video"
        imagePosition="left"
        additionalText="Our continuous monitoring is the most advanced on the market, lowering costs while increasing reliability."
      />
    </section>
  );
};

export default Features; 