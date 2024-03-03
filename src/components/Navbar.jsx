import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="space-x-10 flex justify-center">
      <Link to="/" className="font-bold bg-blue-100 rounded-lg ">
        NETFLIXのコピーサイト
      </Link>
      <Link to="/creatpost" className="font-bold bg-blue-100 rounded-lg">
        構築環境の紹介
      </Link>
    </nav>
  );
};

export default Navbar;
