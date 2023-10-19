import ProjectCard from './ProjectCard'

import { PROJECTS } from '../../consts'

const Projects = () => {
  return (
    <div className='grid grid-cols-1 gap-6 text-sm'>
      {PROJECTS.map((project, idx) => {
        return (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
            status={project.status}
          />
        )
      })}
    </div>
  )
}

export default Projects
