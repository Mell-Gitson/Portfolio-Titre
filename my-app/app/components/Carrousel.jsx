import { useState } from 'react';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/assets/image1.png',
    '/assets/image2.png',
    '/assets/image3.png',
  ];

  const previous = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const forward = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="relative max-w-2xl mx-auto mt-8">
      <div className="relative h-64 overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <button onClick={previous} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-600 p-2 rounded-full">
        ←
      </button>
      <button onClick={forward} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-600 p-2 rounded-full">
        →
      </button>
    </div>
  );
}
