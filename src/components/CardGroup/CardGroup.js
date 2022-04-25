/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../Hooks/useReview';
import Card from '../Card/Card';

const CardGroup = () => {
    const [reviews, setReview] = useReview();

    const navigate = useNavigate();

    const reviewsnavigate = () => {
        const path = `/reviews`;
        navigate(path)
    }
    return (
        <div className='text-center m-4'>
            <h1 className='text-center'>Reviews :(6) Fore more... just click the button</h1>
            <div className='d-flex justify-content-center p-4'>
                {
                    reviews.slice(0, 3).map(review =>
                        <Card
                            id={review.id}
                            review={review}
                        >
                        </Card>)
                }
            </div>
            <button onClick={reviewsnavigate} type="button" class="btn btn-primary btn-lg">Go For More Reviews</button>
        </div >
    );
};

export default CardGroup;