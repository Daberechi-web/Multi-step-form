

import { useState } from "react"
import OptionCard from "../Components/OptionCard"
import { useNavigate } from "react-router-dom"
import './Home.css'


const HomePage = ({ formData, setFormData }) => {

    const [selected, setSelected]= useState("")
    const navigate = useNavigate("")
           
    const options = [
    { id: 1, name: "Debit Card", icon: "💳" },
    { id: 2, name: "App Transfer", icon: "📱" },
    { id: 3, name: "Cashback Wallet", icon: "💰" },
  ];

  const handleSelect = (option) => {
    setSelected(option.id);
    setFormData( (prev) => ({...prev, Selection: option.name}));
  };

  const handleNext = () => {
    if (selected) {
      navigate("/Contact");
    } else {
      alert("Please select an option first.");
    }
  };

  return (
    <div className="home-container">
      <h1>Select Payment Option</h1>
      <div className="options-grid">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            option={option}
            isSelected={selected === option.id}
            onSelect={() => handleSelect(option)}
          />
        ))}
      </div>
      <button className="next-btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
   
}
export default HomePage