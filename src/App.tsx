import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './components/public/HomePage'
import GeneralLayout from './components/layout/GeneralLayout'

function App() {


  return (
    <Routes>
      <Route path="" element={<GeneralLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>

  )
}

export default App
