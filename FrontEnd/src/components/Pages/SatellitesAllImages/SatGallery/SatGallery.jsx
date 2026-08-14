import React from 'react'
import './SatGallery.css'

const SatGallery = ({images}) => {
  return (
    <div className="gallery-grid">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img
              src={image.img}
              alt={image.id}
          />
        </div>
      ))}
  </div>
  )
}

export default SatGallery