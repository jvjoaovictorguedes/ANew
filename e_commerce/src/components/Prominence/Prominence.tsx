import React from "react";
import ProminenceOne from "../../assets/images/fashionable-woman-posing.jpg";
import ProminenceTwo from "../../assets/images/glad-african-woman-with-perfect-curly-hairs-casual-orange-blouse-golden-pants-posing-beige-wall.jpg";
import ProminenceThree from "../../assets/images/portrait-young-happy-woman-studio.jpg";
import { motion } from "framer-motion";

const Prominence: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold mb-8 text-black">Destaques</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={ProminenceOne}
              alt="Produto 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4 text-black">
              Camisa Praia
            </h3>
            <p className="text-gray-600 mt-2">
              Camisa com detalhes colorido lembrando a tarderzinha de uma praia!
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={ProminenceTwo}
              alt="Produto 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4 text-black">
              Camisa Dourada
            </h3>
            <p className="text-gray-600 mt-2">
              Camisa com uma cor ouro bem despojada!
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:cursor-pointer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={ProminenceThree}
              alt="Produto 3"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4 text-black">
              Camisa Gola Alta e Jaqueta Jeans
            </h3>
            <p className="text-gray-600 mt-2">
              Ideal para um dia frio, a gola protege contra a friagem!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Prominence;
