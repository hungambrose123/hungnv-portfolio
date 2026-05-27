
import { Outlet } from 'react-router'
import PageHeader from './PageHeader'
import PageFooter from './PageFooter'

const GeneralLayout = () => {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] grid-cols-5 gap-2 w-full min-h-screen bg-linear-to-t from-[#E0C3FC] to-[#8EC5FC]'>
        <PageHeader />
        <Outlet />
        <PageFooter />
    </div>
  )
}

export default GeneralLayout