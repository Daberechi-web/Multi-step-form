

import React from "react";
import "./OptionCard.css"; 

const OptionCard = ({ option, isSelected, onSelect }) => {
  return (
    <div
      className={`option-card ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <div className="icon">{option.icon} </div>
      <p>{option.name}</p>
    </div>
  );
};

export default OptionCard;