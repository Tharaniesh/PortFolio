import { Reveal } from '../components/motion/Reveal';
import { ProjectCard } from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

function ProjectsSection() {
  return (
    <Reveal className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-2 xl:gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Reveal>
  );
}

export default ProjectsSection;
