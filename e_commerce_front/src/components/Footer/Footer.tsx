// Footer.tsx
import React from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaMix,
  FaLock,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center px-4">
        <div className="mb-6">
          <a href="#" className="mx-4 text-sm hover:text-gray-400">
            Termos
          </a>
          <a href="#" className="mx-4 text-sm hover:text-gray-400">
            Privacidade
          </a>
          <a href="#" className="mx-4 text-sm hover:text-gray-400">
            Redes Sociais
          </a>
        </div>
        <div className="flex justify-center gap-8 mb-6">
          <FaLock className="text-white text-xl" title="Segurança" />
          <FaMix className="text-white text-xl" title="Pix" />
          <FaCcVisa className="text-white text-xl" title="Visa" />
          <FaCcMastercard className="text-white text-xl" title="Mastercard" />
          <FaCcAmex className="text-white text-xl" title="American Express" />
        </div>
        <p className="text-sm text-gray-400">
          Compras seguras com criptografia de ponta e proteção contra fraudes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
