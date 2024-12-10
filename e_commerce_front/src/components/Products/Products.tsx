import React, { useState } from "react";
import { CartItem, useCart } from "../../context/CartContext/CartContext";
import ProductOne from "../../assets/images/woman-wearing-purple-ribbon-front-view.jpg";
import ProductTwo from "../../assets/images/joyful-black-woman-having-fun-studio-pink-background-white-t-shirt-green-jacket-stylish-spring-look.jpg";
import { useAuth } from "../../context/AuthContext/AuthContext";

const Products: React.FC = () => {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handleAddToCart = (product: CartItem) => {
    if (isAuthenticated) {
      addToCart(product);
    } else {
      setShowLoginPrompt(true);
    }
  };

  const closeLoginPrompt = () => setShowLoginPrompt(false);

  const products = [
    {
      id: 1,
      name: "Blusa com Elástico",
      price: 29.99,
      image: ProductOne,
    },
    {
      id: 2,
      name: "Sobretudo Verde",
      price: 49.99,
      image: ProductTwo,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold mb-8 text-black">
          Nossos Produtos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold mt-4 text-black">
                {product.name}
              </h3>
              <p className="text-lg text-black mt-2">
                R${product.price.toFixed(2)}
              </p>
              <button
                className="mt-4 bg-gradient-to-r from-pink-400 to-pink-dark text-white px-6 py-2 rounded-lg animationButton"
                onClick={() =>
                  handleAddToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                  })
                }
              >
                Adicionar
              </button>
            </div>
          ))}
        </div>
      </div>
      {showLoginPrompt && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold text-black mb-4">
              Você precisa estar logado para adicionar produtos ao carrinho!
            </h3>
            <div className="flex justify-between">
              <button
                onClick={closeLoginPrompt}
                className="bg-gray-200 px-6 py-2 rounded-lg text-black"
              >
                Fechar
              </button>
              <button
                onClick={() => (window.location.href = "/login")}
                className="bg-pink-500 text-white px-6 py-2 rounded-lg"
              >
                Ir para Login
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
