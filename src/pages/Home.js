import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../image.jpeg'; 

const Home = () => {
  const navigate = useNavigate();

  const goToGallery = () => {
    navigate('/gallery');
  };

  return (
    <div>
      <h1 style={{ color: '#707070' }}>We need to introduce our new product</h1>
      <img src={heroImage} alt="Hero" style={{ width: '500px', height: 'auto' }} />
      <p style={{ color: '#707070' }}>Releases 2024, January 24 <br></br>
            232g or 233g, 8.6mm thickness<br></br>
            Android 14, One UI 6.1.1<br></br>
            256GB/512GB/1TB storage, no card slot<br></br>
            1440x3120 pixels<br></br>
            200MP 4320p<br></br>
            12GB RAM<br></br>
            Snapdragon 8 Gen 3<br></br>
            5000mAh<br></br>
            45W15W</p>
      <button onClick={goToGallery} className="gallery-button">Go To Gallery</button>
    </div>
  );
};

export default Home;
