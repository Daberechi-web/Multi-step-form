import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Contact from './Pages/Form'
import Confirm from './Pages/Confirmation'
import Done from './Pages/Sucess'
import HomePage from './Pages/Temp'


function App() {
       const [formData, setFormData] = useState({
        name: "",
        password: "",
        phone: "",
        address: ""
       })

  return (
    <div>

      

      <Routes>
        <Route path='/' element = { <HomePage  formData={formData} setFormData={setFormData} />} />
        <Route path= '/Contact' element= {<Contact formData={formData} setFormData={setFormData} />} />
        <Route path='Confirm' element = {<Confirm formData={formData}  />} />
        <Route path='Done' element= {<Done />} />

      </Routes>
    </div>
  )
}

export default App
