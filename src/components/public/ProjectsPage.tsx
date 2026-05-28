import projects from '../../data/projects.json'
import ProjectCard from '../section/ProjectCard'

const ProjectsPage = () => {
  return (
    <article className='col-span-5 row-span-6 p-2'>
      {projects.length > 0 ? 
      projects.map(project => 
         <ProjectCard projectName={project.projectName} 
          projectDescription={project.projectDescription} 
          projectImageURL={project.projectImageURL} 
          projectTechnologies={project.projectTechnologies} 
          accessURL={project.accessURL || []}
          />
      ) : 
      <h1>No projects yet</h1>
      }
     
    </article>
  )
}

export default ProjectsPage