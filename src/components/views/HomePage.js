import React from "react";
import RoomCard from "../common/RoomCard";
import { RoomData } from "../json/RoomData";
import Carousel from "../layout/include/Carousel";
import banner from "../assets/images/1.jpg";
import VideoCard from "../common/VideoCard";
import CardImage from "../common/CardImage";

const HomePage = () => {
  return (
    <>
      <Carousel />

      

      <div className="container  my-4">
        <div className="row pt-3 d-flex justify-content-between">
          <div className="row ">
            {RoomData.map((data) => (
              <RoomCard key={data.id} data={data} />
            ))}
          </div>
          <CardImage />
        </div>
      </div>

      <div
        class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <VideoCard />
      </div>
    </>
  );
};

export default HomePage;
