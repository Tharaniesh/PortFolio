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
      className="group relative flex h-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/65 p-5 shadow-[0_18px_60px_rgba(2,6,23,0.4)] transition duration-500 sm:p-6"
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80 transition duration-500 group-hover:opacity-100`} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative flex h-full flex-col gap-5">
        <div className="space-y-4">
          <span className="inline-flex max-w-full rounded-full border border-white/12 bg-white/6 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-200/80 sm:text-[11px]">
            {project.category}
          </span>

          <div className="space-y-2.5">
            <h3 className="max-w-[18ch] text-[1.8rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-[2rem]">
              {project.title}
            </h3>
            <div className="grid gap-3 text-sm leading-6 text-slate-300 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,0.95fr)]">
              <p>{project.description}</p>
              <p className="text-slate-400">{project.outcome}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-[11px] tracking-[0.16em] text-slate-200/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.actions?.length ? (
          <div className="mt-auto flex flex-wrap gap-2.5 pt-1">
            {project.actions.map((action) => (
              <ButtonLink
                key={`${project.title}-${action.label}`}
                href={action.href}
                variant={action.variant ?? 'secondary'}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noreferrer' : undefined}
                className="px-4 py-2.5 text-[13px]"
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
