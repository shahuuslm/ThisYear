import React from 'react';

const Button = ({text}) => {
    return (
        <div class='drop-shadow-2xl shadow-black'>
            <button class="md:w-44 md:h-12 md:text-xl font-medium text-blue-100 bg-blue-950  px-2 py-1 rounded-sm transition ease-in-out hover:scale-90 hover:cursor-pointer ">
                {text}
            </button>
        </div>
    );
};

export default Button;