// const url = 'https://dog.ceo/api/breeds/image/random';

// fetch(url)
// .then(response => response.json())
// .then((data) => {
//     console.log(`Dog Image: ${data.message}`)
    
//     })
// .catch(
//     error => console.error('Error:', error)
// )

import React, { useState, useEffect } from 'react';

function DogImage() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setImageUrl(data.message);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <img src={imageUrl} alt="Random Dog Image" />
    </div>
  );
}

export default DogImage;
