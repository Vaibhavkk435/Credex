import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, BoltIcon, ChartBarIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm border border-gray-800/50"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-full bg-gray-800">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ResourceManagement = () => {
  const features = [
    {
      icon: EnvelopeIcon,
      title: 'Resource Management',
      description: 'See all of your resources in one place, update issues, and dynamically plan your resources.'
    },
    {
      icon: BoltIcon,
      title: 'Deployment Automation',
      description: 'From design, sourcing, supply, manufacutinring, and deployment - our system automates the entire process.'
    },
    {
      icon: ChartBarIcon,
      title: 'Networking',
      description: 'Ensure that your networking infrastructure is always in place and ready to scale with your deployments.'
    },
    {
      icon: CodeBracketIcon,
      title: 'Firmware Versioning',
      description: 'Keep track of all firmware versions across your infrastructure and automate updates.'
    }
  ];

  return (
    <section className="py-24 relative bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-medium"
          >
            Built for Scale
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mt-2 mb-4"
          >
            Dynamic Resource Management
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 max-w-2xl"
          >
            Seamlessly expand from racks to data centers. Our system grows with you, automatically managing resources across your entire infrastructure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceManagement; 