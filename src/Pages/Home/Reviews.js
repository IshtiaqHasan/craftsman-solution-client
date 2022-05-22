import React from 'react';
import useReview from '../../hooks/useReview';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useReview([])
    return (
        <div >
            <div class="card-body">
                <h2 className='text-3xl text-center my-12 font-bold'>REVIEWED BY OUR CUSTOMERS</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;