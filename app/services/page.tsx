"use client";

import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { GoldDot } from "@/components/ui/gold-dot";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { services, explorationServices } from "@/config/services";
import { ArrowRight } from "lucide-react";

const SERVICE_HEADLINES: Record<
  string,
  { headlineLine1: string; headlineLine2: string }
> = {
  mining: { headlineLine1: "MINING & EXPLORATION", headlineLine2: "SERVICES" },
  construction: { headlineLine1: "CONSTRUCTION", headlineLine2: "ENGINEERING" },
  solar: { headlineLine1: "RENEWABLE", headlineLine2: "ENERGY" },
};

export default function ServicesPage() {
  const [miningService, constructionService, solarService] = services;

  return (
    <>
      {/* Page Header */}
      <PageHeader
        // title="OUR SERVICES"
        // subtitle="Comprehensive solutions across mining, construction, and renewable energy sectors."
        // breadcrumbs={[
        //   { label: 'Home', href: '/' },
        //   { label: 'Services', href: '/services' },
        // ]}
        backgroundImage="/construction.jpg"
      />

      {/* Intro Section */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal animation="fadeUp">
              <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-4">
                <span className="w-8 h-px bg-industrial-gold" />
                What We Do
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

      {/* ─── MINING & EXPLORATION ─────────────────────────────── */}

      {/* Mining Section 1 – Overview Hero */}
      <section className="relative py-14 overflow-hidden bg-deep-navy">
        <div className="absolute inset-0">
          <Image
            src={miningService.image}
            alt={miningService.title}
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
                  Our Core Service
                </span>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.1}>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-off-white leading-[2.5rem]">
                  MINING & EXPLORATION
                  <span className="block text-xl md:text-2xl lg:text-3xl text-light-gray tracking-[0.15em]">
                    SERVICES
                  </span>
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.15}>
                <div className="space-y-3 max-w-xl">
                  {miningService.fullDescription.map((para) => (
                    <p key={para} className="text-light-gray leading-relaxed text-lg">
                      {para}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="flex flex-wrap gap-2">
                  {miningService.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 rounded-full text-xs font-heading tracking-wider uppercase bg-steel-blue/20 text-light-gray border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {miningService.highlights?.map((highlight) => (
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

      {/* Mining Section 2 – Exploration & Drilling Services */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            <ScrollReveal animation="fadeUp" className="order-2 lg:order-1">
              <div className="sticky top-24">
                <div className="relative aspect-square w-full lg:h-96 rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/mining-2.jpeg"
                    alt="Mining exploration services"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-8 order-1 lg:order-2">
              <ScrollReveal animation="fadeUp">
                <div className="space-y-4">
                  <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold">
                    <span className="w-8 h-px bg-industrial-gold" />
                    What We Do
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                    EXPLORATION & DRILLING
                    <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                      SERVICES
                    </span>
                  </h2>
                </div>
              </ScrollReveal>

              <div className="h-px bg-steel-blue/20" />

              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {explorationServices.slice(0, 12).map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-steel-blue">
                      <GoldDot size="sm" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mining Section 3 – RC Drilling */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            <ScrollReveal animation="fadeUp" className="order-2">
              <div className="sticky top-24">
                <div className="relative aspect-square w-full lg:h-96 rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/rc.jpg"
                    alt="RC Drilling"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-8 order-1">
              <ScrollReveal animation="fadeUp">
                <div className="space-y-4">
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                    RC Drilling
                    <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                      SERVICES
                    </span>
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed">
                  We deliver efficient and high-performance Reverse Circulation (RC) drilling services tailored for mining and exploration projects. Our systems are optimized to produce accurate, uncontaminated samples at high speeds, ensuring reliable data for resource evaluation and decision-making.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mining Section 4 – Diamond Core Drilling */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            <ScrollReveal animation="fadeUp" className="order-2 lg:order-1">
              <div className="sticky top-24">
                <div className="relative aspect-square w-full lg:h-96 rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/diamond-mining.jpg"
                    alt="Diamond Core Drilling"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-8 order-1">
              <ScrollReveal animation="fadeUp">
                <div className="space-y-4">
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-deep-navy leading-[2.5rem]">
                    Diamond Core Drilling
                    <span className="block text-xl md:text-2xl lg:text-3xl text-steel-blue tracking-[0.15em]">
                      SERVICES
                    </span>
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed">
                  Our Diamond Core drilling services provide continuous, high-quality core samples essential for detailed geological and structural analysis. We support advanced exploration, feasibility studies, and geotechnical assessments with precision and consistency, even in complex formations.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONSTRUCTION & SOLAR – Dark Hero Blocks ──────────── */}

      {[constructionService, solarService].map((service) => {
        const headlines = SERVICE_HEADLINES[service.id];
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
                      Services
                    </span>
                  </ScrollReveal>

                  <ScrollReveal animation="fadeUp" delay={0.1}>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-off-white leading-[2.5rem]">
                      {headlines.headlineLine1}
                      <span className="block text-xl md:text-2xl lg:text-3xl text-light-gray tracking-[0.15em]">
                        {headlines.headlineLine2}
                      </span>
                    </h2>
                  </ScrollReveal>

                  <ScrollReveal animation="fadeUp" delay={0.15}>
                    <div className="space-y-3 max-w-xl">
                      {service.fullDescription.map((para) => (
                        <p key={para} className="text-light-gray leading-relaxed text-lg">
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

      {/* Why Choose Us */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
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
                  Nigerian terrain. We own our own drill rigs, geophysics
                  equipment and in-house lab, ensuring complete control over
                  quality and timelines.
                </p>
              </ScrollReveal>

              <div className="h-px bg-steel-blue/20" />

              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "In-House Laboratory",
                    "World Class Team",
                    "JORC Reporting N143-101",
                    "COREN-Registered Engineers",
                    "Competent mining technicians (Local and International)",
                    "Government & Private Clients",
                    "Nigerian Electricity Management services Agency (NEMSA)",
                    "Geochemistry Analysis",
                    "Competent Persons",
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-steel-blue">
                      <GoldDot size="sm" />
                      <span>{highlight}</span>
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

            {/* Right - Stats Grid */}
            <ScrollReveal animation="fadeUp">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "3", label: "Service Areas", description: "Diverse sectors" },
                  { value: "20+", label: "Years Experience", description: "Since 2006" },
                  { value: "100%", label: "Client Satisfaction", description: "Quality assured" },
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
                    <p className="text-xs text-steel-blue">{stat.description}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
