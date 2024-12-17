import React, { useState, useEffect } from "react";
import Test from "../../assets/icons/react.svg";
import { FaRegTimesCircle } from "react-icons/fa";
import axios from "axios";

const UserComponent: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [response, setResponse] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const token = localStorage.getItem("token");
  const [userId, setUserId] = useState<string>("");
  const [userData, setUserData] = useState<any>(null);

  const decodeJWT = (token: string) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    const decoded = JSON.parse(atob(base64));
    setUserId(decoded.nameid);
  };

  useEffect(() => {
    if (token) {
      decodeJWT(token);
    }
  }, [token]);

  const fetchUserData = async (userId: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const user = response.data;
        setUserData(user);
        setName(user.name);
        setEmail(user.email);
        setPassword("");
        setAddress(user.address);
        setPhone(user.phone);
        console.log("response", response.data);
      }
    } catch (err) {
      console.error("Erro ao buscar dados do usuário:", err);
    }
  };

  const handleModify = async () => {
    if (!userId) {
      console.error("Erro: usuário não autenticado.");
      return;
    }

    try {
      const updatedUserData = { name, email, phone, address, password };
      console.log("User", updatedUserData);

      if (password) {
        updatedUserData.password = password;
      }

      const response = await axios.put(
        `http://localhost:5000/api/users/${userId}`,
        updatedUserData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setResponse(true);
        setMessage(response.data);
        setIsEditing(false);
        alert("Dados salvos com sucesso!");
      }
    } catch (err) {
      setMessage("Erro ao salvar dados");
      setResponse(true);
      console.error(err);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserData(userId);
    }
  }, [userId]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between items-center p-4">
      {response && (
        <div>
          <p>{message}</p>
        </div>
      )}
      <main className="w-full max-w-md mx-auto bg-white rounded-[2rem] shadow-xl p-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-28 h-28 rounded-full bg-blue-200 flex items-center justify-center shadow-lg">
            <img src={Test} alt="User Avatar" className="w-16 h-16" />
            {isEditing ? (
              <a
                className="cursor-pointer absolute right-[40%] top-[12%] text-pink-600"
                onClick={() => setIsEditing(false)}
              >
                <FaRegTimesCircle />
              </a>
            ) : null}
          </div>

          {!isEditing ? (
            <>
              <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
              <p className="text-gray-500">{email}</p>
              <p className="text-gray-500">********</p>
              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              >
                Editar Perfil
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome"
                className="w-full p-2 border rounded-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="w-full p-2 border rounded-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
                className="w-full p-2 border rounded-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Endereço"
                className="w-full p-2 border rounded-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Telefone"
                className="w-full p-2 border rounded-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
              <button
                onClick={handleModify}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
              >
                Salvar
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default UserComponent;
