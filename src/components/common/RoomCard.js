import React from 'react'


const RoomCard = ({data}) => {
  return (
    <div className="col-md-3 mb-3" key={data.id}>
          <div className="rounded-3 p-2 shadow " key={data.id}>
            <img
              src={data.image}
              className="card-img-top"
              alt={data.title}
              height="250px"
            />
            <div className="card-body">
              <h5 className="card-title lead fw-bold mb-0">{data.title}</h5>
              <p className="card-text ">{data.description}</p>
            </div>
          </div>
        </div>
  )
}

export default RoomCard