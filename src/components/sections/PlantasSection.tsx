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
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

const images = [
  {
    src: planta1,
    title: 'Rooftop (19° Pavimento)',
  },
  {
    src: planta9,
    title: 'Final 01 (Pavimento TIPO)',
  },
  {
    src: planta2,
    title: 'Final 02 (Pavimento TIPO)',
  },
  {
    src: planta3,
    title: 'Final 03 (Pavimento TIPO)',
  },
  {
    src: planta4,
    title: 'Final 04 (Pavimento TIPO)',
  },
  {
    src: planta5,
    title: 'Final 01 (4° Pavimento)',
  },
  {
    src: planta6,
    title: 'Final 02 (4° Pavimento)',
  },
  {
    src: planta7,
    title: 'Final 03 (4° Pavimento)',
  },
  {
    src: planta8,
    title: 'Final 04 (4° Pavimento)',
  },
  {
    src: planta12,
    title: '3° Pavimento',
  },
  {
    src:  planta10,
    title: '2° Pavimento',
  },
  {
    src: planta11,
    title: 'Térreo',
  }
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
      <h2 className="text-center font-inter text-4xl md:text-5xl font-light text-primary mb-6">Plantas do Empreendimento</h2>
      <p className="text-center text-sm font-inter font-light">
        No Win, cada unidade foi pensada para
        transformar rotina em bem-estar.
      </p>
      <p className="text-center text-sm font-inter font-light mb-16">
        Ambientes bem distribuídos, que se adaptam a
        diferentes estilos de vida e aproveitam o espaço
        com inteligência e conforto.
      </p>
      {/* <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((src, index) => (
          <div key={index} className="break-inside-avoid overflow-hidden rounded-lg shadow-md">
            <img
              src={src}
              alt={`Planta ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div> */}

      {/* Gallery Carousel */}
      <div className="mb-16 animate-scale-in">
        <Carousel className="relative">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[580px] rounded-lg overflow-hidden shadow-medium">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <h3 className="font-inter text-2xl font-light text-white mb-2">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
          <CarouselNext className="right-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        </Carousel>
      </div>
    </div>
  );
}
