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

      <div className="hero">
        <div className="card text-bg-warning">
          <img src="/assets/bg.png" className="card-img" alt="/" height={500} />
          <div className="card-img-overlay d-flex flex-column justify-content-around">
            <div className="container">
              <h5 className="card-title display-3 text-mute fw-bolder mb-0">
                NEW SESSION ARRIVALS
              </h5>
              <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container main-body-width my-4">
        <div className="row pt-3 d-flex justify-content-between">
          <div className="row post-main">
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
