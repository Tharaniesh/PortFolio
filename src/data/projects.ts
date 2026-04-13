export type ProjectAction = {
  label: string;
  href: string;
  external?: boolean;
  variant?: 'primary' | 'secondary';
};

export type Project = {
  title: string;
  category: string;
  description: string;
  outcome: string;
  tags: string[];
  accent: string;
  actions?: ProjectAction[];
};

export const projects: Project[] = [
  {
    title: 'AstraForge AI',
    category: 'Recommendation Engine',
    description:
      'A rule-driven recommendation engine designed to generate optimized Genshin Impact teams using graph-based relationships, synergy scoring, and build optimization.',
    outcome:
      'Positioned as a product-grade decision tool with a clearer system narrative, interactive logic, and player-facing utility.',
    tags: ['React', 'Recommendation Logic', 'UI Systems', 'Data Modeling'],
    accent: 'from-sky-400/30 via-cyan-300/10 to-transparent',
    actions: [
      {
        label: 'Live Demo',
        href: 'https://astra-forge-ai.vercel.app',
        external: true,
        variant: 'primary'
      },
      {
        label: 'Request Case Study',
        href: '#contact',
        variant: 'secondary'
      }
    ]
  },
  {
    title: 'PCB Product Packaging & Spec Sheet Design',
    category: 'Packaging / Product Communication',
    description:
      'Premium packaging and technical spec sheet designed for a PCB-based product, focusing on clean branding, structured information hierarchy, and manufacturing-ready output.',
    outcome:
      'Built to communicate technical precision without losing product clarity, helping brand presentation and production-readiness work together.',
    tags: ['Packaging Design', 'Spec Sheets', 'Print Layout', 'Information Hierarchy'],
    accent: 'from-amber-300/25 via-orange-200/10 to-transparent',
    actions: [
      {
        label: 'Request Case Study',
        href: '#contact',
        variant: 'secondary'
      }
    ]
  },
  {
    title: 'SST Technology Website Concept',
    category: 'Website Concept / Brand Interface',
    description:
      'A modern, product-focused website concept designed to represent a technology brand with a clean structure, strong visual identity, and scalable layout.',
    outcome:
      'Framed as a modern interface system that balances product storytelling, trust-building, and future-ready extensibility.',
    tags: ['UI Design', 'Web Concept', 'Brand Systems', 'Responsive Layout'],
    accent: 'from-violet-400/25 via-fuchsia-200/10 to-transparent',
    actions: [
      {
        label: 'Discuss Project',
        href: '#contact',
        variant: 'secondary'
      }
    ]
  },
  {
    title: 'Interactive Portfolio with Three.js',
    category: 'Creative Development',
    description:
      'A personal portfolio built with React and Three.js, combining motion, 3D interaction, and modern UI design to create an immersive user experience.',
    outcome:
      'Designed as a premium self-directed build that demonstrates content hierarchy, motion restraint, and a more intentional creative-tech identity.',
    tags: ['React', 'TypeScript', 'Three.js', 'Motion Design'],
    accent: 'from-emerald-300/20 via-cyan-200/10 to-transparent',
    actions: [
      {
        label: 'Explore This Site',
        href: '#home',
        variant: 'primary'
      }
    ]
  }
];
