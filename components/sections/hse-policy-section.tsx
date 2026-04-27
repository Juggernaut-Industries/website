'use client';

import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { ShieldCheck, Leaf } from 'lucide-react';

interface HSEPolicySectionProps {
  className?: string;
}

export function HSEPolicySection({ className }: HSEPolicySectionProps) {
  return (
    <section
      className={cn(
        'relative py-24 overflow-hidden bg-deep-navy text-off-white',
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

        <div className="container-jil relative z-10">
          <div className="flex flex-col justify-center items-center gap-8 lg:gap-8 items-stretch">
            <div className="space-y-8 ">
              <div>
                <ScrollReveal animation="fadeUp">
                  <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-4">
                    <span className="w-8 h-px bg-industrial-gold" />
                    Our Commitment
                  </span>
                </ScrollReveal>
                <ScrollReveal animation="fadeUp" delay={0.1}>
                  <h2 className="font-display text-3xl md:text-4xl  font-light leading-[2.5rem] mb-6">
                    HEALTH, SAFETY & ENVIRONMENT
                  </h2>
                </ScrollReveal>
              </div>
          </div>

          <ScrollReveal animation="fadeUp" delay={0.1}>
            <p className="text-light-gray text-lg leading-relaxed">
              Safety is not a policy at Juggernaut it is a
              culture. Our HSE management system is built
              on global best practices, continuous staff
              training, and strict regulatory compliance.
              Across thousands of operational hours and
              multiple active sites, we have maintained a
              record free of major incidents and that is a
              standard we protect on every project we take
              on. Our people go home safe.
            </p>
          </ScrollReveal>

          {/* Feature points */}
          {/* <ScrollReveal animation="fadeUp" delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 text-left max-w-xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-steel-blue/20 text-industrial-gold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-sm uppercase tracking-wider mb-2">Zero Harm</h4>
                  <p className="text-sm text-light-gray">Dedicated to ensuring a safe working environment for all employees and contractors.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-steel-blue/20 text-industrial-gold">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading text-sm uppercase tracking-wider mb-2">Sustainability</h4>
                  <p className="text-sm text-light-gray">Minimizing our environmental footprint through responsible operational practices.</p>
                </div>
              </div>
            </div>
          </ScrollReveal> */}
        </div>
      </div>
    </section>
  );
}
