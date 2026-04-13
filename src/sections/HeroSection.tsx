import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { MetricCard } from '../components/ui/MetricCard';
import { ButtonLink } from '../components/ui/ButtonLink';
import { heroMetrics } from '../data/site';
import { useTypingText } from '../hooks/useTypingText';

const HeroExperience = lazy(() =>
  import('../components/three/HeroExperience').then((module) => ({ default: module.HeroExperience }))
);

export function HeroSection() {
  const typed = useTypingText('Creative Developer, Designer, and Interactive Experience Builder', 28, 450);

  return (
    <header id="home" className="relative isolate overflow-hidden pt-24">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(192,132,252,0.16),transparent_24%),linear-gradient(180deg,#020617_0%,#020817_35%,#020617_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />

      <div className="mx-auto grid min-h-screen w-full max-w-6xl gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(440px,0.95fr)] lg:items-center lg:px-8">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-cyan-100/80 backdrop-blur-xl"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.85)]" />
            Creative-tech portfolio v2
          </motion.div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.75, ease: 'easeOut' }}
              className="text-sm uppercase tracking-[0.32em] text-slate-400"
            >
              Tharaniesh J
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Designing digital experiences through code, motion, and visual systems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.8, ease: 'easeOut' }}
              className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              I build premium interfaces that combine UI design, frontend development, and interactive storytelling.
              My work focuses on clarity, motion, and spatial detail so digital products feel intentional, polished,
              and memorable.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32, duration: 0.8 }}
              className="min-h-7 text-sm uppercase tracking-[0.26em] text-cyan-100/75 sm:text-base"
            >
              {typed}
              <span className="ml-2 inline-block h-5 w-px animate-pulse bg-cyan-300/80 align-middle" aria-hidden="true" />
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="flex flex-wrap gap-3"
          >
            <ButtonLink href="#projects" variant="primary">
              View Selected Work
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Start a Conversation
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {heroMetrics.map((metric) => (
              <MetricCard key={metric.label} value={metric.value} label={metric.label} />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[520px] sm:h-[600px]"
        >
          <div className="absolute -left-10 top-8 hidden h-24 w-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl lg:block" />
          <div className="absolute -right-4 bottom-10 hidden h-36 w-36 rounded-full border border-cyan-300/10 bg-cyan-300/5 backdrop-blur-xl lg:block" />
          <Suspense fallback={<div className="h-full w-full rounded-[2rem] border border-white/10 bg-slate-950/60" />}>
            <HeroExperience />
          </Suspense>
          <div className="pointer-events-none absolute inset-x-6 bottom-6 rounded-[1.5rem] border border-white/10 bg-slate-950/45 px-5 py-4 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Current focus</p>
            <p className="mt-2 text-sm leading-7 text-slate-200">
              Experience-led interfaces, motion systems, and product presentation with a sharper visual point of view.
            </p>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
