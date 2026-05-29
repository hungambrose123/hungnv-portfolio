import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const scrollBackTracker = () => {
            const currentUserScroll = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;
        const windowHeight = document.documentElement.clientHeight;
        const trackAbleScrollDistance = pageHeight - windowHeight;
        if(currentUserScroll > trackAbleScrollDistance/2){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
        }
        
        window.addEventListener("scroll", scrollBackTracker, {passive: true})

        // clean up when unmount
        return () => {
            window.removeEventListener("scroll", scrollBackTracker);
        }
    },[]);
  return (
    isVisible &&
    <FontAwesomeIcon icon={faArrowAltCircleUp} className='text-blue-500 hover:text-white cursor-pointer fixed bottom-20 right-6' 
          size='2x' 
          onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth'
          })}
    />
  )
}

export default ScrollToTopButton