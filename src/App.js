import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/include/Navbar";
import MasterLayout from "./components/layout/MasterLayout";
import HomePage from "./components/views/HomePage";
import RoomPage from "./components/views/RoomPage";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<RoomPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
