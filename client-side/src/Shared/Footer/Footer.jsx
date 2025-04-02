
const Footer = ({ title, callIcon, number, mail, mailIcon, fbIcon,
    instaIcon, youtubeIcon }) => {
        const year = new Date().getFullYear()
    return (
        <div>
            <div class="bg-slate-900 py-4 flex justify-around items-center ">
                <div class="">
                    <h1 class=" text-3xl pr-10 font-bold text-slate-400 text-center border-r-4 border-r-slate-300 rounded-br-full">{title}</h1>
                </div>
                {/* <hr class="w-20 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm" /> */}
                <div class="flex md:flex-row flex-col items-center gap-4 md:gap-20 mx-4 ">
                    <div class="">
                        <div class="flex items-center">
                            <a class="text-xl text-slate-500 font-medium">{callIcon}</a>
                            <a class="text-xl text-slate-400 font-medium">{number}</a>
                        </div>
                        <div class="flex items-center gap-1">
                            <a class="text-xl text-slate-500 font-medium">{mailIcon}</a>
                            <a class="text-xl text-slate-400 font-medium">{mail}</a>
                        </div>
                    </div>
                    <div class="flex gap-3">
                        <a class="text-4xl text-slate-500">{fbIcon}</a>
                        <a class="text-4xl text-slate-500">{instaIcon}</a>
                        <a class="text-4xl text-slate-500">{youtubeIcon}</a>
                    </div>
                </div>
            </div>
                <div class="bg-slate-400">
                    <p class="text-center py-2 text-md font-medium text-slate-900">Copyright Reserved@{year}</p>
                </div>
        </div>
    );
};

export default Footer;