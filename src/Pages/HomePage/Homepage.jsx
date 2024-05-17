import "./homepage.css";
import homeVideo from "../../assets/Video01.mp4"
import { useNavigate } from "react-router-dom";


function HomePage() {
  const navigate = useNavigate()
  return (
    <div>
      <div class="video-container">
        <video  muted loop autoPlay>
          <source src={homeVideo}  type="video/mp4"></source>
        </video>
      </div>

      <div id="homepage">
        <h1 className="title">Welcome User</h1>

        <section className="grid-container">
          <div className="item" onClick={()=>navigate("/home/notes")}>
            <h2 className="title2">Your Notes</h2>
            <div className="bar"></div>
          </div>
          <div className="item" onClick={()=>navigate("/home/musicPage")}>
            <h2 className="title2">Your Music</h2>
            <div className="bar"></div>
          </div>
          <div className="item" onClick={()=>navigate("/home/quotes")}>
            <h2 className="title2">Your Quotes</h2>
            <div className="bar"></div>
          </div>
          <div className="item"onClick={()=>navigate("/home/weather")}>
            <h2 className="title2">Weather</h2>
            <div className="bar"></div>
          </div>
        </section>
      </div>
  </div>
  );
}

export default HomePage;
