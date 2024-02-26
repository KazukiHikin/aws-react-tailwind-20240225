import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return <nav className="space-x-10">
    <Link to="/">ホーム</Link>
    <Link to="/creatpost">記事投稿</Link>
    <Link to="/login">ログイン</Link>
  </nav>;
};

export default Navbar;
