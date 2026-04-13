import { motion } from 'framer-motion';
import type { SkillGroup } from '../../data/skills';

type SkillGroupCardProps = {
  group: SkillGroup;
  index: number;
};

export function SkillGroupCard({ group, index }: SkillGroupCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="surface-panel group rounded-[1.8rem] p-6 transition duration-300"
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-white">{group.title}</p>
          <p className="text-sm leading-6 text-slate-300">{group.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs tracking-[0.16em] text-slate-200/90 transition duration-300 group-hover:border-cyan-300/20 group-hover:bg-cyan-300/8"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
