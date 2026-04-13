import { motion } from 'framer-motion';
import type { Project } from '../../data/projects';
import { ButtonLink } from './ButtonLink';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/65 p-6 shadow-[0_18px_60px_rgba(2,6,23,0.4)] transition duration-500 sm:p-7"
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80 transition duration-500 group-hover:opacity-100`} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative space-y-6">
        <div className="space-y-3">
          <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-200/80">
            {project.category}
          </span>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
            <p className="max-w-2xl text-sm leading-7 text-slate-300">{project.description}</p>
            <p className="max-w-2xl text-sm leading-7 text-slate-400">{project.outcome}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs tracking-[0.18em] text-slate-200/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.actions?.length ? (
          <div className="flex flex-wrap gap-3">
            {project.actions.map((action) => (
              <ButtonLink
                key={`${project.title}-${action.label}`}
                href={action.href}
                variant={action.variant ?? 'secondary'}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noreferrer' : undefined}
              >
                {action.label}
              </ButtonLink>
            ))}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
