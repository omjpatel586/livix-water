import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MaintenancePage from './pages/maintainance'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MaintenancePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
