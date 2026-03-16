import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Birante from "./pages/Birante";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/birante" element={<Birante />} />
    </Routes>
  );
}
