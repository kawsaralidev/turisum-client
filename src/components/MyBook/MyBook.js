import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';

const MyBook = (props) => {
    const { user } = useFirebase()
    const [uses, setUser] = useState([])
    const { name, _id, price } = props.user

    const handleDelete = (id) => {
        const deleted = window.confirm('are you sure? delete')
        if (deleted) {
            const url = `https://enigmatic-shore-34663.herokuapp.com/booking/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })

                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = uses.filter(use => use._id !== id);
                        console.log(remaining)
                        setUser(remaining)
                    }

                })
        }

    }
    return (
        <div className=" ">
            <div className="row ">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h5> {user.displayName}</h5>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    {" "}
                    <h5>{name}</h5>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <h4>$ {price} </h4>{" "}
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    {" "}
                    <Button as={Link} to="/success" className="btn-success">
                        Pending
                    </Button>{" "}
                    <Button
                        onClick={() => handleDelete(_id)}
                        className="btn-danger"
                    >
                        Deleted
                    </Button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default MyBook;
