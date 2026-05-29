import React from 'react'
import { Badge } from '../ui/badge'

const SkillsPage = () => {
  return (
    <article className='col-span-5 row-span-6 grid grid-cols-1 grid-rows-5 p-3 lg:p-10'>
        {/* programming languages */}
        <section className='text-center lg:text-start my-3'>
          <h3>Programing languages</h3>
          <ul className='flex flex-row flex-wrap gap-2 px-2 lg:px-0'>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/JavaScript.png' width={20} height={20} />Javascript</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/TypeScript.png' width={20} height={20} />Typescript</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/CSharp.png' width={20} height={20} />C#</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/Java.png' width={20} height={20} />Java</Badge></li>
          </ul>
        </section>
        {/* programming languages */}
        {/* Tech stacks */}
        <section className='text-center lg:text-start my-3'>
          <h3>Tech stacks</h3>
          <ul className='flex flex-row flex-wrap gap-2 px-2 lg:px-0'>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/MongoDB.png' width={20} height={20} />Mongodb</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/Express.png' width={20} height={20} />Expressjs</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/React.png' width={20} height={20} />React</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/Node.js.png' width={20} height={20} />Nodejs</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/NET core.png' width={20} height={20} />ASP.Net Core</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/Spring.png' width={20} height={20} />Spring Boot</Badge></li>
          </ul>
        </section>
        {/* Tech stacks */}
        {/* tools */}
        <section className='text-center lg:text-start my-3'>
          <h3>Tools</h3>
          <ul className='flex flex-row flex-wrap gap-2 px-2 lg:px-0'>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/GitHub.png' width={20} height={20} />Github</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/Git.png' width={20} height={20} />Git</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/Figma.png' width={20} height={20} />Figma</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/Jira.png' width={20} height={20} />Jira</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/Miro.png' width={20} height={20} />Miro</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/DrawIO.png' width={20} height={20} />Draw.io</Badge></li> 
            <li><Badge variant={"outline"} className='py-3'><img src='./logo/Visual_Paradigm.png' width={20} height={20} />Visual Paradigm</Badge></li>      
          </ul>
        </section>
        {/* tools */}
    </article>
  )
}

export default SkillsPage