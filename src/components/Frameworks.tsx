'use client';

import { motion } from 'framer-motion';

const frameworks = [
  {
    title: 'The 5AM Hour That Built My Backbone',
    excerpt: 'How early morning discipline shapes character and purpose.',
    category: 'Discipline',
    readTime: '5 min',
  },
  {
    title: 'How the Army Taught Me to Hear God',
    excerpt: 'Finding divine guidance in military structure.',
    category: 'Faith',
    readTime: '7 min',
  },
  {
    title: 'Why I&apos;m Building for a Wife I Haven&apos;t Met Yet',
    excerpt: 'Preparing systems and self for future family.',
    category: 'Legacy',
    readTime: '6 min',
  },
];

export function Frameworks() {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary dark:text-accent mb-4">
            Frameworks & Fire
          </h2>
          <p className="text-xl text-secondary dark:text-gray-300">
            Short writings on masculine presence, tech systems, and faith
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frameworks.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime} read
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-primary dark:text-accent mb-3">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                
                <button className="text-primary dark:text-accent font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-primary dark:bg-accent/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Join the Journey
          </h3>
          <p className="text-white/80 mb-6">
            Get new frameworks and insights delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 