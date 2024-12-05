import React from "react";
import { motion } from "framer-motion";
import HeroBannerImage from "../../assets/images/glad-woman-with-trench-coat-standing-one-leg.jpg";

const HeroBanner: React.FC = () => {
  return (
    <section className="relative bg-black text-white h-[500px] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={HeroBannerImage}
          alt="Imagem do Hero"
          className="object-cover w-full h-full"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-40"
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Descubra a Nova Coleção</h1>
        <p className="text-lg mb-8">
          Explore os produtos incríveis e aproveite promoções exclusivas!
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Ver Coleção
          </button>
          <button className="bg-gradient-to-l from-pink-400 to-pink-dark text-white px-8 py-3 rounded-lg animationButton">
            Promoções
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
