'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { heroContent, stats } from '@/config/site';
import { listKey } from '@/lib/list-key';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { contentImages } from '@/assets';

interface HeroFlowProps {
  className?: string;
}

export function HeroFlow({ className }: HeroFlowProps) {
  return (
    <section
      className={cn(
        'relative min-h-screen overflow-hidden',
        className
      )}
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <Image
          src={contentImages.hero2}
          alt="Juggernaut Industries Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy/25 via-deep-navy/10 to-deep-navy/20" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-industrial-gold/5 to-transparent" />
        {/* Subtle radial glow */}
        <div className="absolute top-1/4 -left-1/4 w-[60%] h-[60%] bg-steel-blue/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[50%] h-[50%] bg-industrial-gold/8 rounded-full blur-[100px]" />
      </div>

      {/* Bottom Gradient Blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deep-navy to-transparent pointer-events-none" />
    </section>
  );
}

export function HeroIntroPanel() {
  return (
    <section className="relative overflow-hidden bg-deep-navy py-12 md:py-16">
      <div className="container-jil space-y-8">
        <div className="max-w- space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-mid-gray">
              <span className="w-8 h-px bg-industrial-gold" />
              {heroContent.eyebrow}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-light-gray font-medium leading-relaxed"
          >
            {heroContent.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            <Link
              href={heroContent.cta.primary.href}
              className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-steel-blue hover:text-off-white transition-colors"
            >
              {heroContent.cta.primary.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center justify-center gap-3 md:gap-4 flex-wrap"
          >
            <div className="flex items-center gap-2 px-4">
              <span className="font-heading text-xs tracking-[0.15em] uppercase text-mid-gray">
                Scroll to Explore
              </span>
              <ChevronDown className="w-4 h-4 text-mid-gray" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="bg-steel-blue/10 backdrop-blur-sm border border-white/10 rounded-xl py-6 px-4"
          >
            <div className="grid grid-cols-3 gap-4 md:gap-0">
              {stats.map((stat, index) => (
                <motion.div
                  key={listKey(
                    [
                      'hero-intro-stat',
                      stat.label,
                      String(stat.value),
                      stat.suffix ?? '',
                      'description' in stat ? stat.description : '',
                    ],
                    index
                  )}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`text-center px-4 ${index < stats.length - 1 ? 'md:border-r md:border-white/10' : ''}`}
                >
                  <div className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-industrial-gold leading-none">
                    {stat.value}
                    <span className="text-2xl md:text-3xl">{stat.suffix}</span>
                  </div>
                  <div className="font-heading text-[10px] md:text-xs tracking-[0.15em] uppercase text-off-white mt-2">
                    {stat.label}
                  </div>
                  {'description' in stat && (
                    <div className="text-[9px] md:text-[10px] text-mid-gray mt-1">
                      {stat.description}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
