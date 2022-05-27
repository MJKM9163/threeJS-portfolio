import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { BuildingCanvas } from "./sub/etc/building/Canvas";
import { ChemicalCanvas } from "./sub/exp/chemical/ChemicalCanvas";
import { OceanCanvas } from "./sub/exp/ocean/OceanCanvas";
import { VehicleCanvas } from "./sub/simulations/vehicle/VehicleCanvas";
import { StartScreen } from "./sub/startScreen/ScreenIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<StartScreen />} />
        <Route path="/exp/1" element={<OceanCanvas />} />
        <Route path="/simulation/1" element={<VehicleCanvas />} />
        <Route path="/etc/1" element={<BuildingCanvas />} />
        <Route path="/etc/2" element={<ChemicalCanvas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
