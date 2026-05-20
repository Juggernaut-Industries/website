import { HeroFlow, HeroIntroPanel } from '@/components/sections/hero-flow';
import { IntroBlend } from '@/components/sections/intro-blend';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Full viewport, stacked heading, floating card, stats */}
      <HeroFlow />

      {/* Hero Intro - Welcome copy and stats */}
      <HeroIntroPanel />

      {/* In tro Section - Bracket text, thumbnails, brand divider */}
      <IntroBlend />

      {/* Services Section - Asymmetric layout with accordion */}
      {/* <ServicesAsymmetric /> */}

      {/* Projects Section - Full screen carousel with project overlays */}
      {/* <ProjectsCarousel /> */}

      {/* HSE Policy Section */}
      {/* <HSEPolicySection /> */}

      {/* News Section - Latest updates with glassmorphism cards */}
      {/* <NewsSection limit={3} showFeatured={true} /> */}

      {/* CTA Section - Contact form, flows into footer */}

    </>
  );
}
