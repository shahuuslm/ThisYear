import React from 'react';

const Card = ({name,details,imgLink,imgName}) => {
    return (
        <div class='flex flex-col gap-4 justify-center items-center py-2 bg-cyan-100 rounded-md shadow-sm shadow-cyan-900 hover:cursor-pointer'>
            <div>
                <img class='rounded-md' src={imgLink} alt={imgName} />
            </div>
            <div>
                <h1 class='text-3xl text-center font-bold text-cyan-950'>{name}</h1>
                <p class='text-lg font-medium  text-cyan-900 text-justify px-2 py-1'>{details}</p>
            </div>
        </div>
    );
};

export default Card;