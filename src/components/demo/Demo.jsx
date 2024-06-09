import React, { useState } from 'react';


function Demo() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: 'image1.jpg', alt: 'Image 1' },
    { id: 2, src: 'image2.jpg', alt: 'Image 2' },
    { id: 3, src: 'image3.jpg', alt: 'Image 3' },
    { id: 4, src: 'image4.jpg', alt: 'Image 4' },
    { id: 5, src: 'image5.jpg', alt: 'Image 5' },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Responsive Image Grid</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="cursor-pointer">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-md"
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-md p-4 w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-2xl font-bold mb-2">{selectedImage.alt}</h2>
            <p className="text-lg mb-4">This is some sample content.</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Demo;
