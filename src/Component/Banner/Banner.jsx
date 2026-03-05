import React from 'react';
import vector1 from '../../assets/vector1.png'
const Banner = ({inProgress , resolved}) => {
    return (
        <div className="bg-gray-200 p-6">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-44 rounded-lg overflow-hidden text-white 
                        bg-gradient-to-r from-indigo-600 to-purple-700 
                        flex flex-col items-center justify-center">
                    <img
                        src={vector1}
                        alt=""
                        className="absolute left-0 top-0 h-full opacity-80 brightness-110 pointer-events-none"
                    />
                    <img
                        src={vector1}
                        alt=""
                        className="absolute right-0 top-0 h-full opacity-80 brightness-110 scale-x-[-1] pointer-events-none"
                    />
                    <div className="relative text-center">
                        <h3 className="text-lg font-medium mb-3">In-Progress</h3>
                        <p className="text-6xl font-semibold">{inProgress}</p>
                    </div>
                </div>
                <div className="relative h-44 rounded-lg overflow-hidden text-white 
                        bg-gradient-to-r from-green-400 to-teal-600 
                        flex flex-col items-center justify-center">
                    <img
                        src={vector1}
                        alt=""
                        className="absolute left-0 top-0 h-full opacity-80 brightness-110 pointer-events-none"
                    />
                    <img
                        src={vector1}
                        alt=""
                        className="absolute right-0 top-0 h-full opacity-80 brightness-110 scale-x-[-1] pointer-events-none"
                    />
                    <div className="relative text-center">
                        <h3 className="text-lg font-medium mb-3">Resolved</h3>
                        <p className="text-6xl font-semibold">{resolved}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;