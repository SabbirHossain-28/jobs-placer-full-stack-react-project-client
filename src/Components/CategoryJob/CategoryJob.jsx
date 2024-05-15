import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import loadingLottie from "../../../public/loading-lottie.json";

const CategoryJob = () => {
  const [jobsData, setJobsData] = useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_LOCAL_URL}/jobs`);
      setJobsData(data);
      setLoading(false)
    };
    getData();
  }, []);
  // console.log(jobsData);
  if(loading){
    return <div className="  flex items-center justify-center"><Lottie style={{ width: "300px" }} animationData={loadingLottie}></Lottie></div>
  }
  return (
    <div className="max-w-7xl mx-auto py-16">
      <div className="mb-6 text-center">
        <h2 className="text-5xl font-lora font-bold text-teal-700 mb-4">
          Discover Your Perfect Fit
        </h2>
        <p className="font-inter text-gray-500">
          Welcome to Our Job by Category section! Discover exciting career
          opportunities tailored to your preferences with our intuitive tab
          system. Dive into various job types, including On-Site Jobs, Remote
          Jobs, Hybrid Jobs, and Part-Time Jobs, each offering unique benefits
          to suit your lifestyle and career goals.
        </p>
      </div>
      <Tabs>
        <div className="text-center font-inter text-xs lg:text-xl font-semibold text-gray-500">
          <TabList>
            <Tab selectedClassName="bg-[#74ee7a] rounded">On-Site Job</Tab>
            <Tab selectedClassName="bg-[#74ee7a] rounded">Remote Job</Tab>
            <Tab selectedClassName="bg-[#74ee7a] rounded">Hybrid Job</Tab>
            <Tab selectedClassName="bg-[#74ee7a] rounded">Part-Time Job</Tab>
            <Tab selectedClassName="bg-[#74ee7a] rounded">All Jobs</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {jobsData
              .filter((data) => data.jobCategory === "On Site")
              .map((data, idx) => (
                <CategoryCard key={idx} data={data}></CategoryCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {jobsData
              .filter((data) => data.jobCategory === "Remote")
              .map((data, idx) => (
                <CategoryCard key={idx} data={data}></CategoryCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {jobsData
              .filter((data) => data.jobCategory === "Hybrid")
              .map((data, idx) => (
                <CategoryCard key={idx} data={data}></CategoryCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {jobsData
              .filter((data) => data.jobCategory === "Part-Time")
              .map((data, idx) => (
                <CategoryCard key={idx} data={data}></CategoryCard>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {jobsData.map((data, idx) => (
              <CategoryCard key={idx} data={data}></CategoryCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryJob;
