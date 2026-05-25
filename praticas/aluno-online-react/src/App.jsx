import "./App.css";
import Boletos from "./pages/Boletos";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Requerimentos from "./pages/Requerimentos";
import Layout from "./Layouts/Layout";
import Login from "./pages/Login";
import Erro404 from "./pages/Erro404";
import { useState } from "react";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/faltas" element={<Faltas />} />
        <Route path="/boletos" element={<Boletos />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/requerimentos" element={<Requerimentos />} />
      </Route>
      <Route path="*" element={<Erro404 />} />
    </Routes>
  );
}

export default App;
