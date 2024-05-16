import { useState } from "react"
import "./quotes.css"
import { Funny, Happy, Motivation } from "../../quotes"
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";


const Quotes = () => {
  const [datas, setData] = useState(Motivation);
  const[index, setIndex] = useState(0);
  const limit = 9 ; 

  const handleSad =()=>{
    setData(Funny);
    setIndex(0);
  }

  const handleHappy =()=>{
    setData(Happy);
    setIndex(0);
  }

  const handleMotivation =()=>{
    setData(Motivation);
    setIndex(0);
  }

  return (
    <div id="quotes">
      <h1>Quotes</h1>
      <h3>How do you feel today!</h3>
      <div className="quotes-btn">
        <button value="Sad" onClick={handleSad} >Sad</button>
        <button value="Happy"onClick={handleHappy} >Happy</button>
        <button value="Don't know" onClick={handleMotivation} >Don't know</button>
      </div>

      <div className="quote-container">
       {datas.length > 0 && ( <div  key={datas[index].id} className="single-quote" >
        <p>{datas[index].quote}</p>
        { !datas[index].author?<h2>{datas.authors} </h2> : null}
       </div> )}

       {index>0 && <FaAngleLeft className="prev" onClick={()=> setIndex(index - 1)} />}
       {index < limit &&<FaAngleRight className="next" onClick={()=> setIndex(index + 1)} />}

       {index === 0 ? null: <div className="page">{index}</div>}
      </div>

    </div>
  )
}

export default Quotes