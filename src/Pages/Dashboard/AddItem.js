import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/tool`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div>
            <h2>Add Products</h2>
            <form className='flex flex-col text-center w-5/6' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' className='input input-bordered mb-2' {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='description' className='input input-bordered mb-2' {...register("description")} />
                <input placeholder='price' className='input input-bordered mb-2' type="number" {...register("price")} />
                <input placeholder='photo url' className='input input-bordered mb-2' type="text" {...register("img")} />
                <input className='input input-bordered' value="Add Item" type="submit" />
            </form>
        </div>
    );
};

export default AddItem;