import React from 'react';
import './Card.css'
const Card = (props) => {
    const { name, review, ratings } = props.review;
    return (
        <div className='row row-cols-1 row-cols-md-3 g-4'>
            <div class="cards mx-3">
                <div class="card-body ">
                    <h5 class="card-title">Name: {name}</h5>
                    <p class="card-text">Review: {review}</p>
                    <p class="card-text">Ratings: {ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;