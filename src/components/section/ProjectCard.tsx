import { Badge } from '../ui/badge'
import type { ProjectCard } from '@/types/ProjectCard'

const ProjectCard = (props : ProjectCard) => {
  return (
    <article>
          <div className='flex flex-row justify-between px-20 py-5'>
            <img src={props.projectImageURL} alt='projectImage' width={500} height={300}/>
            <div className='px-10 py-2'>
            <h2><span className='text-lg font-semibold'>Project name</span>: {props.projectName}</h2>
            <p><span className='text-lg font-semibold'>Description</span>: {props.projectDescription}</p>
            <h3><span className='text-lg font-semibold'>Technologies used</span>:
                {props.projectTechnologies.length > 0 ? 
                    <ul className='flex flex-row'>
                        {props.projectTechnologies.map((tech, index) => (
                            <li key={index+1}><Badge variant={"outline"}><img src={tech.imageUrl} width={20} height={20} />{tech.name}</Badge></li>
                        ))}
                    </ul> : "N/A"
                }
            </h3>
            <ul>
              <li></li>
            </ul>
            </div>
          </div>
        </article>
  )
}

export default ProjectCard