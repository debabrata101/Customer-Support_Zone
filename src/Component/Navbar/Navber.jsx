import React from 'react';
import { GoPlus } from 'react-icons/go';

const Navber = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between items-center p-4">
         <div className='font-bold'>
            <h1>CS — Ticket System</h1>
         </div>
         <div className='flex items-center gap-4 '>
            <h1>Home</h1>
            <h1>FAQ</h1>
            <h1>Changelog</h1>
            <h1>Blog</h1>
            <h1>Download</h1>
            <h1>Contact</h1>
            <button className='flex items-center gap-2 bg-[#422AD5] rounded p-2 text-white'><GoPlus></GoPlus> New Ticket</button>
         </div>
        </div>
    );
};

export default Navber;