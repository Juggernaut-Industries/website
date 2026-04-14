"use client";

import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { GoldDot } from "@/components/ui/gold-dot";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import type { Service } from "@/config/services";
import { services } from "@/config/services";
import { ArrowRight } from "lucide-react";

const SERVICE_SECTION_META: Record<
  Service["id"],
  { eyebrow: string; headlineLine1: string; headlineLine2: string; ctaLabel: string }
> = {
  mining: {
    eyebrow: "Our Core Service",
    headlineLine1: "MINING & EXPLORATION",
    headlineLine2: "SERVICES",
    ctaLabel: "Explore Mining Services",
  },
  construction: {
    eyebrow: "Construction",
    headlineLine1: "CONSTRUCTION",
    headlineLine2: "ENGINEERING",
    ctaLabel: "Explore Construction Services",
  },
  solar: {
    eyebrow: "Renewable Energy",
    headlineLine1: "RENEWABLE",
    headlineLine2: "ENERGY",
    ctaLabel: "Explore Renewable Energy",
  },
};

export default function ServicesPage() {

  return (
    <>
      {/* Page Header */}
      <PageHeader
        // title="OUR SERVICES"
        subtitle="Comprehensive solutions across mining, agriculture, construction, and renewable energy sectors."
        // breadcrumbs={[
        //   { label: 'Home', href: '/' },
        //   { label: 'Services', href: '/services' },
        // ]}
        backgroundImage="/construction.jpg"
      />

      {/* Intro Section - Centered */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal animation="fadeUp">
              <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-4">
                <span className="w-8 h-px bg-industrial-gold" />
                What We Do
                {/* <span className="w-8 h-px bg-industrial-gold" /> */}
              </span>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.1}>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem] mb-6">
                EXCELLENCE ACROSS SECTORS
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.15}>
              <p className="text-steel-blue leading-relaxed text-lg">
                JIL delivers a range of services across Nigeria&apos;s key
                growth sectors, including mineral exploration and drilling,
                construction and renewable energy. Through a disciplined,
                client-focused approach, the company provides integrated
                solutions tailored to the specific needs of both government and
                private sector clients across the country.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/*
      <section className="relative py-14 overflow-hidden bg-off-white border-y border-steel-blue/10">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #0D1B2A 1px, transparent 0)`,
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="container-jil relative z-10">
          <div className="mb-10 md:mb-12">
            <ScrollReveal animation="fadeUp">
              <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-3">
                <span className="w-8 h-px bg-industrial-gold" />
                Service Areas
              </span>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.05}>
              <h2 className="font-display text-3xl md:text-4xl font-light text-deep-navy">
                EXPLORE OUR SERVICES
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p className="mt-3 max-w-2xl text-steel-blue leading-relaxed">
                Select a sector to read scope, capabilities, and how we deliver
                for government and private clients.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollReveal
                key={service.id}
                animation="fadeUp"
                delay={0.08 * index}
              >
                <Link href={service.href} className="group block h-full">
                  <article className="relative h-full flex flex-col bg-white rounded-xl overflow-hidden border border-steel-blue/10 shadow-sm hover:shadow-xl hover:border-industrial-gold/25 transition-all duration-300">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/85 via-deep-navy/25 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-display text-xl md:text-2xl font-semibold text-off-white group-hover:text-industrial-gold transition-colors">
                          {service.shortTitle}
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                      <p className="text-sm text-steel-blue leading-relaxed flex-1 mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-industrial-gold font-heading text-xs tracking-[0.1em] uppercase group-hover:gap-3 transition-all">
                        View {service.shortTitle}
                        <ArrowRight className="w-4 h-4 shrink-0" />
                      </span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Full detail block per service — same layout as legacy mining section */}
      {services.map((service) => {
        const meta = SERVICE_SECTION_META[service.id];
        return (
          <section
            key={service.id}
            className="relative py-14 overflow-hidden bg-deep-navy"
          >
            <div className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/95 to-deep-navy/80" />
            </div>

            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="container-jil relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <ScrollReveal animation="fadeUp">
                    <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                      <span className="w-8 h-px bg-industrial-gold" />
                      {meta.eyebrow}
                    </span>
                  </ScrollReveal>

                  <ScrollReveal animation="fadeUp" delay={0.1}>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-off-white leading-[2.5rem]">
                      {meta.headlineLine1}
                      <span className="block text-xl md:text-2xl lg:text-3xl text-light-gray tracking-[0.15em]">
                        {meta.headlineLine2}
                      </span>
                    </h2>
                  </ScrollReveal>

                  <ScrollReveal animation="fadeUp" delay={0.15}>
                    <div className="space-y-3 max-w-xl">
                      {service.fullDescription.map((para) => (
                        <p
                          key={para}
                          className="text-light-gray leading-relaxed text-lg"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </ScrollReveal>

                  <ScrollReveal animation="fadeUp" delay={0.2}>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1.5 rounded-full text-xs font-heading tracking-wider uppercase bg-steel-blue/20 text-light-gray border border-white/10"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </ScrollReveal>

                  <ScrollReveal animation="fadeUp" delay={0.25}>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-off-white hover:text-deep-navy transition-colors"
                    >
                      {meta.ctaLabel}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </ScrollReveal>
                </div>

                <div className="lg:col-span-5">
                  <ScrollReveal animation="fadeUp" delay={0.2}>
                    <div className="grid grid-cols-2 gap-4">
                      {service.highlights?.map((highlight) => (
                        <div
                          key={highlight.title}
                          className="p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                        >
                          <h4 className="font-heading text-xs tracking-[0.1em] uppercase text-industrial-gold mb-2">
                            {highlight.title}
                          </h4>
                          <p className="text-xs text-light-gray leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Why Choose Us Section - Stats + Content Side by Side */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Stats Grid */}
            <ScrollReveal animation="fadeUp">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    value: "3",
                    label: "Service Areas",
                    description: "Diverse sectors",
                  },
                  {
                    value: "20+",
                    label: "Years Experience",
                    description: "Since 2006",
                  },
                  {
                    value: "100%",
                    label: "Client Satisfaction",
                    description: "Quality assured",
                  },
                  {
                    value: "24/7",
                    label: "Support",
                    description: "Always available",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-xl bg-off-white border border-steel-blue/10 text-center hover:border-industrial-gold/20 transition-colors"
                  >
                    <p className="font-display text-3xl md:text-4xl font-semibold text-industrial-gold mb-1">
                      {stat.value}
                    </p>
                    <p className="font-heading text-xs tracking-[0.1em] uppercase text-deep-navy mb-1">
                      {stat.label}
                    </p>
                    <p className="text-xs text-steel-blue">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right - Content */}
            <div className="space-y-6">
              <ScrollReveal animation="fadeUp">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                    <span className="w-8 h-px bg-industrial-gold" />
                    Why Choose Us
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                    TRUSTED
                    <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                      EXCELLENCE
                    </span>
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed">
                  We have assembled a world class team with experience in the
                  African terrain. We own our own drill rigs, geophysics
                  equipment and in-house lab, ensuring complete control over
                  quality and timelines.
                </p>
              </ScrollReveal>

              <div className="h-px bg-steel-blue/20" />

              <ScrollReveal animation="fadeUp" delay={0.15}>
                <div className="space-y-3">
                  {[
                    "Own equipment - drill rigs, geophysics, in-house lab",
                    "COREN-registered engineers",
                    "International team with local expertise",
                    "Projects delivered on time and within budget",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm text-steel-blue"
                    >
                      <GoldDot size="sm" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-industrial-gold text-near-black font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-steel-blue hover:text-off-white transition-colors"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-industrial-gold/50 text-industrial-gold font-heading text-xs tracking-[0.1em] uppercase rounded-xl btn-animated relative z-1 overflow-hidden after:bg-industrial-gold hover:text-near-black transition-colors"
                  >
                    View Projects
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
