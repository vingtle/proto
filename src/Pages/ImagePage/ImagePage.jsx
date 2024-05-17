import "./imagePage.css";


const photos = [
     { src: "path/to/1.jpg", alt: "image-1"},
     { src: "path/to/2.jpg", alt: "image-2"},
     { src: "path/to/3.jpg", alt: "image-3"},
     { src: "path/to/4.jpg", alt: "image-4"},
];

const ImagePage = () => {

          const handlePlay = () => {
            console.log('Play button clicked');
          };
        
          const handlePrevious = () => {
            console.log('Previous button clicked');
          };
        
          const handleNext = () => {
               console.log('Next button clicked');
  return (
    <div id="imagePage">ImagePage
      <header id="Logo"></header>
          <body id="image-page-content">
               <div id="photo-collage">
                    {photos.maps((photo, index) => (
                         <div id="photo-item" key={index}>
                              <img src={photo.src} alt={photo.alt} />
                              {index %2 === 0 ? (
                                   <div id="photo-decor-tape>"></div>) : (
                                   <div
                                   id="photo-decor-clip"></div>
                                   )}
                              </div>
                    ))}
               </div>
               <div className="text-overlay">
                    <h1>LIVE IN THE MOMENT</h1>
               </div>
               <div className="botton-section">
                    <div className="play-button">
                    <button onClick={handlePlay}>▶️</button>
                    </div>
                    <div className="controls">
                    <button onClick={handlePrevious}>⏮️</button>
                    <button onClick={handleNext}>⏭️</button>
                    </div>
                    </div>
          </body>
    </div>
  );}
}

export default ImagePage;
