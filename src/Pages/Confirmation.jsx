import { useNavigate } from "react-router-dom"
import './Confirmation.css'

const Confirm = ({formData}) => {

    const navigate = useNavigate()

    const handleConfirm = ()=>{
        navigate ("/Done")
    };

    const handleBack = ()=>{
        navigate ('/Contact')
    }

    return (
        <div>
            <h2>Confirm Details</h2>
            <div className="confirm-container">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Phone Number:</strong> {formData.phone}</p>
                <p><strong>Pin:</strong> {formData.password}</p>
                <p><strong>Amount:</strong> {formData.address}</p>
            </div>
            <div className="buttons">
                <button onClick={handleBack}>Back</button>
                <button onClick={handleConfirm}>Send</button>
            </div>

        </div>
    )
}
export default Confirm