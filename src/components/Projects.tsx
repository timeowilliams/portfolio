import ProjectCard from '../components/ProjectCard'

import { PROJECTS } from '../consts'

const Projects = () => {
  return (
    <div className='pt-4 flex flex-col space-y-4 w-full'>
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
