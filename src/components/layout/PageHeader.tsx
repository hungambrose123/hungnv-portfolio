import { NavLink } from "react-router"

const PageHeader = () => {
  return (
    <header className='col-span-5 row-span-2 p-2 bg-linear-to-t from-[#8EC5FC] to-white h-[20v]'>
      <ul className="flex flex-row justify-between">
        <li className="grow">
          <img className="object-cover" src="./logo/HungNV_Logo_Lightmode.png" width={150} height={150}/>
        </li>
        <div className="flex flex-row gap-5 my-3 me-5">
          <li><NavLink to={"/"} className={({ isActive, isPending }) =>
            isPending ? "hover:text-blue-500" : isActive ? "rounded outline outline-1 outline-blue-500 outline-offset-5 px-6 text-blue-500" : "rounded outline outline-1 outline-offset-5 px-6 hover:text-blue-500"
          }>Home</NavLink></li>
          <li><NavLink to={"/skills"} className={({ isActive, isPending }) =>
            isPending ? "hover:text-blue-500" : isActive ? "rounded outline outline-1 outline-blue-500 outline-offset-5 px-6 text-blue-500" : "rounded outline outline-1 outline-offset-5 px-6 hover:text-blue-500"
          }>Skills</NavLink></li>
          <li><NavLink to={"/projects"} className={({ isActive, isPending }) =>
            isPending ? "hover:text-blue-500" : isActive ? "rounded outline outline-1 outline-blue-500 outline-offset-5 px-6 text-blue-500" : "rounded outline outline-1 outline-offset-5 px-6 hover:text-blue-500"
          }>Projects</NavLink></li>
          <li><NavLink to={"/certifications"} className={({ isActive, isPending }) =>
            isPending ? "hover:text-blue-500" : isActive ? "rounded outline outline-1 outline-blue-500 outline-offset-5 px-6 text-blue-500" : "rounded outline outline-1 outline-offset-5 px-6 hover:text-blue-500"
          }>Certifications</NavLink></li>
          <li><NavLink to={"/experiences"} className={({ isActive, isPending }) =>
            isPending ? "hover:text-blue-500" : isActive ? "rounded outline outline-1 outline-blue-500 outline-offset-5 px-6 text-blue-500" : "rounded outline outline-1 outline-offset-5 px-6 hover:text-blue-500"
          }>Experiences</NavLink></li>
        </div>
      </ul>
    </header>
  )
}

export default PageHeader