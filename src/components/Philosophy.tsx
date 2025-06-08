'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Masculinity',
    description: 'Strength tempered by wisdom, leadership guided by service.',
    icon: '💪',
  },
  {
    title: 'Legacy',
    description: 'Building systems that outlast us, protecting what matters.',
    icon: '🏛️',
  },
  {
    title: 'Marriage',
    description: 'Preparing to lead a family with purpose and protection.',
    icon: '💍',
  },
  {
    title: 'Faith',
    description: 'Anchored in God\'s wisdom, guided by eternal principles.',
    icon: '✝️',
  },
];

export function Philosophy() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            Philosophy
          </h2>
          <p className="text-xl text-gray-200">
            Core beliefs that shape my mission
          </p>
        </div>

        {/* Featured Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <blockquote className="text-2xl font-serif italic text-accent">
            "I&apos;m building for the family I don&apos;t yet have, because legacy begins before lineage."
          </blockquote>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/15"
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-bold text-accent mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-200">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 