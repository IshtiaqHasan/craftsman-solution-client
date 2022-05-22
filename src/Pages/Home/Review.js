import React from 'react';

const Review = ({ review }) => {
    const { name, words, rating } = review;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Enterprise: {name}</h2>
                <p className='font-bold'>About Us: <span className='font-normal'>{words}</span></p>
                <p className='font-bold'>Ratings: <small className='text-accent'>{rating}</small></p>
            </div>
        </div>
    );
};

export default Review;