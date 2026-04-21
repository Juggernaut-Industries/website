'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';
import { GoldDot } from '@/components/ui/gold-dot';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { projects, successFactors } from '@/config/projects';
import { ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="OUR PROJECTS"
        subtitle="Selected projects that we have delivered or are currently ongoing, making key impacts across Nigeria."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
        ]}
        backgroundImage="/construction.jpg"
      />

      {/* Intro Section - Content Left, Image Right */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left - Content */}
            <div className="space-y-8 order-1">
              {/* Header */}
              <ScrollReveal animation="fadeUp">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                    <span className="w-8 h-px bg-industrial-gold" />
                    Selected Projects
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                    DELIVERING
                    <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                      EXCELLENCE
                    </span>
                  </h2>
                </div>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed text-lg">
                  The following is a list of <strong className="text-deep-navy">selected projects</strong> that
                  we have delivered or are currently ongoing, making key impacts across Nigeria.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.15}>
                <p className="text-steel-blue leading-relaxed">
                  From government contracts to private sectors, our portfolio demonstrates
                  our commitment to quality and our capability to deliver complex projects on time
                  and within budget.
                </p>
              </ScrollReveal>

            </div>

            {/* Right - Sticky Image */}
             {/* Project Stats */}
              <ScrollReveal animation="fadeUp" delay={0.2} className='order-2'>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '5+', label: 'Major Projects' },
                    { value: '100%', label: 'On-Time Delivery' },
                    { value: '20+', label: 'Years Experience' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded-xl bg-off-white/50 border border-steel-blue/5">
                      <p className="font-display text-2xl md:text-3xl font-semibold text-industrial-gold mb-1">
                        {stat.value}
                      </p>
                      <p className="font-heading text-[10px] tracking-[0.1em] uppercase text-steel-blue">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="relative py-14 overflow-hidden bg-off-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #0D1B2A 1px, transparent 0)`,
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        {/* <div className="container-jil mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-3">
            <span className="w-8 h-px bg-industrial-gold" />
            Project Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-light text-deep-navy">OUR PROJECTS</h2>
        </div> */}

        <div className="container-jil relative z-10">
          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} animation="fadeUp" delay={0.1 * index}>
                <div className="group bg-white rounded-xl overflow-hidden border border-steel-blue/10 hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image */}
                    <div className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className={`p-6 lg:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      {/* Top Bar: Client Logo & Status Badge */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        {/* Client Logo */}
                        <div className="relative w-20 h-20 rounded-lg p-2 border border-steel-blue/10 bg-off-white/50 shrink-0">
                          <Image
                            src={project.clientLogo}
                            alt={project.client}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        
                        {/* Status Badge */}
                        <span 
                          className={`px-3 py-1 text-[10px] font-heading tracking-[0.15em] uppercase rounded-full border ${
                            project.completed 
                              ? 'bg-steel-blue/5 border-steel-blue/20 text-steel-blue' 
                              : 'bg-industrial-gold/10 border-industrial-gold/20 text-industrial-gold'
                          }`}
                        >
                          {project.completed ? 'Completed' : 'Ongoing'}
                        </span>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-col gap-4 mb-6">
                        {/* Category & Date Group */}
                        <div className="flex flex-col gap-1">
                          <span className="font-heading text-xs tracking-[0.1em] uppercase text-industrial-gold">
                            {project.sector}
                          </span>
                          <span className="font-heading text-xs tracking-[0.1em] uppercase text-steel-blue opacity-80">
                            {project.year}
                          </span>
                        </div>

                        {/* Client & Location Group */}
                        <div className="flex flex-col gap-1">
                          <span className="font-heading text-sm tracking-wide text-steel-blue font-medium">
                            {project.client}
                          </span>
                          <div className="flex items-center gap-2 text-sm text-steel-blue">
                            <GoldDot size="sm" />
                            <span>{project.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-deep-navy mb-3">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-steel-blue text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Services */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-heading tracking-wider uppercase bg-off-white text-steel-blue border border-steel-blue/10"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Success Factors Section */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="w-full space-y-8">
            {/* Header */}
            <ScrollReveal animation="fadeUp">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                  <span className="w-8 h-px bg-industrial-gold" />
                  Why We Succeed
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                  SUCCESS
                  <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                    FACTORS
                  </span>
                </h2>
              </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p className="text-steel-blue leading-relaxed max-w-3xl">
                We have identified key elements that contribute to the success of our projects.
                These factors ensure consistent delivery and client satisfaction across all our
                engagements.
              </p>
            </ScrollReveal>

            {/* Divider */}
            <div className="h-px bg-steel-blue/20" />

            {/* Success Factors List */}
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {successFactors.map((factor, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <GoldDot size="lg" className="mt-1 flex-shrink-0" />
                    <p className="text-steel-blue leading-relaxed">{factor}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal animation="fadeUp" delay={0.3}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-steel-blue hover:text-off-white transition-colors"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-industrial-gold/50 text-industrial-gold font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-industrial-gold hover:text-near-black transition-colors"
                >
                  Our Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
