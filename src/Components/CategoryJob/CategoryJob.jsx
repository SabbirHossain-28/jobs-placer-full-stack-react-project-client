import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import CategoryCard from "./CategoryCard";

const CategoryJob = () => {
  return (
    <div className="max-w-7xl mx-auto text-center">
        <div className="mb-6">
            <h2 className="text-5xl font-lora font-bold text-teal-700 mb-4">Discover Your Perfect Fit</h2>
            <p className="font-inter text-gray-500">Welcome to Our Job by Category section! Discover exciting career opportunities tailored to your preferences with our intuitive tab system. Dive into various job types, including On-Site Jobs, Remote Jobs, Hybrid Jobs, and Part-Time Jobs, each offering unique benefits to suit your lifestyle and career goals.</p>
        </div>
      <Tabs>
        <div className="text-center font-inter text-xl font-semibold">
        <TabList>
          <Tab selectedClassName="bg-[#74ee7a] rounded">On-Site Job</Tab>
          <Tab selectedClassName="bg-[#74ee7a] rounded">Remote Job</Tab>
          <Tab selectedClassName="bg-[#74ee7a] rounded">Hybrid Job</Tab>
          <Tab selectedClassName="bg-[#74ee7a] rounded">Part-Time Job</Tab>
          <Tab selectedClassName="bg-[#74ee7a] rounded">All Jobs</Tab>
        </TabList>
        </div>

        <TabPanel>
          <CategoryCard></CategoryCard>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryJob;
