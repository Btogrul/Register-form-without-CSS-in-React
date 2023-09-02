import React, { useState } from 'react';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {

        setSelectedImage(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>Image Uploader</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <div>
          <h2>Preview:</h2>
          <div  style={{ width: '300px', height: '300px' }}>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ width: '100%', height: '100%',objectFit: 'cover' }}
          />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageUploader;