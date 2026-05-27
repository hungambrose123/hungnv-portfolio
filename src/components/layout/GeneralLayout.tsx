
import { Outlet } from 'react-router'
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'

const GeneralLayout = () => {
  return (
    <div className='grid grid-rows-10 grid-cols-5 gap-2 w-full min-h-screen'>
        <PageHeader />
        <Outlet />
        <PageFooter />
    </div>
  )
}

export default GeneralLayout