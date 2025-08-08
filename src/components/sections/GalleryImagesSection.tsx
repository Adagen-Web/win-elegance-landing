import React, { useState } from 'react';
import galeria1 from '../../assets/win-rooftop.jpg';
import galeria2 from '../../assets/galeria-2.jpg';
import galeria3 from '../../assets/galeria-3.jpg';
import galeria4 from '../../assets/galeria-4.jpg';
import galeria5 from '../../assets/galeria-5.jpg';
import galeria6 from '../../assets/galeria-6.jpg';

const images = [
  galeria4,
  galeria2,
  galeria3,
  galeria5,
  galeria6,
  galeria1,
];

export default function GalleryImagesSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const showNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const showPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      {/* Galeria em 2 colunas */}
      <div className="w-full grid grid-cols-2 gap-0">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full h-full cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={src}
              alt={`Galeria ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeModal}
          >
            ×
          </button>

          <button
            className="absolute left-4 text-white text-4xl"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            ‹
          </button>

          <img
            src={images[currentIndex]}
            alt={`Imagem ${currentIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()} // evitar fechar ao clicar na imagem
          />

          <button
            className="absolute right-4 text-white text-4xl"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
