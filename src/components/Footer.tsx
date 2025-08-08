import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="bg-[#965018] py-6 border-t border-brown-200">
      <div className="container mx-auto px-4 text-center items-center">
        <p className="text-sm text-white">&copy; {new Date().getFullYear()} WIN Residence. Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;