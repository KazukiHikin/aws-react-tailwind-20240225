
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CreatPost from "./components/CreatPost";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/creatpost" element={<CreatPost />}></Route>  
      </Routes>

      <h1 className="text-3xl font-bold underline text-blue-400">
        コピーサイトです。本当のNETFLEXではありません
      </h1>
    </Router>
  );
}

export default App;
