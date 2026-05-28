import { Link, NavLink } from "react-router"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useMediaQuery } from 'react-responsive';

const PageHeader = () => {
  const inactiveStyle = "rounded outline outline-1 outline-offset-5 px-6 hover:text-blue-500";
  const activeStyle = "rounded outline outline-2 outline-blue-500 outline-offset-5 px-6 text-blue-500 font-semibold";

  const isDesktop = useMediaQuery({ query: '(min-width: 1000px)' });

  return (
    <header className='col-span-5 row-span-2 p-2 bg-linear-to-t from-[#8EC5FC] to-white h-[20v]'>
      <ul className="flex flex-row justify-between">
        <li className="grow">
          <Link to={'/'}><img className="object-cover cursor-pointer hover:opacity-30" src="./logo/HungNV_Logo_Lightmode.png" width={150} height={150}/></Link>
        </li>
        {isDesktop ?
          <div className="flex flex-row gap-5 my-3 me-5">
            <li><NavLink to={"/"} className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }>Home</NavLink></li>
            <li><NavLink to={"/skills"} className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }>Skills</NavLink></li>
            <li><NavLink to={"/projects"} className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }>Projects</NavLink></li>
            <li><NavLink to={"/certifications"} className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }>Certifications</NavLink></li>
            <li><NavLink to={"/experiences"} className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }>Experiences</NavLink></li>
          </div> :
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="my-3 me-8">Menu</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink><Link to={"/"}>Home</Link></NavigationMenuLink>
                  <NavigationMenuLink><Link to={"/skills"}>Skills</Link></NavigationMenuLink>
                  <NavigationMenuLink><Link to={"/projects"}>Projects</Link></NavigationMenuLink>
                  <NavigationMenuLink><Link to={"/certifications"}>Certifications</Link></NavigationMenuLink>
                  <NavigationMenuLink><Link to={"/experiences"}>Experiences</Link></NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        }


      </ul>
    </header>
  )
}

export default PageHeader