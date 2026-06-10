'use client';

import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { PageHeader } from '@/components/ui/page-header';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { useState } from 'react';
import { X } from 'lucide-react';
import { contentImages } from '@/assets';

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
      src: contentImages.mediaGallery22,
      title: 'Active Mining Site',
      category: 'Mining & Exploration',
    },
    {
      id: 49,
      src: contentImages.mediaGallery1,
      title: 'Media Gallery 1',
      category: 'Mining & Exploration',
    },
    {
      id: 11,
      src: contentImages.mediaGallery40,
      title: 'Executive Summit',
      category: 'Events',
    },
    {
      id: 25,
      src: contentImages.mediaGallery31,
      title: 'Geological Mapping',
      category: 'Mining & Exploration',
    },
    {
      id: 50,
      src: contentImages.mediaGallery2,
      title: 'Media Gallery 2',
      category: 'Mining & Exploration',
    },
    {
      id: 2,
      src: contentImages.mediaGallery23,
      title: 'Mineral Exploration',
      category: 'Mining & Exploration',
    },
    {
      id: 34,
      src: contentImages.mediaGallery45,
      title: 'Corporate Excellence Summit',
      category: 'Events',
    },
    {
      id: 51,
      src: contentImages.mediaGallery3,
      title: 'Media Gallery 3',
      category: 'Mining & Exploration',
    },
    {
      id: 17,
      src: contentImages.mediaGallery26,
      title: 'High-Grade Ore Sample',
      category: 'Mining & Exploration',
    },
    {
      id: 58,
      src: contentImages.mediaGallery10,
      title: 'Media Gallery 10',
      category: 'Mining & Exploration',
    },
    {
      id: 7,
      src: contentImages.mediaGallery39,
      title: 'Infrastructure Development',
      category: 'Construction',
    },
    {
      id: 52,
      src: contentImages.mediaGallery4,
      title: 'Media Gallery 4',
      category: 'Mining & Exploration',
    },
    {
      id: 24,
      src: contentImages.mediaGallery30,
      title: 'Resource Definition Program',
      category: 'Mining & Exploration',
    },
    {
      id: 41,
      src: contentImages.mediaGallery49,
      title: 'Team Leadership Forum',
      category: 'Events',
    },
    {
      id: 16,
      src: contentImages.mediaGallery25,
      title: 'Advanced Drilling Operations',
      category: 'Mining & Exploration',
    },
    {
      id: 59,
      src: contentImages.mediaGallery11,
      title: 'Media Gallery 11',
      category: 'Mining & Exploration',
    },
    {
      id: 13,
      src: contentImages.mediaGallery42,
      title: 'Community Engagement',
      category: 'Events',
    },
    {
      id: 27,
      src: contentImages.mediaGallery33,
      title: 'Field Data Collection',
      category: 'Mining & Exploration',
    },
    {
      id: 44,
      src: contentImages.mediaGallery52,
      title: 'Industry Conference',
      category: 'Events',
    },
    {
      id: 46,
      src: contentImages.mediaGallery37,
      title: 'Core Sample Handling',
      category: 'Mining & Exploration',
    },
    {
      id: 60,
      src: contentImages.mediaGallery12,
      title: 'Media Gallery 12',
      category: 'Mining & Exploration',
    },
    {
      id: 3,
      src: contentImages.mediaGallery24,
      title: 'Geological Survey',
      category: 'Mining & Exploration',
    },
    {
      id: 56,
      src: contentImages.mediaGallery8,
      title: 'Media Gallery 8',
      category: 'Mining & Exploration',
    },
    {
      id: 35,
      src: contentImages.mediaGallery46,
      title: 'Team Building Event',
      category: 'Events',
    },
    {
      id: 28,
      src: contentImages.mediaGallery34,
      title: 'Site Investigation',
      category: 'Mining & Exploration',
    },
    {
      id: 57,
      src: contentImages.mediaGallery9,
      title: 'Media Gallery 9',
      category: 'Mining & Exploration',
    },
    {
      id: 18,
      src: contentImages.mediaGallery27,
      title: 'Mineral Deposit Analysis',
      category: 'Mining & Exploration',
    },
    {
      id: 33,
      src: contentImages.mediaGallery44,
      title: 'Strategic Planning Session',
      category: 'Events',
    },
    {
      id: 61,
      src: contentImages.mediaGallery13,
      title: 'Media Gallery 13',
      category: 'Mining & Exploration',
    },
    {
      id: 45,
      src: contentImages.mediaGallery36,
      title: 'Active Drilling Operations',
      category: 'Mining & Exploration',
    },
    {
      id: 62,
      src: contentImages.mediaGallery14,
      title: 'Media Gallery 14',
      category: 'Mining & Exploration',
    },
    {
      id: 19,
      src: contentImages.mediaGallery28,
      title: 'Quality Core Samples',
      category: 'Mining & Exploration',
    },
    {
      id: 63,
      src: contentImages.mediaGallery15,
      title: 'Media Gallery 15',
      category: 'Mining & Exploration',
    },
    {
      id: 42,
      src: contentImages.mediaGallery50,
      title: 'Corporate Social Responsibility',
      category: 'Events',
    },
    {
      id: 29,
      src: contentImages.mediaGallery35,
      title: 'Exploration Milestone',
      category: 'Mining & Exploration',
    },
    {
      id: 64,
      src: contentImages.mediaGallery16,
      title: 'Media Gallery 16',
      category: 'Mining & Exploration',
    },
    {
      id: 12,
      src: contentImages.mediaGallery41,
      title: 'Strategic Partnership',
      category: 'Events',
    },
    {
      id: 65,
      src: contentImages.mediaGallery17,
      title: 'Media Gallery 17',
      category: 'Mining & Exploration',
    },
    {
      id: 23,
      src: contentImages.mediaGallery29,
      title: 'Technical Site Assessment',
      category: 'Mining & Exploration',
    },
    {
      id: 66,
      src: contentImages.mediaGallery18,
      title: 'Media Gallery 18',
      category: 'Mining & Exploration',
    },
    {
      id: 38,
      src: contentImages.mediaGallery47,
      title: 'Operational Strategy Meeting',
      category: 'Events',
    },
    {
      id: 67,
      src: contentImages.mediaGallery19,
      title: 'Media Gallery 19',
      category: 'Mining & Exploration',
    },
    {
      id: 47,
      src: contentImages.mediaGallery38,
      title: 'Site Survey Marking',
      category: 'Mining & Exploration',
    },
    {
      id: 14,
      src: contentImages.mediaGallery43,
      title: 'Technical Workshop',
      category: 'Events',
    },
    {
      id: 68,
      src: contentImages.mediaGallery20,
      title: 'Media Gallery 20',
      category: 'Mining & Exploration',
    },
    {
      id: 40,
      src: contentImages.mediaGallery48,
      title: 'Project Stakeholder Meeting',
      category: 'Events',
    },
    {
      id: 43,
      src: contentImages.mediaGallery51,
      title: 'Partners and Investors Meet',
      category: 'Events',
    },
    {
      id: 15,
      src: contentImages.mediaGallery21,
      title: 'Field Operations Team',
      category: 'Company Culture',
    },
    {
      id: 26,
      src: contentImages.mediaGallery32,
      title: 'Exploration Site Activity',
      category: 'Mining & Exploration',
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
        backgroundImage={contentImages.mediaGallery52}
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
