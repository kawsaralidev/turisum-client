import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Order = () => {
    const { id } = useParams();
    console.log(id)
    const [offers, setOffers] = useState([]);
    console.log(offers)
    useEffect(() => {
        fetch(`https://pacific-reaches-62302.herokuapp.com/services/${id}`)
            .then((res) => res.json())
            .then((data) => setOffers(data));
    }, []);
    const handleBookingBtn = () => {
        axios.post("https://pacific-reaches-62302.herokuapp.com/booking", offers).then((res) => {
            if (res.data.insertedId) {
                alert("Successfully");
            }
        });
    };
    return (
        <div className="row container mt-lg-5">
            <div className="col-lg-6 col-sm-12 ">
                <h3>{offers.name}</h3>
                <img
                    className="w-50 rounded-3 mx-auto"
                    src={offers.img}
                    alt=""
                />

                <h5>You can booking now</h5>
                <h4>Price: $ {offers.price}</h4>
                <div>
                    <Button
                        variant="outline-primary my-lg-3"
                        className=" mt-2"
                        onClick={handleBookingBtn}
                    >
                        Booking
                    </Button>
                    <Link to='/home'>
                        <Button
                            variant="outline-primary my-lg-3"
                            className="mx-2 mt-2" >
                            Go Home
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="col-lg-6 col-sm-12">
                <img
                    className="w-75"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI_seJIb_MbNgaAqUgCafZAk9s_KYEKz_-HQ&usqp=CAU"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Order;
