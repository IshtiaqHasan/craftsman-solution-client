import React from 'react';

const Review = ({ review }) => {
    const { _id, name, words, rating } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Enterprise: {name}</h2>
                <p className='font-bold'>About Us: <span className='font-normal'>{words}</span></p>
                <p className='font-bold'>Ratings: <small className='text-accent'>{rating}</small></p>
            </div>
        </div>
    );
};

export default Review;