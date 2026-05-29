import { Badge } from '../ui/badge'

const SkillsPage = () => {
  return (
    <main className='col-span-5 row-span-6 grid grid-cols-1 grid-rows-6 p-3 lg:px-10 lg:py-6'>
      <h1 className="text-md lg:text-2xl text-center sectionTitle">My skills</h1>
        {/* programming languages */}
        <section className='text-center lg:text-start lg:my-3'>
          <h3>Programing languages</h3>
          <ul className='flex flex-row flex-wrap gap-2 px-2 lg:px-0'>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/JavaScript.png' width={20} height={20} />Javascript</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/TypeScript.png' width={20} height={20} />Typescript</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/CSharp.png' width={20} height={20} />C#</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/Java.png' width={20} height={20} />Java</Badge></li>
          </ul>
        </section>
        {/* programming languages */}
        {/* Tech stacks */}
        <section className='text-center lg:text-start lg:my-3'>
          <h3>Tech stacks</h3>
          <ul className='flex flex-row flex-wrap gap-2 px-2 lg:px-0'>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/MongoDB.png' width={20} height={20} />Mongodb</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/Express.png' width={20} height={20} />Expressjs</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/React.png' width={20} height={20} />React</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/Node.js.png' width={20} height={20} />Nodejs</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/NET core.png' width={20} height={20} />ASP.Net Core</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/Spring.png' width={20} height={20} />Spring Boot</Badge></li>
          </ul>
        </section>
        {/* Tech stacks */}
        {/* UI frameworks */}
        <section className='text-center lg:text-start lg:my-3'>
          <h3>CSS Framworks and Libraries</h3>
          <ul className='flex flex-row flex-wrap gap-2 px-2 lg:px-0'>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/Tailwind CSS.png' width={20} height={20} />Tailwind</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/Bootstrap.png' width={20} height={20} />Bootstrap</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/Ant Design.png' width={20} height={20} />Ant Design</Badge></li>
          </ul>
        </section>
        {/* UI frameworks */}
        {/* tools */}
        <section className='text-center lg:text-start my-3'>
          <h3>Tools</h3>
          <ul className='flex flex-row flex-wrap gap-2 px-2 lg:px-0'>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/GitHub.png' width={20} height={20} />Github</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/Git.png' width={20} height={20} />Git</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/Figma.png' width={20} height={20} />Figma</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/Jira.png' width={20} height={20} />Jira</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/Miro.png' width={20} height={20} />Miro</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/DrawIO.png' width={20} height={20} />Draw.io</Badge></li> 
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/Visual_Paradigm.png' width={20} height={20} />Visual Paradigm</Badge></li>      
          </ul>
        </section>
        {/* tools */}
        {/* human languages */}
        <section className='text-center lg:text-start my-3'>
          <h3>Languages</h3>
          <ul className='flex flex-row flex-wrap gap-2 px-2 lg:px-0'>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/VietnamFlag.png' width={20} height={20} />Vietnamese</Badge></li>
            <li><Badge variant={"outline"} className='py-3'><img src='./hungnv-portfolio/logo/UKFlag.png' width={20} height={20} />English</Badge></li>     
          </ul>
        </section>
        {/* human languages */}
    </main>
  )
}

export default SkillsPage