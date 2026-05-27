import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projects from '../../data/projects.json';
import ProjectCard from '../section/ProjectCard';
import { Badge } from '../ui/badge'
import { Button } from '../ui/button';
import {faArrowAltCircleUp, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <main className='col-span-5 row-span-6 p-2'>

      {/* about me */}
      <section className='grid grid-col-6 grid-flow-col gap-3 mb-3 h-[80vh]'>
        <div className='col-span-3'>
          <h1 className='text-4xl text-center'>Nguyễn Viết Hưng</h1>
          <h2 className='text-xl text-center'>Software Developer</h2>
          <img src='./male-programmer-svgrepo-com.svg' alt='programmer icon introduction' width={500} height={1200}/>
        </div>
        <div className='col-span-3 text-center flex flex-col justify-center gap-5'>
          <p className='text-xl'>Glad you made it! Consider this my digital showroom—a mix of passion projects, problem-solving, and clean interfaces. Keep scrolling to see what's under the hood.</p>
          <FontAwesomeIcon icon={faArrowDown} size='1x' className='mx-auto hover:text-white cursor-pointer' onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          })}/>
        </div>
      </section>
      {/* about me */}

      {/* skill set overview */}
      <section className='grid grid-col-2 grid-flow-col px-20 py-5'>
        <div>
          Technologies I mainly used for building personal projects
          <ul>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/MongoDB.png' width={20} height={20} />Mongodb</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/Express.png' width={20} height={20} />Expressjs</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/React.png' width={20} height={20} />React</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/Node.js.png' width={20} height={20} />Nodejs</Badge></li>
          </ul>
        </div>
        <div>
          Other technogies
          <ul>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/Spring.png' width={20} height={20} />Spring Boot</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/NET core.png' width={20} height={20} />ASP.Net Core</Badge></li>
          </ul>
        </div>
      </section>
      {/* skill set overview */}

      {/* overview project section */}
      <section className='my-2 '>
        <h1 className='text-2xl font-bold mt-6 w-screen text-center'>PROJECT OVERVIEW</h1>
        {/* latest project */}
        <h1 className='text-2xl mt-6 w-screen text-center'>Latest project</h1>
        {projects.length > 0 ? 
          <ProjectCard projectName={projects[0].projectName} 
          projectDescription={projects[0].projectDescription} 
          projectImageURL={projects[0].projectImageURL} 
          projectTechnologies={projects[0].projectTechnologies} />
         : "Loading"}
        {/* latest project */}

        {/* past projects */}
        {projects.length > 1 && <h1 className='text-xl w-screen text-center'>Past projects</h1>}
        {projects[1] && 
        <ProjectCard projectName={projects[1].projectName} 
          projectDescription={projects[1].projectDescription} 
          projectImageURL={projects[1].projectImageURL} 
          projectTechnologies={projects[1].projectTechnologies} />
        }
        {projects[2] && 
        <ProjectCard projectName={projects[2].projectName} 
          projectDescription={projects[2].projectDescription} 
          projectImageURL={projects[2].projectImageURL} 
          projectTechnologies={projects[2].projectTechnologies} />
        }
        {projects.length > 0 && 
        <Link to={"/projects"}><Button variant={"link"} className='w-screen mx-auto hover:text-blue-500 cursor-pointer'>See more</Button></Link>
        }
          {/* past projects */}
      </section>
      {/* overview project section */}

        {/* extra elements */}
          <FontAwesomeIcon icon={faArrowAltCircleUp} className='text-blue-500 hover:text-white cursor-pointer fixed bottom-20 right-6' 
          size='2x' 
          onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth'
          })}
          />
        
    </main>
  )
}

export default HomePage