import React from "react";
import banner from "../assets/images/1.jpg";

const CardImage = () => {
  return (
    <>
      <div className="row d-flex align-items-center justify-content-center shadow m-0 p-0">
        <div className="col-md-6 m-0 p-0">
          <div className="card">
            <img src={banner} alt="" className="img-fulid" />
          </div>{" "}
        </div>
        <div className="col-md-6 m-0 p-0 text-center">
          <h3 className="fw-bold">Lorem ipsum dolor sit amet.</h3>
          <p className="text-card lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            temporibus totam vel minus eveniet voluptatibus!
          </p>
        </div>
        <div className="col-md-6 m-0 p-0 text-center">
          <h3 className="fw-bold">Lorem ipsum dolor sit amet.</h3>
          <p className="text-card lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            temporibus totam vel minus eveniet voluptatibus!
          </p>
        </div>

        <div className="col-md-6 m-0 p-0">
          <div className="card">
            <img src={banner} alt="" className="img-fulid" />
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default CardImage;
