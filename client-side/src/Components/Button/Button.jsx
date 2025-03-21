import React from 'react';

const Button = ({text}) => {
    return (
        <div>
            <button className="font-medium text-amber-100 bg-amber-950 px-2 py-1 rounded-sm w-full transition ease-in-out hover:scale-90 hover:cursor-pointer ">
                <p>{text}</p>
            </button>
        </div>
    );
};

export default Button;