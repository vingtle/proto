import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineEditNote } from "react-icons/md";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { BsChatRightQuoteFill } from "react-icons/bs";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div id="navbar">
      
      <div onClick={()=> navigate('/Home/homePage') } className="nav-btn">
        <FaHome className="btn" />
        Home
      </div>
      <div  onClick={()=> navigate('/Home/notes')} className="nav-btn">
        <MdOutlineEditNote className="btn" />
        Note
      </div>
      <div  onClick={()=> navigate('/Home/musicPage')} className="nav-btn">
        <BsFillMusicPlayerFill className="btn"/>
        Music
      </div>
      <div onClick={()=> navigate('/Home/quotes')} className="nav-btn">
      <BsChatRightQuoteFill className="btn" />
        Quotes
      </div>
    </div>
  );
};

export default Navbar;
