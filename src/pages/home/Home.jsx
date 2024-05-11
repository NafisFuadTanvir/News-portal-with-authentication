import React from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className='font-bold font-poppins text-5xl'>This is home</h2>
        </div>
    );
};

export default Home;