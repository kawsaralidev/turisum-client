import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddNewService.css";


const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://pacific-reaches-62302.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
                }

            })
    };
    return (
        <div className="add-service">
            <h2 className="text-info m-5">Please add this service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" /> <br />
                <textarea {...register("discription")} placeholder="discription" /> <br />
                <input type="number" {...register("price")} placeholder="price" /> <br />
                <input {...register("img")} placeholder="image" /> <br />
                <input className="bg-info text-white fw-bold w-25" type="submit" />
            </form>
        </div>
    );
};

export default AddNewService;