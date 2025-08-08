import React, { useState } from 'react';
import planta1 from '../../assets/plantas/planta-1.png';
import planta2 from '../../assets/plantas/planta-2.png';
import planta3 from '../../assets/plantas/planta-3.png';
import planta4 from '../../assets/plantas/planta-4.png';
import planta5 from '../../assets/plantas/planta-5.png';
import planta6 from '../../assets/plantas/planta-6.png';
import planta7 from '../../assets/plantas/planta-7.png';
import planta8 from '../../assets/plantas/planta-8.png';
import planta9 from '../../assets/plantas/planta-9.png';
import planta10 from '../../assets/plantas/planta-10.png';
import planta11 from '../../assets/plantas/planta-11.png';
import planta12 from '../../assets/plantas/planta-12.png';

const images = [
  planta1,
  planta2,
  planta3,
  planta4,
  planta5,
  planta6,
  planta7,
  planta8,
  planta9,
  planta10,
  planta11,
  planta12,
];

export function PlantasSection() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <h2 className="text-center text-2xl md:text-3xl font-inter font-light mb-8">Plantas do Empreendimento</h2>
      <p className="text-center text-sm font-inter font-light">
        No Win, cada unidade foi pensada para
        transformar rotina em bem-estar.
      </p>
      <p className="text-center text-sm font-inter font-light mb-8">
        Ambientes bem distribuídos, que se adaptam a
        diferentes estilos de vida e aproveitam o espaço
        com inteligência e conforto.
      </p>
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((src, index) => (
          <div key={index} className="break-inside-avoid overflow-hidden rounded-lg shadow-md">
            <img
              src={src}
              alt={`Planta ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
