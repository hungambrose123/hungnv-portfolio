import React from 'react'
import { Badge } from '../ui/badge'

const HomePage = () => {
  return (
    <main className='col-span-5 row-span-6 p-2'>

      {/* about me */}
      <section className='grid grid-col-6 grid-flow-col gap-3 mb-3'>
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
            <li><Badge variant={"outline"}><img src='./logo/MongoDB.png' width={20} height={20}/>Mongodb</Badge></li>
            <li><Badge variant={"outline"}><img src='./logo/Express.png' width={20} height={20}/>Expressjs</Badge></li>
            <li><Badge variant={"outline"}><img src='./logo/React.png' width={20} height={20}/>React</Badge></li>
            <li><Badge variant={"outline"}><img src='./logo/Node.js.png' width={20} height={20}/>Nodejs</Badge></li>
          </ul>
        </div>
        <div>
          Other technogies
          <ul>
            <li><Badge variant={"outline"}><img src='./logo/Spring.png' width={20} height={20}/>Spring Boot</Badge></li>
            <li><Badge variant={"outline"}><img src='./logo/NET core.png' width={20} height={20}/>ASP.Net Core</Badge></li>
          </ul>
        </div>
      </section>
      {/* skill set overview */}

      {/* latest project */}
      <section className='grid grid-col-2 grid-flow-col'>
        <div>
          My latest project
        </div>
        <div>
          <h2>Project name: </h2>
          <p>Description: </p>
          <h3>Technologies used:</h3>
          <ul>
            <li></li>
          </ul>
        </div>
      </section>
      {/* skill set overview */}


    </main>
  )
}

export default HomePage