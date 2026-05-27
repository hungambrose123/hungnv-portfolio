import React from 'react'
import { Badge } from '../ui/badge'

const HomePage = () => {
  return (
    <main className='col-span-5 row-span-6 p-2'>

      {/* about me */}
      <section className='grid grid-col-6 grid-flow-col gap-3 mb-3 h-[80vh]'>
        <div className='col-span-3'>
          <h1 className='text-4xl'>Nguyễn Viết Hưng</h1>
          <h2 className='text-xl text-center'>Software Developer</h2>
        </div>
        <div className='col-span-3 text-center px-50'>
          Hi, welcome to my portfolio. This is my showroom where I display my projects and my infos. If you are interested, please keep scrolling downward
        </div>
      </section>
      {/* about me */}

      {/* skill set overview */}
      <section className='grid grid-col-2 grid-flow-col'>
        <div>
          Technologies I mainly used to build personal projects
          <ul>
            <li><Badge variant={"outline"}><img src='./logo/MongoDB.png' width={20} height={20} />Mongodb</Badge></li>
            <li><Badge variant={"outline"}><img src='./logo/Express.png' width={20} height={20} />Expressjs</Badge></li>
            <li><Badge variant={"outline"}><img src='./logo/React.png' width={20} height={20} />React</Badge></li>
            <li><Badge variant={"outline"}><img src='./logo/Node.js.png' width={20} height={20} />Nodejs</Badge></li>
          </ul>
        </div>
        <div>
          Other technogies
          <ul>
            <li><Badge variant={"outline"}><img src='./logo/Spring.png' width={20} height={20} />Spring Boot</Badge></li>
            <li><Badge variant={"outline"}><img src='./logo/NET core.png' width={20} height={20} />ASP.Net Core</Badge></li>
          </ul>
        </div>
      </section>
      {/* skill set overview */}

      {/* latest project */}
      <section className='my-2'>
        <h1 className='text-2xl'>Projects overview</h1>
        <article className='grid grid-row-2'>
          <h1 className='text-xl'>Latest project</h1>
          <div className='flex flex-row justify-between px-20 py-5'>
            <img src='https://tse3.mm.bing.net/th/id/OIP.jVQuO5aDRs21VzuCWHsawwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' alt='latest project' width={500} height={300}/>
            <div className='px-10 py-2'>
            <h2>Project name: Portfolio website</h2>
            <p>Description: Specializing in building clean, responsive, and user-centric web applications. 
              Focused on translating design concepts into seamless digital experiences with smooth performance 
              and pixel-perfect execution. Explore my frontend toolkit and latest projects below.</p>
            <h3>Technologies used: <ul className='flex flex-row'>
            <li><Badge variant={"outline"}><img src='./logo/MongoDB.png' width={20} height={20} />Mongodb</Badge></li>
            <li><Badge variant={"outline"}><img src='./logo/Express.png' width={20} height={20} />Expressjs</Badge></li>
            <li><Badge variant={"outline"}><img src='./logo/React.png' width={20} height={20} />React</Badge></li>
            <li><Badge variant={"outline"}><img src='./logo/Node.js.png' width={20} height={20} />Nodejs</Badge></li>
          </ul></h3>
            <ul>
              <li></li>
            </ul>
            </div>
          </div>
          
        </article>
        {/* past projects */}
        <h1 className='text-xl'>Past projects</h1>
        <article>
          <div className='flex flex-row justify-between px-20 py-5'>
            <img src='https://tse3.mm.bing.net/th/id/OIP.jVQuO5aDRs21VzuCWHsawwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' alt='latest project' width={500} height={300}/>
            <div className='px-10 py-2'>
            <h2>Project name: Portfolio website</h2>
            <p>Description: Specializing in building clean, responsive, and user-centric web applications. 
              Focused on translating design concepts into seamless digital experiences with smooth performance 
              and pixel-perfect execution. Explore my frontend toolkit and latest projects below.</p>
            <h3>Technologies used: <ul className='flex flex-row'>
            <li><Badge variant={"outline"}><img src='./logo/MongoDB.png' width={20} height={20} />Mongodb</Badge></li>
            <li><Badge variant={"outline"}><img src='./logo/Express.png' width={20} height={20} />Expressjs</Badge></li>
            <li><Badge variant={"outline"}><img src='./logo/React.png' width={20} height={20} />React</Badge></li>
            <li><Badge variant={"outline"}><img src='./logo/Node.js.png' width={20} height={20} />Nodejs</Badge></li>
          </ul></h3>
            <ul>
              <li></li>
            </ul>
            </div>
          </div>
          
        </article>
        <article>
          <div className='flex flex-row justify-between px-20 py-5'>
            <img src='https://tse3.mm.bing.net/th/id/OIP.jVQuO5aDRs21VzuCWHsawwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' alt='latest project' width={500} height={300}/>
            <div className='px-10 py-2'>
            <h2>Project name: Portfolio website</h2>
            <p>Description: Specializing in building clean, responsive, and user-centric web applications. 
              Focused on translating design concepts into seamless digital experiences with smooth performance 
              and pixel-perfect execution. Explore my frontend toolkit and latest projects below.</p>
            <h3>Technologies used: <ul className='flex flex-row'>
            <li><Badge variant={"outline"}><img src='./logo/MongoDB.png' width={20} height={20} />Mongodb</Badge></li>
            <li><Badge variant={"outline"}><img src='./logo/Express.png' width={20} height={20} />Expressjs</Badge></li>
            <li><Badge variant={"outline"}><img src='./logo/React.png' width={20} height={20} />React</Badge></li>
            <li><Badge variant={"outline"}><img src='./logo/Node.js.png' width={20} height={20} />Nodejs</Badge></li>
          </ul></h3>
            <ul>
              <li></li>
            </ul>
            </div>
          </div>
        </article>
          {/* past projects */}
      </section>
      {/* latest project */}


    </main>
  )
}

export default HomePage