import { Badge } from '../ui/badge'
import type { ProjectCardType } from '@/types/ProjectCard'
// import Zoom from 'react-medium-image-zoom'

const ProjectCard = (props: ProjectCardType) => {
  return (
    <article>
      <div className='flex flex-col xl:flex-row justify-between px-5 lg:px-20 py-5'>
        {/* <Zoom> */}
          <img src={props.projectImageURL} alt='projectImage' className='rounded shadow-2xl w-full lg:w-[30vw]'/>
        {/* </Zoom> */}
        <div className='lg:px-10 py-2'>
          <h2><span className='text-md font-semibold'>PROJECT NAME</span>: {props.projectName}</h2>
          <p><span className='text-md font-semibold'>DESCRIPTION</span>: {props.projectDescription}</p>
          <h3><span className='text-md font-semibold'>TECHNOLOGIES</span>:
            {props.projectTechnologies.length > 0 ?
              <ul className='flex flex-row flex-wrap'>
                {props.projectTechnologies.map((tech, index) => (
                  <li key={index + 1}><Badge variant={"outline"}><img src={tech.imageUrl} width={20} height={20} />{tech.name}</Badge></li>
                ))}
              </ul> : "N/A"
            }
          </h3>
          {props.accessURL.length > 0 && <>
            <h3 className='text-md font-semibold'>CHECK OUT HERE: </h3>
            <ul>
              {props.accessURL.map((item, index) =>
                <li key={index + 1}><a href={item.url} target='_blank' rel='noopener noreferrer'><Badge variant={"outline"}><img src={item.imageURL} width={20} height={20} />{item.name}</Badge></a></li>
              )}
            </ul>
          </>}

        </div>
      </div>
    </article>
  )
}

export default ProjectCard