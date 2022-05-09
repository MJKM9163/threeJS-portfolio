import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { BuildingCanvas } from "./sub/building/Canvas";
import { StartScreen } from "./sub/startScreen/ScreenIndex";
import { VehicleCanvas } from "./sub/vehicleSimulation/Canvas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<StartScreen />} />
        <Route path="/exp/1" element={null} />
        <Route path="/simulation/1" element={<VehicleCanvas />} />
        <Route path="/etc/1" element={<BuildingCanvas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
