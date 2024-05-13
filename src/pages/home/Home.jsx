import React from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/navbar/Navbar';
import Leftsidenav from '../shared/leftsidenav/Leftsidenav';
import Rightsidenav from '../shared/rightsidenav/Rightsidenav';
import Latestnews from './Latestnews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Latestnews></Latestnews>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
             
             <div className='border'>
                <Leftsidenav></Leftsidenav>
             </div>
             <div className='md:col-span-2 border '>
                <h2>The news are coming here</h2>
             </div>
             <div className=''>
                <Rightsidenav></Rightsidenav>
             </div>

            </div>
        </div>
    );
};

export default Home;