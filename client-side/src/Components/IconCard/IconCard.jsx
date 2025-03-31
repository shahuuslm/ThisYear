
const IconCard = ({ icon, title, description}) => {
    return (
        <div class="bg-blue-950 rounded-lg px-3 py-2 mt-8 ">
            <div class="flex items-center gap-2 text-xl font-bold text-blue-300">
                <p class="text-blue-400">{icon}</p>
                <h1>{title}</h1>
            </div>
            <p class="font-medium text-blue-200">{description}</p>
        </div>
    );
};

export default IconCard;