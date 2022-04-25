import React from 'react';
import useReview from '../../Hooks/useReview';
import Card from '../Card/Card';

const Reviews = () => {
    const [reviews] = useReview();
    return (
        <div className='d-flex justify-between items-end'>
            {
                reviews.map(review => <Card key={review.id} review={review} ></Card>)
            }
        </div>
    );
};

export default Reviews;