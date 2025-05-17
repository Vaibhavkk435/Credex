import React from 'react';
import { motion } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm border border-gray-800/50"
    >
      <h3 className="text-lg font-semibold text-white mb-3">{question}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
    </motion.div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Are these solutions applicable to me if I am operating a co-location?",
      answer: "Yes! Our solutions are designed to help co-location operators manage their infrastructure more efficiently and effectively."
    },
    {
      question: "How do you ensure data privacy and security?",
      answer: "We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information."
    },
    {
      question: "How does pricing work?",
      answer: "Depending on your requirements, we offer flexible pricing models."
    },
    {
      question: "Do you provide ongoing support and maintenance for your solutions?",
      answer: "Absolutely - we offer comprehensive support and maintenance as well as customization for your needs."
    },
    {
      question: "How do I get started?",
      answer: "Set up a demo and we'll guide you through our offerings and start a trial!"
    }
  ];

  return (
    <section className="py-24 relative bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-medium"
          >
            FAQs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mt-2 mb-4"
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Find answers to common questions about our solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 