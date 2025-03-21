import React from 'react';
import Button from '../Button/Button';

const ProfileCard = ({name, occupation, bio}) => {
    return (
        <div className="flex justify-center">
            <div className="flex justify-center mt-10 bg-amber-100 shadow-lg shadow-amber-950 rounded-lg">
                <div className="border-0 border-amber-600 w-96 h-60">
                    <div className="flex items-center justify-center border-0 border-amber-500 h-32 mt-4 overflow-hidden">
                        <img className="w-32 object-cover mt-3" src="https://i.ibb.co.com/n81m9fsd/MehHC.jpg" alt="" />
                    </div>
                    <div className="flex mx-6 mt-2 gap-6">
                        <div className=" ">
                            <h1 className="font-bold text-amber-950">{name}</h1>
                            <p className="font-medium text-amber-950">{occupation}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-extralight text-amber-950 leading-5">{bio}</p>
                            <Button text={"Follow"}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;