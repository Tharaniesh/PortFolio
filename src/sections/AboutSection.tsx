import { Reveal } from '../components/motion/Reveal';

const principles = [
  'Design decisions grounded in structure, clarity, and presentation quality.',
  'Frontend implementation that protects polish across desktop and mobile.',
  'Interactive visuals that support the story instead of distracting from it.'
];

function AboutSection() {
  return (
    <div className="grid gap-5">
      <Reveal className="surface-panel rounded-[2rem] p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="space-y-5">
            <p className="text-lg leading-8 text-slate-200 sm:text-xl">
              I work across UI design, frontend development, product communication, and interactive visuals to create
              digital experiences that feel refined from both a design and engineering perspective.
            </p>
            <p className="max-w-3xl text-base leading-8 text-slate-300">
              My approach is multidisciplinary by default. I care about how information is structured, how motion
              shapes perception, and how visual systems turn a layout into something more memorable and product-ready.
              Whether the output is a website concept, a packaging system, or an interactive portfolio, the goal is the
              same: build experiences with stronger identity, cleaner hierarchy, and purposeful execution.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/70">Working principles</p>
            <div className="mt-4 space-y-4">
              {principles.map((principle, index) => (
                <div key={principle} className="flex gap-4">
                  <span className="mt-1 text-sm text-cyan-200/70">0{index + 1}</span>
                  <p className="text-sm leading-7 text-slate-300">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default AboutSection;
