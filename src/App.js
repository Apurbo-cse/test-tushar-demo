import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/include/Navbar";
import MasterLayout from "./components/layout/MasterLayout";
import HomePage from "./components/views/HomePage";
import RoomPage from "./components/views/RoomPage";
import Post from "./components/views/Post";
import PostDetails from "./components/views/PostDetails";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route index element={<HomePage />} />
          <Route path="room" element={<RoomPage />} />
          <Route path="posts" element={<Post />} />
          <Route path="posts/:id" element={<PostDetails />} />

        </Route>
      </Routes>
    </>
  );
};

export default App;
