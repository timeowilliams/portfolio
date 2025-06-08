'use client';

import { Section } from './Section';
import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2019',
    title: 'USPS → National Guard',
    description: 'Beginning of service journey in Finance',
    icon: '📬'
  },
  {
    year: '2021',
    title: 'Tech Transformation',
    description: 'Building systems that matter',
    icon: '💻'
  },
  {
    year: '2024',
    title: 'US Army Cyber Reserves',
    description: 'Evolution into 17C Cyber Operations',
    icon: '🛡️'
  },
  {
    year: '2024',
    title: 'BluePath Labs',
    description: 'Software Engineering for Robotics Research Lab',
    icon: '🤖'
  }
];

const cardAnimation = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  }
};

export function Origin() {
  return (
    <Section
      id="origin"
      title="Origin"
      subtitle="A journey from service to systems, guided by faith and discipline"
      dark
    >
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/20" />

        {/* Timeline Items */}
        <div className="relative space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              variants={cardAnimation}
              className={`flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className="w-5/12">
                <div className="bg-secondary/50 p-6 rounded-lg border border-accent/10 backdrop-blur-sm">
                  <span className="text-accent font-mono text-sm">{item.year}</span>
                  <h3 className="text-xl font-bold mt-2 font-serif">{item.title}</h3>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                </div>
              </div>

              {/* Icon */}
              <div className="w-2/12 flex justify-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center border-2 border-accent">
                  <span className="text-2xl">{item.icon}</span>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Decorative Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <blockquote className="text-xl italic text-accent/80 font-serif">
            &ldquo;I&apos;m building for the family I don&apos;t yet have...&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </Section>
  );
} 