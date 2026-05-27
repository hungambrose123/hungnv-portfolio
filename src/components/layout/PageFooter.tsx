import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const PageFooter = () => {
  return (
    <footer className='col-span-5 row-span-2 p-2 bg-linear-to-t from-blue-200 to-white'>
      <section className="grid grid-flow-col grid-cols-8">
        <h3 className="col-span-2">Made with passion by Nguyen Viet Hung</h3>
        <div>
          <h3>Contact me</h3>
          <ul className="col-span-6 mx-auto">
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