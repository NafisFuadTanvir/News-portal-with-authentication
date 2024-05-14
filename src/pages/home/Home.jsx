import React from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/navbar/Navbar';
import Leftsidenav from '../shared/leftsidenav/Leftsidenav';
import Rightsidenav from '../shared/rightsidenav/Rightsidenav';
import Latestnews from './Latestnews';
import { useLoaderData } from 'react-router-dom';
import Newcard from './Newcard';

const Home = () => {
    const newses= useLoaderData();
    
    return (
        <div>
            <Header></Header>
            <Latestnews></Latestnews>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
             
             <div className=''>
                <Leftsidenav></Leftsidenav>
             </div>
             <div className='md:col-span-2'>
                {
                    newses.map((news)=> <Newcard key={news._id} news={news}></Newcard>)
                }
             </div>
             <div className=''>
                <Rightsidenav></Rightsidenav>
             </div>

            </div>
        </div>
    );
};

export default Home;