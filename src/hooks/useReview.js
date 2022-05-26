import React, { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://polar-lowlands-96437.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return [reviews, setReviews];
};

export default useReview;