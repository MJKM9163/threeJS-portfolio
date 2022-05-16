import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { BuildingCanvas } from "./sub/building/Canvas";
import { WindCanvas } from "./sub/simulations/wind/WindCanvas";
import { VehicleCanvas } from "./sub/simulations/vehicle/VehicleCanvas";
import { StartScreen } from "./sub/startScreen/ScreenIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<StartScreen />} />
        <Route path="/exp/1" element={null} />
        <Route path="/simulation/1" element={<VehicleCanvas />} />
        <Route path="/simulation/2" element={<WindCanvas />} />
        <Route path="/etc/1" element={<BuildingCanvas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
