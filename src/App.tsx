import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './components/public/HomePage'
import GeneralLayout from './components/layout/GeneralLayout'
import SkillsPage from './components/public/SkillsPage'
import ProjectsPage from './components/public/ProjectsPage'
import CertificationsPage from './components/public/CertificationsPage'
import ExperiencesPage from './components/public/ExperiencesPage'

function App() {


  return (
    <Routes>
      <Route path="" element={<GeneralLayout />}>
        <Route index element={<HomePage />} />
        <Route path='skills' element={<SkillsPage />} />
        <Route path='projects' element={<ProjectsPage />} />
        <Route path='certifications' element={<CertificationsPage />} />
        <Route path='experiences' element={<ExperiencesPage />} />

      </Route>
    </Routes>

  )
}

export default App
