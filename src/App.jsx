import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Birante from "./pages/Birante";
import Services from "./pages/Services";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/birante" element={<Birante />} />
    </Routes>
  );
}
