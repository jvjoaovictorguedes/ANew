import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./page/Login/Login";
import Home from "./page/Home/Home";
import Cart from "./page/Cart/Cart";
import { CartProvider } from "./context/CartContext/CartContext";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import User from "./page/User/User";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
