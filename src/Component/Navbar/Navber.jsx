import React from 'react';
import { GoPlus } from 'react-icons/go';

const Navber = () => {
    return (

        <div className="bg-white shadow-sm">
            <div className="flex justify-between items-center p-4 max-w-[1200px] mx-auto">
                <div className="font-bold text-lg">
                    <h1>CS — Ticket System</h1>
                </div>
                <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
                    <a href="#" className="hover:text-[#422AD5] transition">Home</a>
                    <a href="#" className="hover:text-[#422AD5] transition">FAQ</a>
                    <a href="#" className="hover:text-[#422AD5] transition">Changelog</a>
                    <a href="#" className="hover:text-[#422AD5] transition">Blog</a>
                    <a href="#" className="hover:text-[#422AD5] transition">Download</a>
                    <a href="#" className="hover:text-[#422AD5] transition">Contact</a>

                    <button className="flex items-center gap-2 bg-[#422AD5] hover:bg-[#341bb3] transition text-white px-4 py-2 rounded-md">
                        <GoPlus />
                        New Ticket
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navber;