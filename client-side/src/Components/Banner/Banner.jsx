import Button from "../Button/Button";

const Banner = ({ title, description }) => {
    return (
        <div>
            <div class="px-6 md:px-8 lg:px-12 mt-2  flex justify-center">
                <div class=" relative w-full min-h-2/3 md:min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co.com/WWZfGgyv/Travel-Agencies.jpg)' }}>
                <div class="absolute inset-0 bg-blue-950 opacity-60 z-0"></div>
                    <div class='relative flex flex-col ml-8 mt-4 gap-2 md:mt-16 md:ml-16 mb-6 md:gap-8 z-10'>
                        <h1 class="text-3xl md:text-5xl lg:text-6xl text-blue-200 font-bold  shadow-red-800">{title}</h1>
                        <p class="w-3/4 text-md md:text-2xl font-bold  text-blue-100">{description}</p>
                        <div class="">
                            <Button text={"Book Now"}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;