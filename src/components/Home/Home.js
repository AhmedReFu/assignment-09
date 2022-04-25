import React from 'react';
import pic from './image/book-motivition-pic.jpg';
import './Home.css'
import CardGroup from '../CardGroup/CardGroup';
const Home = () => {
    return (
        <div>
            <div className='d-flex align-items-center p-4'>
                <div className='container-halp'>
                    <img src={pic} alt="" />
                </div>
                <div className='container-halp fs-1'>
                    <h1>Best Book For MotiVation</h1>
                    <h2>You must should read it....</h2>
                    <p>For over 60 years the rock-solid , time-tested advice in this book has carried thousands of now famous people up the ladder of success in their business and personal lives.</p>
                </div>
            </div>
            <div>
                <CardGroup></CardGroup>
            </div>
        </div>
    );
};

export default Home;