import "./imagePage.css";

const photos = [
  { src: "/path/to/1.jpg", alt: "Image 1" },
  { src: "/path/to/2.jpg", alt: "Image 2" },
  { src: "/path/to/3.jpg", alt: "Image 3" },
  { src: "/path/to/4.jpg", alt: "Image 4" },
];

const ImagePage = () => {
  const handlePlay = () => {
    console.log("Play button clicked");
    
  };

  const handlePrevious = () => {
    console.log("Previous button clicked");
    
  };

  const handleNext = () => {
    console.log("Next button clicked");
    
  };

  return (
    <div className="image-page">
      <header className="image-page-header">
      </header>
      <main className="image-page-content">
        <div className="photo-collage">
          {photos.map((photo, index) => (
            <div className="photo-item" key={index}>
              <img src={photo.src} alt={photo.alt} />
              {index % 2 === 0 ? (
                <div className="photo-decor tape"></div>
              ) : (
                <div className="photo-decor clip"></div>
              )}
            </div>
          ))}
        </div>
        <div className="text-overlay">
          <h1>LIVE IN THE MOMENT</h1>
        </div>
        <div className="bottom-section">
          <div className="play-button">
            <button onClick={handlePlay}>▶️</button>
          </div>
          <div className="controls">
            <button onClick={handlePrevious}>⏮️</button>
            <button onClick={handleNext}>⏭️</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ImagePage;
