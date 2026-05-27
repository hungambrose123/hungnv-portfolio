import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const PageFooter = () => {
  return (
    <footer className='col-span-5 row-span-2 p-2 bg-linear-to-t from-white to-[#E0C3FC] h-[20vh]'>
      <section className="grid grid-flow-col grid-cols-8">
        <h3 className="col-span-2 text-xl text-center">Made with passion by<br/> Nguyễn Viết Hưng</h3>
        <div className="col-span-6 mx-auto flex flex-row justify-around gap-4 text-xl">
          <h3>Contact me:</h3>
          <ul className='flex flex-row gap-2'>
              <li className='hover:text-blue-500 cursor-pointer'><a href='https://github.com/hungambrose123' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} />Github</a></li>
              <li className='hover:text-blue-500 cursor-pointer'><a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faFacebook} />Linkedin</a></li>
              <li className='hover:text-blue-500 cursor-pointer'><a href='https://facebook.com' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} />Facebook</a></li>
          </ul>
        </div>
      </section>
    </footer>
  )
}

export default PageFooter