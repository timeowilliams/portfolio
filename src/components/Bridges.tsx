'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const bridges = [
  {
    title: 'Deep Focus',
    description: 'The "Oura Ring" for productivity - a macOS app that helps engineers and creators maintain sustained focus in a distracted world.',
    image: '/images/deep-focus.png',
    lesson: 'Technology should serve human flourishing, not human fragmentation.',
    link: 'https://github.com/Tech-Nest-Ventures/deepFocus',
    tech: ['Electron', 'TypeScript', 'SolidJS'],
    impact: 'Helping developers track and improve their deep work hours through automated tracking and insights.'
  },
  {
    title: 'AI Legislation Tracker',
    description: 'Built for Vanderbilt University to monitor and analyze AI-related legislation across different stages.',
    image: '/images/ai-tracker.png',
    lesson: 'Data clarity creates better policy decisions.',
    link: 'https://ai-legislation-tracker.streamlit.app/',
    tech: ['Python', 'Streamlit', 'NLP'],
    impact: 'Enabling researchers and policymakers to stay informed on AI legislation development.'
  },
  {
    title: 'Williams Real Estate',
    description: 'SEO-optimized real estate platform ranking #1 for Danbury searches, helping connect families with homes.',
    image: '/images/williams-re.png',
    lesson: 'Technical excellence should serve human needs first.',
    link: 'https://williamsrealestates.com',
    tech: ['Next.js', 'SEO', 'Analytics'],
    impact: 'Increased visibility and leads for local real estate business through strategic optimization.'
  },
];

export function Bridges() {
  return (
    <section className="py-20 bg-white dark:bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary dark:text-accent mb-4">
            Bridges I&apos;ve Built
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Systems that carry others forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bridges.map((bridge, index) => (
            <motion.div
              key={bridge.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-accent/10"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
                <a 
                  href={bridge.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative h-full transform transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={bridge.image}
                    alt={bridge.title}
                    fill
                    className="object-cover"
                  />
                </a>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-accent">
                    {bridge.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4">
                  {bridge.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {bridge.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="border-t border-accent/10 pt-4 mt-4">
                  <h4 className="text-sm font-semibold text-accent mb-2">
                    Impact:
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {bridge.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 