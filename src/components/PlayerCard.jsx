import React from 'react';

export default function PlayerCard({ data,selectedPlayers }) {
    const { battingType, biddingPrice, role, image, name, country } = data;
    return (
        <div className="card rounded card-compact p-4 shadow-2xl">
            <figure className='border border-dashed rounded-2xl'>
                <img

                    className='w-full h-56 object-cover rounded-2xl p-2'
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body space-y-3">
                <div className="card-title flex items-center">
                <i className="fa-solid fa-user text-xl"></i>
                    {name}
                    </div>
                <div className='flex justify-between'>
                    <div className='flex gap-3 items-center'>
                    <i className="fa-solid fa-flag "></i>
                    <span>{country}</span>
                    </div>
                    <button className='bg-gray-200 py-2 px-2 rounded-md'>
                    {role}
                    </button>
                </div>
                <h3 className='font-bold'>Rating</h3>
                <hr />
                <div className='flex justify-between'>
                    <h3 className=' font-bold'>{battingType}</h3>
                    <span className='text-gray-500'>{battingType}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span>Price: ${biddingPrice}</span>
                    <button className="bg-gray-200 py-2 px-2 rounded-md hover:bg-yellowColors"
                    onClick={()=>{selectedPlayers(data)}}
                    >Choose Player</button>
                </div>
            </div>
        </div>
    );
}
