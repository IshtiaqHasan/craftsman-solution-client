import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/review`;
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
            <h2>Add Your Review</h2>
            <form className='flex flex-col text-center w-5/6' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='name' className='input input-bordered mb-2' {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='description' className='input input-bordered mb-2' {...register("words")} />
                <input placeholder='rating' className='input input-bordered mb-2' type="text" {...register("rating")} />

                <input className='input input-bordered' value="Add Review" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;