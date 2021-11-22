import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { bookingId } = useParams()
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`https://pacific-reaches-62302.herokuapp.com/services/${bookingId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="container mt-5">
            <div className="row p-1 m-2 services-container rounded border g-3 ">
                <div className="col-lg-6 col-sm-12">
                    <img className="w-50" src={service.img} alt="" />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h2 className="text-primary">{service.name}</h2>
                    <h4>Price: {service.price}</h4>
                    <p>{service.discription}</p>
                    {/* <button>booking</button> */}
                </div>

            </div>
        </div>
    );
};

export default Booking;