import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projects from '../../data/projects.json';
import ProjectCard from '../section/ProjectCard';
import { Badge } from '../ui/badge'
import { Button } from '../ui/button';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router';
import ScrollToTopButton from '../ui/ScrollToTopButton';

const HomePage = () => {
  console.log(window.URL);
  return (
    <main className='col-span-5 p-2'>

      {/* about me */}
      <section className='grid grid-col-6 grid-flow-col gap-3 mb-3 h-[80vh]'>
        <div className='col-span-3 flex flex-col justify-center'>
          <h1 className='text-xl lg:text-4xl text-center stylizedName'>Nguyễn Viết Hưng</h1>
          <h2 className='text-md lg:text-xl text-center stylizedTitle'>Software Developer</h2>
          <img src='./hungnv-portfolio/male-programmer-svgrepo-com.svg' alt='programmer icon introduction' className='lg:w-[40vw] lg:h-[60vh]'/>
        </div>
        <div className='col-span-3 text-center flex flex-col justify-center gap-5'>
          <p className='text-md lg:text-xl'>Glad you made it! Consider this my digital showroom—a mix of passion projects, problem-solving, and clean interfaces. Keep scrolling to see what's under the hood.</p>
          <FontAwesomeIcon icon={faArrowDown} size='1x' className='mx-auto hover:text-white cursor-pointer' onClick={() => window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          })}/>
        </div>
      </section>
      {/* about me */}

      {/* skill set overview */}
      <section className='flex flex-col px-5 py-5 lg:px-20'>
        <div>
          <p className="text-md lg:text-lg">Technologies I mainly used for building personal projects</p>
          <ul className="flex flex-row flex-wrap gap-2">
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/MongoDB.png' width={20} height={20} />Mongodb</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/Express.png' width={20} height={20} />Expressjs</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/React.png' width={20} height={20} />React</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/Node.js.png' width={20} height={20} />Nodejs</Badge></li>
          </ul>
        </div>
        <div>
          <p className="text-md lg:text-lg">Other technologies</p>
          <ul className="flex flex-row flex-wrap gap-2">
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/Spring.png' width={20} height={20} />Spring Boot</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/NET core.png' width={20} height={20} />ASP.Net Core</Badge></li>
          </ul>
        </div>
      </section>
      {/* skill set overview */}

      {/* overview project section */}
      <section className='my-2 '>
        <h1 className='text-2xl font-bold mt-6 text-center sectionTitle'>PROJECT OVERVIEW</h1>
        {/* latest project */}
        <h1 className='text-2xl mt-6 text-center'>Latest project</h1>
        {projects.length > 0 ? 
          <ProjectCard projectName={projects[0].projectName} 
          projectDescription={projects[0].projectDescription} 
          projectImageURL={projects[0].projectImageURL} 
          projectTechnologies={projects[0].projectTechnologies}
          accessURL={projects[0].accessURL || []}
          />
         : "Loading"}
        {/* latest project */}

        {/* past projects */}
        {projects.length > 1 && <h1 className='text-xl text-center'>Past projects</h1>}
        {projects[1] && 
        <ProjectCard projectName={projects[1].projectName} 
          projectDescription={projects[1].projectDescription} 
          projectImageURL={projects[1].projectImageURL} 
          projectTechnologies={projects[1].projectTechnologies} 
          accessURL={projects[1].accessURL || []}
          />
        }
        {projects[2] && 
        <ProjectCard projectName={projects[2].projectName} 
          projectDescription={projects[2].projectDescription} 
          projectImageURL={projects[2].projectImageURL} 
          projectTechnologies={projects[2].projectTechnologies} 
          accessURL={projects[2].accessURL || []}
          />
        }
        {projects.length > 0 && 
        <Link to={"/projects"}><Button variant={"link"} className='w-full mx-auto hover:text-blue-500 cursor-pointer' onClick={() => window.scroll({top: 0, behavior: 'smooth'})}>See more</Button></Link>
        }
          {/* past projects */}
      </section>
      {/* overview project section */}

        {/* extra elements */}
        <ScrollToTopButton />
        
    </main>
  )
}

export default HomePage