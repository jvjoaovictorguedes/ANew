import React from "react";
import ProductOne from "../../assets/images/woman-wearing-purple-ribbon-front-view.jpg";
import ProductTwo from "../../assets/images/joyful-black-woman-having-fun-studio-pink-background-white-t-shirt-green-jacket-stylish-spring-look.jpg";

const Products: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold mb-8 text-black">
          Nossos Produtos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img
              src={ProductOne}
              alt="Produto 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4 text-black">
              Blusa com Elástico
            </h3>
            <p className="text-lg text-black mt-2">R$29.99</p>
            <button className="mt-4 bg-gradient-to-r from-pink-400 to-pink-dark text-white px-6 py-2 rounded-lg animationButton">
              Adicionar
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img
              src={ProductTwo}
              alt="Produto 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4 text-black">
              Sobretudo Verde
            </h3>
            <p className="text-lg text-black mt-2">R$49.99</p>
            <button className="mt-4 bg-gradient-to-r from-pink-400 to-pink-dark text-white px-6 py-2 rounded-lg animationButton">
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
