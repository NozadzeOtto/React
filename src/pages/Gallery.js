import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=4')
      .then(response => setPhotos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {photos.map(photo => (
          <div key={photo.id} style={{ margin: '10px' }}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
