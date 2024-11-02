// import React, { useState } from 'react';
// import './main.css'; // Import your CSS file
// import image1 from '../../../assets/image1.jpeg';
// import image2 from '../../../assets/image2.jpeg';
// import image3 from '../../../assets/image3.jpeg';
// import image4 from '../../../assets/image4.jpeg';
// import image5 from '../../../assets/image5.jpeg';

// const images = [
//   image1,
//   image2,
//   image3,
//   image4,
//   image5
// ];

// const Main = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <div className="carousel">
//       <div className="carousel-images">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Image ${index + 1}`}
//             className={index === currentIndex ? 'active' : ''}
//           />
//         ))}
//       </div>
//       <button className="prev" onClick={prevSlide}>&#10094;</button>
//       <button className="next" onClick={nextSlide}>&#10095;</button>
//     </div>
//   );
// };

// export default Main;

import React from 'react'
import './main.css';

const Main = () => {
  return (
    <div className="main-section">
      <h1 className="main-heading">Impacting Lives Positively</h1>
      <p style={{margin:'10px'}}>Make a difference today!</p>
      <button >Get Started</button>
    </div>
  )
}

export default Main
