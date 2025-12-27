// src/components/Navbar.jsx
import React from "react";
import {useNavigate} from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between px-12 py-6">
      <div className="text-2xl font-bold">C</div>

      <ul className="hidden md:flex gap-8 text-gray-300">
        <li className="hover:text-white cursor-pointer" onClick={() => navigate("/about")}>About us</li>
        <li className="hover:text-white cursor-pointer">Store</li>
        <li className="hover:text-white cursor-pointer">Games</li>
      </ul>

      <button className="bg-white text-black px-5 py-2 rounded-md font-medium hover:scale-105 transition">
        Connect Wallet
      </button>
    </nav>
  );
}
