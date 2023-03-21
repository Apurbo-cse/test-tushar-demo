import React from 'react'


const RoomCard = ({data}) => {
  return (
    <div className="col-md-3 mb-3" key={data.id}>
          <div className="rounded-3 shadow " >
            <img
              src={data.image}
              className="rounded-3 w-100"
              alt={data.title}
              height="250px"
            />
            <div className='p-2'>
              <h5 className="fw-bold mb-0">{data.title}</h5>
              <p className="text-muted ">{data.description}</p>
            </div>
          </div>
        </div>
  )
}

export default RoomCard