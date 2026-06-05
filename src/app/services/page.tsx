"use client";

import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { GoldDot } from "@/components/ui/gold-dot";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { services, explorationServices } from "@/config/services";
import { ArrowRight } from "lucide-react";
import { HSEPolicySection } from "@/components/sections";
import { listKey } from "@/lib/list-key";
import { contentImages } from "@/assets/content";

const SERVICE_HEADLINES: Record<string, { headline: string }> = {
  mining: { headline: "MINING & EXPLORATION SERVICES" },
  construction: { headline: "CONSTRUCTION" },
  solar: { headline: "RENEWABLE ENERGY" },
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
        backgroundImage={contentImages.construction}
      />

      {/* Intro Section */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="max-w-3xl flex flex-col gap-4">
            <div>
              <ScrollReveal animation="fadeUp">
                <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-2">
                  <span className="w-8 h-px bg-industrial-gold" />
                  What We Do
                </span>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.1}>
                <h2 className="font-display text-3xl md:text-4xl  font-light text-deep-navy leading-[2.5rem] mb-0">
                  EXCELLENCE ACROSS SECTORS
                </h2>
              </ScrollReveal>
            </div>

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
      <section
        className="relative py-14 overflow-hidden bg-deep-navy"
        id="mining"
      >
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
            <div className="lg:col-span-7 space-y-4">
              <div>
                <ScrollReveal animation="fadeUp">
                  <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-2">
                    <span className="w-8 h-px bg-industrial-gold" />
                    Our Core Service
                  </span>
                </ScrollReveal>

                <ScrollReveal animation="fadeUp" delay={0.1}>
                  <h2 className="font-display text-3xl md:text-4xl  font-light text-off-white leading-[2.5rem] mb-3">
                    MINING & EXPLORATION
                  </h2>
                </ScrollReveal>
              </div>

              <ScrollReveal animation="fadeUp" delay={0.15}>
                <div className="space-y-3 max-w-xl">
                  {miningService.fullDescription.map((para) => (
                    <p
                      key={para}
                      className="text-light-gray leading-relaxed text-lg"
                    >
                      {para}
                    </p>
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

          <ScrollReveal
            animation="fadeUp"
            delay={0.2}
            className="mt-14 border-t border-white/10 pt-10"
          >
            <div>
              {/* <ScrollReveal animation="fadeUp">
                <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-white mb-6">
                  <span className="w-8 h-px bg-white" />
                  Our Step by Step Approach
                </span>
              </ScrollReveal> */}

              <ScrollReveal animation="fadeUp" delay={0.1}>
                <h2 className="font-display text-2xl md:text-3xl  font-light text-off-white leading-[2.5rem] mb-3">
                  Our Step by Step Approach to Exploration
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                {
                  title: "1. Desktop Study & Target Generation",
                  items: [
                    "Literature Review & Public Domain Research",
                    "Data Compilation",
                    "Remote Sensing",
                    "Spectral Geology",
                    "Geophysical Surveys (regional scale)",
                    "Geochemistry Analysis (regional datasets)",
                    "Priority Targets Generation",
                  ],
                },
                {
                  title: "2. Early-Stage Fieldwork",
                  items: [
                    "Mapping (Reconnaissance & Detailed)",
                    "Rock Chips / Grab Sampling",
                    "Soil Sampling Surveys",
                    "Bio-geochemical Surveys",
                    "Trenching and Pitting",
                  ],
                },
                {
                  title: "3. Subsurface Investigation",
                  items: [
                    "Geophysical and Geological Interpretation",
                    "Geotechnical Management",
                  ],
                },
                {
                  title: "4. Resource Definition & Evaluation",
                  items: [
                    "Resource Estimation",
                    "Metallurgical Test Work Campaigns",
                    "Exploration Visualization",
                    "JORC & NI 43-101 Reporting",
                    "Competent Persons (sign-off & oversight)",
                  ],
                },
                {
                  title: "5. Support & Governance",
                  items: [
                    "Exploration Advisory",
                    "Training and Capacity Building",
                  ],
                },
              ].map((section, sectionIndex) => (
                <div
                  key={listKey(
                    ["exploration-step", section.title],
                    sectionIndex
                  )}
                  className="space-y-4"
                >
                  <h4 className="font-heading text-xs tracking-[0.1em] uppercase text-industrial-gold">
                    {section.title}
                  </h4>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={listKey(
                          ["exploration-item", section.title, item],
                          `${sectionIndex}-${itemIndex}`
                        )}
                        className="flex items-start gap-2 text-sm text-light-gray"
                      >
                        <div className="-mt-0.5 flex-shrink-0">
                          <GoldDot size="sm" />
                        </div>
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mining Section 2 – Exploration & Drilling Services */}
      {/* <section className="relative py-14 overflow-hidden bg-white">
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

            <div className="space-y-5 order-1 lg:order-2">
              <div>
  <ScrollReveal animation="fadeUp">
                  <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-2">
                    <span className="w-8 h-px bg-industrial-gold" />
                    What We Do
                  </span>
                </ScrollReveal>

                <ScrollReveal animation="fadeUp" delay={0.1}>
                  <h2 className="font-display text-3xl md:text-4xl  font-light text-deep-navy leading-[2.5rem] mb-3">
                    EXPLORATION & DRILLING SERVICES
                  </h2>
                </ScrollReveal>
              </div>

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
      </section> */}

      <section className="relative pt-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div>
            <div>
              <ScrollReveal animation="fadeUp">
                <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-2">
                  <span className="w-8 h-px bg-industrial-gold" />
                  Services we offer
                </span>
              </ScrollReveal>
            </div>
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <p className="text-steel-blue leading-relaxed text-lg mb-4">
                JIL offers a wide range of drilling services that covers the
                following:
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.15}>
              <ul className="list-disc pl-6 text-steel-blue leading-relaxed text-lg space-y-2">
                <li className="marker:text-industrial-gold">Blast Hole</li>
                <li className="marker:text-industrial-gold">
                  Grade Control
                </li>
                <li className="marker:text-industrial-gold">
                  Geotechnical Drilling
                </li>
                <li className="marker:text-industrial-gold">
                  Water Well Drilling
                </li>
                <li className="marker:text-industrial-gold">
                  Reverse Circulation (RC)
                </li>
                <li className="marker:text-industrial-gold">
                  Diamond Drilling (DD) Core Recovery
                </li>
              </ul>
            </ScrollReveal>
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
                    src={contentImages.survey5}
                    alt="RC Drilling"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-5 order-1">
              <div>
                <ScrollReveal animation="fadeUp" delay={0.1}>
                  <h2 className="font-display text-3xl md:text-4xl  font-light text-deep-navy leading-[2.5rem] mb-3">
                    RC DRILLING
                  </h2>
                </ScrollReveal>
              </div>

              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed">
                  We deliver high-performance Reverse Circulation (RC) drilling
                  services tailored to the demands of modern mining and
                  exploration projects. Leveraging advanced drilling systems and
                  experienced crews, we consistently produce clean,
                  uncontaminated samples with exceptional speed and precision,
                  ensuring reliable, high-quality data for accurate resource
                  evaluation and confident decision-making. Our operations are
                  built on efficiency, safety, and consistency, allowing us to
                  perform effectively across a wide range of terrains and
                  challenging environments. With strict quality control measures
                  and disciplined sampling procedures, we maintain data
                  integrity at every stage, helping clients reduce risk, stay on
                  schedule, and maximize the overall value of their projects.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mining Section 4 – Diamond Drilling */}
      <section className="relative py-14 overflow-hidden bg-white">
        <div className="container-jil relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            <ScrollReveal animation="fadeUp" className="order-2 lg:order-1">
              <div className="sticky top-24">
                <div className="relative aspect-square w-full lg:h-96 rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={contentImages.mining2}
                    alt="Diamond Drilling"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/40 via-transparent to-transparent" />
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-5 order-1">
              <ScrollReveal animation="fadeUp">
                <h2 className="font-display text-3xl md:text-4xl  font-light text-deep-navy leading-[2.5rem] mb-3">
                  DIAMOND DRILLING
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed">
                  Our Diamond drilling services deliver continuous, high-quality
                  core samples that are essential for accurate geological and
                  structural analysis. With advanced drilling technology and
                  highly skilled crews, we achieve excellent core recovery and
                  precision across a wide range of ground conditions. We support
                  advanced mineral exploration, feasibility studies, and
                  geotechnical investigations, ensuring reliable results even in
                  complex and challenging formations. Through strict quality
                  control, careful core handling, and efficient field
                  operations, we provide dependable geological data that
                  strengthens decision-making and enhances overall project
                  outcomes.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <HSEPolicySection />

      {/* ─── CONSTRUCTION & SOLAR – Dark Hero Blocks ──────────── */}

      {[constructionService, solarService].map((service) => {
        const headlines = SERVICE_HEADLINES[service.id];
        return (
          <section
            key={service.id}
            id={service.id === "solar" ? "solar-energy" : service.id}
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
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <ScrollReveal animation="fadeUp">
                      <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-2">
                        <span className="w-8 h-px bg-industrial-gold" />
                        Services
                      </span>
                    </ScrollReveal>

                    <ScrollReveal animation="fadeUp" delay={0.1}>
                      <h2 className="font-display text-3xl md:text-4xl  font-light text-off-white leading-[2.5rem] mb-3">
                        {headlines.headline}
                      </h2>
                    </ScrollReveal>
                  </div>

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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2 text-sm text-light-gray"
                        >
                          <div className="-mt-0.5 flex-shrink-0">
                            <GoldDot size="sm" />
                          </div>
                          <span className="leading-tight">{feature}</span>
                        </div>
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
              <div>
                <ScrollReveal animation="fadeUp">
                  <span className="inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-industrial-gold mb-2">
                    <span className="w-8 h-px bg-industrial-gold" />
                    Why Choose Us
                  </span>
                </ScrollReveal>

                <ScrollReveal animation="fadeUp" delay={0.1}>
                  <h2 className="font-display text-3xl md:text-4xl  font-light text-deep-navy leading-[2.5rem] mb-3">
                    TRUSTED EXCELLENCE
                  </h2>
                </ScrollReveal>
              </div>

              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="text-steel-blue leading-relaxed">
                  We have assembled a world class team with experience in the
                  Nigerian terrain. We own our own drill rigs, geophysics
                  equipment and in-house lab, ensuring complete control over
                  quality and timelines.
                </p>
              </ScrollReveal>

              {/* <div className="h-px bg-steel-blue/20" />

              <ScrollReveal animation="fadeUp" delay={0.2}>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "In-House Laboratory",
                    "World Class Team",
                    "JORC & N143-101 Reporting",
                    "COREN-Registered Engineers",
                    "Competent mining technicians (Local and International)",
                    "Government & Private Clients",
                    "Nigerian Electricity Management services Agency (NEMSA)",
                    "Geochemistry Analysis",
                  ].map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-steel-blue">
                      <GoldDot size="sm" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal> */}

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
              <div className="grid grid-cols-1 gap-4">
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
          </div>
        </div>
      </section>
    </>
  );
}
