import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Sidebar from '../../component/Sidebar/Sidebar';
import Homepage from '../Homepage/Homepage';
import Profile from '../Profile/Profile';

const Router = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-[20%] border border-1-slate-5000'>
                    <Sidebar />
                </div>
                <div className='w-full'>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/username" element={<Profile />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Router;
