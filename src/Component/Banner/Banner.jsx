import React from 'react';
import vector1 from '../../assets/vector1.png'
const Banner = () => {
    return (
        <div className="bg-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* In-Progress Card */}
                <div className="relative h-44 rounded-lg overflow-hidden text-white 
                        bg-gradient-to-r from-indigo-600 to-purple-700 
                        flex flex-col items-center justify-center">

                    {/* Left Vector */}
                    <img
                        src={vector1}
                        alt=""
                        className="absolute left-0 top-0 h-full opacity-80 brightness-110 pointer-events-none"
                    />

                    {/* Right Vector (Flipped) */}
                    <img
                        src={vector1}
                        alt=""
                        className="absolute right-0 top-0 h-full opacity-80 brightness-110 scale-x-[-1] pointer-events-none"
                    />

                    {/* Content */}
                    <div className="relative text-center">
                        <h3 className="text-lg font-medium mb-3">In-Progress</h3>
                        <p className="text-6xl font-semibold">0</p>
                    </div>
                </div>

                {/* Resolved Card */}
                <div className="relative h-44 rounded-lg overflow-hidden text-white 
                        bg-gradient-to-r from-green-400 to-teal-600 
                        flex flex-col items-center justify-center">

                    {/* Left Vector */}
                    <img
                        src={vector1}
                        alt=""
                        className="absolute left-0 top-0 h-full opacity-80 brightness-110 pointer-events-none"
                    />

                    {/* Right Vector (Flipped) */}
                    <img
                        src={vector1}
                        alt=""
                        className="absolute right-0 top-0 h-full opacity-80 brightness-110 scale-x-[-1] pointer-events-none"
                    />

                    {/* Content */}
                    <div className="relative text-center">
                        <h3 className="text-lg font-medium mb-3">Resolved</h3>
                        <p className="text-6xl font-semibold">0</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;