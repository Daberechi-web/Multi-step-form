import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Form.css'





const Contact = ({formData, setFormData})=>{
        
     const navigate = useNavigate()

    //  const [name , setName] =  useState("")
    //  const [password , setPassword] = useState("")
    //  const [phone , setPhone] = useState("")

    const handleChange = (e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }


     const handleNext = (e)=>{
        e.preventDefault()
        navigate ('/Confirm')
        
     }


    return(
        <div className="form-container">
            <h3>Enter Your Details</h3>
            <div>
                <form action="" onSubmit={handleNext}>
                    <input type="text"
                    placeholder="Enter name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required />


                    <input type="tel"
                    placeholder="Phonenumber" 
                    value={formData.phone}
                    name="phone"
                    onChange={handleChange}
                    required/>
                    

                    <input type="password"
                    placeholder="Enter pin"
                    value={formData.password}
                    name="password"
                    onChange={handleChange}
                    required />

                    <input type="number"
                    placeholder="Amount"
                    value={formData.address}
                    name="address"
                    min={0}
                    onChange={handleChange} 
                    required/>

                    <button type="submit">Continue</button>
                </form>
            </div>
        </div>
    )
}
export default Contact