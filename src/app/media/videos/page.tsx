"use client";

import { PageHeader } from "@/components/ui/page-header";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { contentImages, miningVideo2 } from "@/assets";

export default function VideosPage() {
  const videos = [
    {
      id: 1,
      src: miningVideo2,
      title: "Site Operations",
      category: "Mining & Exploration",
      description:
        "Real-time footage from our active project sites across the region.",
      type: "local",
    },
  ];

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="VIDEO GALLERY"
        subtitle="Watch our video collection showcasing projects, operations, and the impact we're making across Nigeria."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Videos", href: "/media/videos" },
        ]}
        backgroundImage={contentImages.conference}
      />

      {/* Videos Section */}
      <section className="relative py-14 overflow-hidden bg-off-white">
        {/* Background Pattern */}
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
          {/* Videos Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videos.map((video, index) => (
              <ScrollReveal
                key={video.id}
                animation="fadeUp"
                delay={0.1 * (index % 2)}
              >
                <div className="group rounded-xl overflow-hidden bg-white/40 backdrop-blur-xl border border-white/60 hover:border-industrial-gold/50 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  {/* Video Embed */}
                  <div className="relative aspect-video bg-black flex items-center justify-center">
                    {/** biome-ignore lint/a11y/useMediaCaption: <> */}
                    <video
                      src={video.src}
                      className="w-full h-full"
                      controls
                      poster={contentImages.mining1.src}
                    />
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <p className="font-heading text-xs tracking-[0.15em] uppercase text-industrial-gold mb-2">
                      {video.category}
                    </p>
                    <h3 className="font-heading text-lg tracking-[0.05em] text-deep-navy mb-3 group-hover:text-industrial-gold transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-steel-blue leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
