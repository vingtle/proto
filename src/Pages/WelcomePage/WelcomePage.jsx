import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./welcomePage.css";

const WelcomePage = () => {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleButtonClick = () => {
    alert(`Hello, ${name}!`);
    navigate("/Home/HomePage");
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to the Welcome Page</h1>
      <input
        className="input-field"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="submit-button" onClick={handleButtonClick}>
        Validate
      </button>
    </div>
  );
};

export default WelcomePage;
