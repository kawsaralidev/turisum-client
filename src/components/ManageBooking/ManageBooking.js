import React, { useEffect, useState } from 'react';
import MyBook from '../MyBook/MyBook';


const ManageBooking = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-shore-34663.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <>
            <div className="row ">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h3>Name</h3>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h3>Place</h3>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h3>Price</h3>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h3>Buy / Deleted</h3>
                </div>
            </div>
            <hr />
            {
                users.map(user => <MyBook key={user._id} user={user}></MyBook>)
            }
        </>
    );
};
// user={user}
export default ManageBooking;
