import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { Id } = useParams()
    const [details, setDetails] = useState({})


    useEffect(() => {
        fetch(`https://pacific-reaches-62302.herokuapp.com/services/${Id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div className="container mt-5">
            <div className="row p-1 m-2  rounded border g-3 ">
                <div className="col-lg-6 col-sm-12">
                    <img className="w-50 hidden" src={details.img} alt="" />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h2 className="text-primary">{details.name}</h2>
                    <h4>Price: {details.price}</h4>
                    <p>{details.discription}</p>
                    {/* <button>booking</button> */}
                </div>

            </div>
        </div>
    );
};

export default Details;