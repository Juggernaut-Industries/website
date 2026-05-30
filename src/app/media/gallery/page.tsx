'use client';

import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { PageHeader } from '@/components/ui/page-header';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { useState } from 'react';
import { X } from 'lucide-react';
import { contentImages } from '@/assets/content';

type GalleryImage = {
  id: number;
  src: string | StaticImageData;
  title: string;
  category: string;
};

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Mining & Exploration',
    'Agriculture',
    'Construction',
    'Solar & Renewable Energy',
    'Events',
    'Company Culture',
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: contentImages.mining1,
      title: 'Active Mining Site',
      category: 'Mining & Exploration',
    },
    {
      id: 2,
      src: contentImages.mining2,
      title: 'Mineral Exploration',
      category: 'Mining & Exploration',
    },
    {
      id: 3,
      src: contentImages.mining3,
      title: 'Geological Survey',
      category: 'Mining & Exploration',
    },
    {
      id: 16,
      src: contentImages.drilling2,
      title: 'Advanced Drilling Operations',
      category: 'Mining & Exploration',
    },
    {
      id: 17,
      src: contentImages.mineral,
      title: 'High-Grade Ore Sample',
      category: 'Mining & Exploration',
    },
    {
      id: 18,
      src: contentImages.mineral2,
      title: 'Mineral Deposit Analysis',
      category: 'Mining & Exploration',
    },
    {
      id: 19,
      src: contentImages.mineral3,
      title: 'Quality Core Samples',
      category: 'Mining & Exploration',
    },
    {
      id: 22,
      src: contentImages.excavatorSite,
      title: 'Excavation Site Operations',
      category: 'Mining & Exploration',
    },
    {
      id: 23,
      src: contentImages.survey3,
      title: 'Technical Site Assessment',
      category: 'Mining & Exploration',
    },
    {
      id: 24,
      src: contentImages.survey4,
      title: 'Resource Definition Program',
      category: 'Mining & Exploration',
    },
    {
      id: 25,
      src: contentImages.survey5,
      title: 'Geological Mapping',
      category: 'Mining & Exploration',
    },
    {
      id: 26,
      src: contentImages.survey6,
      title: 'Exploration Site Activity',
      category: 'Mining & Exploration',
    },
    {
      id: 27,
      src: contentImages.survey7,
      title: 'Field Data Collection',
      category: 'Mining & Exploration',
    },
    {
      id: 28,
      src: contentImages.survey8,
      title: 'Site Investigation',
      category: 'Mining & Exploration',
    },
    {
      id: 29,
      src: contentImages.survey9,
      title: 'Exploration Milestone',
      category: 'Mining & Exploration',
    },
    {
      id: 7,
      src: contentImages.construction,
      title: 'Infrastructure Development',
      category: 'Construction',
    },
    {
      id: 11,
      src: contentImages.event1,
      title: 'Executive Summit',
      category: 'Events',
    },
    {
      id: 12,
      src: contentImages.event2,
      title: 'Strategic Partnership',
      category: 'Events',
    },
    {
      id: 13,
      src: contentImages.event3,
      title: 'Community Engagement',
      category: 'Events',
    },
    {
      id: 14,
      src: contentImages.event4,
      title: 'Technical Workshop',
      category: 'Events',
    },
    {
      id: 33,
      src: contentImages.event7,
      title: 'Strategic Planning Session',
      category: 'Events',
    },
    {
      id: 34,
      src: contentImages.event8,
      title: 'Corporate Excellence Summit',
      category: 'Events',
    },
    {
      id: 35,
      src: contentImages.event9,
      title: 'Team Building Event',
      category: 'Events',
    },
    {
      id: 36,
      src: contentImages.event10,
      title: 'Annual General Meeting',
      category: 'Events',
    },
    {
      id: 38,
      src: contentImages.event12,
      title: 'Operational Strategy Meeting',
      category: 'Events',
    },
    {
      id: 40,
      src: contentImages.event14,
      title: 'Project Stakeholder Meeting',
      category: 'Events',
    },
    {
      id: 41,
      src: contentImages.event15,
      title: 'Team Leadership Forum',
      category: 'Events',
    },
    {
      id: 42,
      src: contentImages.event16,
      title: 'Corporate Social Responsibility',
      category: 'Events',
    },
    {
      id: 43,
      src: contentImages.event17,
      title: 'Partners and Investors Meet',
      category: 'Events',
    },
    {
      id: 44,
      src: contentImages.conference,
      title: 'Industry Conference',
      category: 'Events',
    },
    {
      id: 15,
      src: contentImages.fieldOperationsTeam,
      title: 'Field Operations Team',
      category: 'Company Culture',
    },
  ];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="PHOTO GALLERY"
        subtitle="Explore our projects and operations across Nigeria through these captivating images showcasing our commitment to excellence."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Gallery', href: '/media/gallery' },
        ]}
        backgroundImage={contentImages.conference}
      />

      {/* Gallery Section */}
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

        <div className="container-jil relative z-10">
          {/* Category Filter */}
          {/* <div className="mb-12">
            <ScrollReveal animation="fadeUp">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 font-heading text-xs tracking-[0.1em] uppercase rounded-xl transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-industrial-gold text-near-black shadow-lg'
                        : 'bg-white/40 backdrop-blur-xl border border-white/60 text-steel-blue hover:border-industrial-gold/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div> */}

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <ScrollReveal key={image.id} animation="fadeUp" delay={0.1 * (index % 3)}>
                <div
                  className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-lg"
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-deep-navy/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-off-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-6xl w-full aspect-video">
            <Image
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />

          </div>
        </div>
      )}
    </>
  );
}
