// import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import "./input.css"

export const Input = ({newCat, handleInput, addCategory}) => {
  return (
    <div id='input'>
        <input type="text" placeholder='add or search for category'value={newCat}required onChange={handleInput} onKeyDown={(e) => {e.key==="Enter"&& addCategory() }}/>
        <IoMdAddCircleOutline  className='btn' type='button' onClick={()=> newCat!==""&& addCategory()}/>
    </div>
  )
}
