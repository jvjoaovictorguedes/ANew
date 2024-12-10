import React, { useState } from "react";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import ImageLogo from "../../assets/images/SS.jpg";
import { useAuth } from "../../context/AuthContext/AuthContext";

const Header: React.FC = () => {
  const [hover, setHover] = useState(false);
  const { isAuthenticated } = useAuth();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handleAddToCart = () => {
    if (isAuthenticated) {
      window.location.href = "/cart";
    } else {
      setShowLoginPrompt(true);
    }
  };

  const closeLoginPrompt = () => setShowLoginPrompt(false);

  const toggleHover = () => {
    setHover((prevState) => !prevState);
  };

  return (
    <header className="bg-gradient-to-r from-pink-300 to-pink-dark text-white shadow-md">
      <div className="container px-4 flex items-center justify-between py-4">
        <div className="flex items-center">
          <a href="/">
            <img
              src={ImageLogo}
              alt="Sadina Santos"
              className="h-12 w-auto object-contain rounded-3xl"
            />
          </a>
        </div>
        <nav className="hidden md:flex space-x-32 relative">
          <a href="/" className="hover:text-gold transition-colors font-medium">
            Inicio
          </a>
          <div className="relative">
            <p
              className="hover:text-gold transition-colors font-medium hover:cursor-pointer"
              onClick={toggleHover}
            >
              Produtos
            </p>
            {hover && (
              <div className="absolute top-8 left-0 bg-white text-black shadow-lg rounded-md w-48 py-4 z-50">
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/categoria/1"
                      className="block px-4 py-2 hover:bg-gray-200 rounded"
                    >
                      Camisas
                    </a>
                  </li>
                  <li>
                    <a
                      href="/categoria/2"
                      className="block px-4 py-2 hover:bg-gray-200 rounded"
                    >
                      Vestidos
                    </a>
                  </li>
                  <li>
                    <a
                      href="/categoria/3"
                      className="block px-4 py-2 hover:bg-gray-200 rounded"
                    >
                      Saias
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <a
            href="/contato"
            className="hover:text-gold transition-colors font-medium"
          >
            Contato
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center bg-white text-black px-3 py-1 rounded-full">
            <input
              type="text"
              placeholder="Buscar..."
              className="text-sm flex-1"
            />
            <FaSearch className="text-gray-500" />
          </div>
          <a
            onClick={handleAddToCart}
            className="hover:text-gold transition-colors cursor-pointer"
          >
            <FaShoppingCart size={20} />
          </a>
          <a href="/login" className="hover:text-gold transition-colors">
            <FaUser size={20} />
          </a>
        </div>
        {showLoginPrompt && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
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
      </div>
    </header>
  );
};

export default Header;
