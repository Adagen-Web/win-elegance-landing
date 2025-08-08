import React from 'react';
import torresImage from '../../assets/bg-torres.jpg';

export function TorresSection() {
  return (
    <section
      className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${torresImage})` }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Texto */}
      <div className="relative z-10 px-4 text-center">
        <h2 className="text-white text-2xl md:text-4xl font-medium max-w-3xl mx-auto">
          Torres: onde o cotidiano ganha <br className="hidden md:block" />
          vista para o extraordinário.
        </h2>
      </div>
    </section>
  );
}
