import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
// import  from 'react-router';
import './Service.css'

const Service = (props) => {
    const history = useHistory()
    const { _id, price, img, discription, name } = props.service

    const handleBooking = () => {

        // axios.post("https://enigmatic-shore-34663.herokuapp.com/booking", props.service)

        //     .then((res) => {
        //         if (res.data.insertedId) {
        //             alert("Successfully");
        //         }
        //     });
        history.push(`/purchase/${_id}`)
    }

    return (
        <div className="col-lg-6 p-2  col-sm-12">
            <div className="row p-3 m-3 services-container rounded-3 border ">
                <div className="col-lg-6 col-sm-12 img">
                    <img className="w-100" src={img} alt="" />
                </div>
                <div className="col-lg-6 col-sm-12">

                    <h2 className="text-primary">{name}</h2>

                    <p>{discription.slice(0, 35)}</p>

                    <h5>Price: {price}</h5>
                    <Link to={`/details/${_id}`}>
                        <Button variant="outline-primary" className=" me-2">Details</Button>
                    </Link>

                    <Button onClick={handleBooking} variant="outline-primary" >Booking</Button>

                </div>

            </div>
        </div>
    );
};

export default Service;

