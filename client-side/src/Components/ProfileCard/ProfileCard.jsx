import React from 'react';
import Button from '../Button/Button';

const ProfileCard = ({name, occupation, bio}) => {
    return (
        <div class="flex justify-center">
            <div class="flex justify-center mt-10 bg-amber-100 shadow-lg shadow-amber-950 rounded-lg">
                <div class="border-0 border-amber-600 w-96 h-60">
                    <div class="flex items-center justify-center border-0 border-amber-500 h-32 mt-4 overflow-hidden">
                        <img class="w-32 object-cover mt-3" src="https://i.ibb.co.com/n81m9fsd/MehHC.jpg" alt="" />
                    </div>
                    <div class="flex mx-6 mt-2 gap-6">
                        <div class=" ">
                            <h1 class="font-bold text-amber-950">{name}</h1>
                            <p class="font-medium text-amber-950">{occupation}</p>
                        </div>
                        <div class="flex flex-col gap-1">
                            <p class="font-extralight text-amber-950 leading-5">{bio}</p>
                            <Button text={"Follow"}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;