import React, { useState } from "react";
import { useCart } from "../../context/CartContext/CartContext";
import { useAuth } from "../../context/AuthContext/AuthContext";

const CartComponent: React.FC = () => {
  const { cartItems, updateCartItem, removeFromCart } = useCart();
  const { isAuthenticated, login } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleAddToCart = (item: any) => {
    if (isAuthenticated) {
      updateCartItem(item.id, item.quantity + 1);
      setAddSuccess(true);
    } else {
      setShowLoginModal(true);
    }
  };

  const handleLoginClose = () => setShowLoginModal(false);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl">
        <h1 className="text-2xl font-bold text-gray-800 p-6 border-b">
          Shopping Cart
        </h1>

        {cartItems.length > 0 ? (
          <div className="p-6 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold text-gray-700">
                    {item.name}
                  </h2>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleAddToCart}
                    className="px-2 py-1 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-100 border rounded-md">
                    {item.quantity}
                  </span>
                  <button
                    onClick={handleAddToCart}
                    className="px-2 py-1 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center pt-4 border-t">
              <h3 className="text-lg font-semibold text-gray-700">Total:</h3>
              <p className="text-xl font-bold text-gray-800">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            <button className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              Checkout
            </button>
          </div>
        ) : (
          <div className="text-center p-6">
            <h2 className="text-lg text-gray-700">Your cart is empty.</h2>
            <p className="text-gray-500">
              Browse products and add them to your cart.
            </p>
          </div>
        )}

        {addSuccess && (
          <div className="p-4 bg-green-500 text-white rounded-md">
            Produto adicionado ao carrinho com sucesso!
          </div>
        )}
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">
              Você precisa estar logado!
            </h2>
            <p className="mt-4">Por favor, faça login ou registre-se.</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={login}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Login
              </button>
              <button
                onClick={handleLoginClose}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
