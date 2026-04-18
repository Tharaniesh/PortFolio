import { Suspense, lazy, useState } from 'react';
import { AnimatedCursor } from './components/AnimatedCursor';
import { Preloader } from './components/Preloader';
import { ScrollProgress } from './components/ScrollProgress';
import { NavBar } from './components/layout/NavBar';
import { SectionShell } from './components/layout/SectionShell';
import { SiteFooter } from './components/layout/SiteFooter';
import { HeroSection } from './sections/HeroSection';

const AboutSection = lazy(() => import('./sections/AboutSection'));
const SkillsSection = lazy(() => import('./sections/SkillsSection'));
const ProjectsSection = lazy(() => import('./sections/ProjectsSection'));
const ModelPreviewSection = lazy(() => import('./sections/ModelPreviewSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <ScrollProgress />
      <AnimatedCursor />
      <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
        <div className="noise-overlay" />
        <NavBar />
        <HeroSection />

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-28 px-4 pb-24 sm:px-6 lg:px-8">
          <Suspense fallback={null}>
            <SectionShell
              id="about"
              index="01"
              title="A multidisciplinary practice built around visual clarity and interactive depth."
              description="From interface systems to product presentation, the work is shaped to feel deliberate, modern, and technically grounded."
            >
              <AboutSection />
            </SectionShell>

            <SectionShell
              id="skills"
              index="02"
              title="Capabilities curated for premium digital work."
              description="The toolkit is intentionally grouped to reflect how design, frontend craft, and interactive systems come together in real projects."
            >
              <SkillsSection />
            </SectionShell>

            <SectionShell
              id="projects"
              index="03"
              title="Selected work with stronger outcomes, structure, and visual presence."
              description="A focused showcase spanning product concepts, packaging systems, recommendation logic, and immersive portfolio design."
              introClassName="lg:max-w-[25rem]"
              contentClassName="xl:-ml-8"
              className="[&>div]:xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.7fr)]"
            >
              <ProjectsSection />
            </SectionShell>

            <SectionShell
              id="preview"
              index="04"
              title="3D Preview"
              description="Interactive model showcase from my Blender work"
            >
              <ModelPreviewSection />
            </SectionShell>

            <SectionShell
              id="contact"
              index="05"
              title="Let's build something with a clearer point of view."
              description="For collaborations, freelance work, or concept-led builds, the portfolio is set up as a direct starting point."
            >
              <ContactSection />
            </SectionShell>
          </Suspense>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}

export default App;
