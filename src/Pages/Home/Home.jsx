import ClientsFeedBack from "../../ClientsFeedBack/ClientsFeedBack";
import Banner from "../../Components/Banner/Banner";
import CategoryJob from "../../Components/CategoryJob/CategoryJob";
import ContactUs from "../../Components/ContactUs/ContactUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="bg-slate-200 dark:bg-gray-800">
        <CategoryJob></CategoryJob>
        <ContactUs></ContactUs>
        <ClientsFeedBack></ClientsFeedBack>
      </div>
    </div>
  );
};

export default Home;
