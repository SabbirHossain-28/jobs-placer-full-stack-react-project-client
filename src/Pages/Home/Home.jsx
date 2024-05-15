import Banner from "../../Components/Banner/Banner";
import CategoryJob from "../../Components/CategoryJob/CategoryJob";

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <div className="bg-slate-200 dark:bg-gray-800">
            <CategoryJob></CategoryJob>
            </div>
        </div>
    );
};

export default Home;