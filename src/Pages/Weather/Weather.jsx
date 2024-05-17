import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import "./weather.css";

const Weather = () => {
  const apiKey = "386848ba6de545bbbe404736241705";
  const [value, setValue] = useState('');
  const [weather, setWeather] = useState([]);
  const [showIt, setShowIt] = useState(false);
  const searchUrl =`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${value}&aqi=yes`;

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const fetchApi = () => {
      fetch(searchUrl)
        .then((res) => res.json())
        .then((data) => setWeather(data))
        .catch((err) => console.log(err));
    };
    if (showIt) {
      fetchApi();
    }
  }, [searchUrl, showIt]);

  const searchFunc = () => {
    setShowIt(true);
    setValue("");
  };

  return (
    <div id="weather">
      <div id="input">
        <input
          type="text"
          onChange={handleInput}
          value={value}
          onKeyDown={(e) => {
            e.key === "Enter" && searchFunc();
          }}
          placeholder="where are you"
        />
        <FaSearch className="btn" onClick={searchFunc} />
      </div>

      <div className="results-container">
        {weather.map((result, index) => (
          <div key={index}>
            {result && result.location && (
              <>
                <h2 className="location-text">
                  <FaLocationDot className="location-png" /> {result.location.name}{" "}
                  <span>{result.location.region}</span>{" "}
                </h2>
                <p>{result.location.country}  {result.location.localtime}   </p>

                <div className="image-container">
                  <div> 
                    <img src={result.current.condition.icon} alt="weather-image" />
                    <h1>{result.current.temp_c}°</h1>
                  </div>
                  <p>{result.current.condition.text}</p>
                </div>

                <div className="more-details">
                  <p>Feelslike <span>{result.current.feelslike_c}</span> </p>
                  <p>Humidity <span>{result.current.humidity} </span>% </p>
                  <p>Cloud <span>{result.current.cloud}</span> % </p>
                  <p>Wind <span>{result.current.wind_kph}</span> km/h </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
