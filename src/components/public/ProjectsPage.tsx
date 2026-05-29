import projects from '../../data/projects.json'
import ProjectCard from '../section/ProjectCard'

const ProjectsPage = () => {
  return (
    <main className='col-span-5 row-span-6 p-2'>
      <h1 className="text-md lg:text-2xl text-center mb-2 sectionTitle">Projects</h1>
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
     
    </main>
  )
}

export default ProjectsPage