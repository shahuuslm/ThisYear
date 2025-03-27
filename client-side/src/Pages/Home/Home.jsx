import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
// import ProfileCard from "../../Components/ProfileCard/ProfileCard";

const Home = () => {
    return (
        <div>
            <Banner title={'Your Gateway to Unforgettable Adventures!'} description={'Explore the world with ease! Book unforgettable trips, hassle-free flights, and dream vacations with our expert travel planners.'}></Banner>
            {/* <ProfileCard name={"Shahriyar Islam Monir"} occupation={"Web Developer"} bio={"I believe Keys of keyboard are love of life."}></ProfileCard> */}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 mx-16 md:mx-32 gap-6">
                <div class="lg:col-span-2 md:col-span-2">
                    <Card name={'Sajek'} details={"Sajek Valley, the Roof of Rangamati, offers stunning hills, floating clouds, and breathtaking sunrises. It's a perfect escape for nature lovers and adventure seekers."} imgLink={'https://i.ibb.co.com/KzSdS7JB/sajekjpg.jpg'}></Card>
                </div>
                <div class="lg:mt-24">
                    <Card name={'Kuakata'} details={"Kuakata, the Daughter of the Sea, is a serene beach in Bangladesh where you can enjoy both sunrise and sunset over the ocean. Its calm waves and natural beauty make it a perfect seaside getaway."} imgLink={'https://i.ibb.co.com/mrr8HpTz/kuakata.jpg'}></Card>
                </div>
                <div class="lg:-mt-48">
                    <Card name={'Nilgiri'} details={"Nilgiri, one of Bangladesh's highest peaks, offers breathtaking views of rolling clouds and green hills. It's a perfect spot for peaceful retreats and stunning sunrises."} imgLink={'https://i.ibb.co.com/j9ZDbGPq/nilgirijpg.jpg'}></Card>
                </div>
                <div class="lg:-mt-48 ">
                    <Card name={'Bandarban'} details={"Bandarban, the land of hills and clouds, offers breathtaking landscapes, waterfalls, and diverse tribal cultures. It's a paradise for adventure seekers and nature lovers."} imgLink={'https://i.ibb.co.com/PGfCHRwk/bandarbanjpg.jpg'}></Card>
                </div>
                <div class="lg:row-span-2">
                    <Card name={'Cha Bagan'} details={"Cha Bagan, or tea gardens, offer lush green landscapes and a peaceful atmosphere, perfect for nature lovers. The fresh aroma of tea leaves and rolling hills create a refreshing escape."} imgLink={'https://i.ibb.co.com/MkN1gC0S/cha-baganjpg.jpg'}></Card>
                </div>
                <div class="md:col-span-2">
                    <Card name={'Coxs railway station'} details={"Cox's Bazar Railway Station is a newly built transportation hub connecting travelers to the world's longest sea beach. It offers a modern and convenient way to reach Cox’s Bazar by train."} imgLink={'https://i.ibb.co.com/prwmpDbX/railwayjpg.jpg'}></Card>
                </div>
            </div>
        </div>

    );
};

export default Home;