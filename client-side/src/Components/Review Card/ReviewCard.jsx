
const ReviewCard = ({review, name}) => {
    return (
        <div>
            <div class="  mx-16 md:mx-0 bg-blue-300 mt-4 px-8 py-4 rounded-full border-2 border-blue-950 ">
                <p class="text-center font-bold text-md text-blue-950">{review}</p>
                <h1 class="text-right font-bold text-gray-800 mt-2">{name}</h1>
            </div>
        </div>
    );
};

export default ReviewCard;