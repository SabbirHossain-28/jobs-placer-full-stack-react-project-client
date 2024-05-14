import axios from "axios";
import { useEffect, useState } from "react";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const AllJobs = () => {
    const [allJobsData, setALLJobsData] = useState([]);
    const [itemsPerPage,setItemsPerPage]=useState(5);
    const [currentPage,setCurrentPage]=useState(1)
    const [count,setCount]=useState(0)

    
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_LOCAL_URL}/allJobs?page=${currentPage}&size=${itemsPerPage}`);
        setALLJobsData(data);
      };
      getData();
    }, [currentPage,itemsPerPage]);
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_LOCAL_URL}/countedJobs`);
        setCount(data.result)
      };
      getData();
    }, []);
    // console.log(count);
    const numberOfPages=Math.ceil(count/itemsPerPage)
    const pages=[...Array(numberOfPages).keys().map(key=>key+1)];

    const handleCurrentPage=value=>{
      setCurrentPage(value)
    }

    return (
        <div className="max-w-7xl mx-auto mb-12 mt-12 shadow-xl   bg-slate-200 dark:bg-gray-900 py-14 px-8">
      <div className="text-center mb-12 text-gray-800 dark:text-gray-400">
        <h2 className="text-4xl font-lora  font-semibold">
          Manage Your Job Listings on Jobs Placer
        </h2>
        <p>
          Welcome to your personal job management page on Jobs Placer! Here, you
          have full control over the job listings you have added to our
          platform. Whether you are looking to update job details, delete
          outdated listings, or refine your job offerings, this page is your
          go-to destination. Explore and manage your on-site, remote, part-time,
          and hybrid job listings with ease. Keep your job postings up-to-date
          and attract the best talent effortlessly. Jobs Placer empowers you to
          streamline your hiring process and connect with top talent seamlessly.
          Start managing your job listings now and take your recruitment efforts
          to the next level
        </p>
      </div>
      <div className="border  p-4">
        <div className="overflow-x-auto ">
          <table className="table text-gray-800 dark:text-gray-400">
            {/* head */}
            <thead className="text-gray-800 dark:text-gray-400">
              <tr className="border">
                <th></th>
                <th className="border">Job Title</th>
                <th className="border">Salary</th>
                <th className="border">Posting Date</th>
                <th className="border">Deadline</th>
                <th className="border">Details</th>
              </tr>
            </thead>
            <tbody>
              {allJobsData.map((listData, idx) => (
                <tr key={idx}>
                  <th className="border">{idx + 1}</th>
                  <td className="border">{listData.jobTitle}</td>
                  <td className="border">{listData.salaryRange}</td>
                  <td className="border">{listData.jobPostingDate}</td>
                  <td className="border">
                    {new Date(
                      listData.applicationDeadline
                    ).toLocaleDateString()}
                  </td>
                  <td className="border">
                    <Link to={`/jobDetails/${listData._id}`}>
                      <button className="btn btn-xs bg-green-500">
                        <TbListDetails className="text-xl"></TbListDetails>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
<ol className="flex justify-center gap-1 text-xs font-medium mt-4">
  <li>
    <button
    disabled={currentPage===1}
    onClick={()=>handleCurrentPage(currentPage-1)}
      className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
    >
      <span className="sr-only">Prev Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </li>

  <li className="flex gap-2">
    {
      pages.map((page,idx)=><button onClick={()=>handleCurrentPage(page)} key={idx}
        className={`${currentPage===page?"bg-[#5ad560] text-white":"bg-white text-gray-900"}block size-8 rounded border border-gray-100  text-center leading-8 `}
      >
        {page}
      </button>)
    }
    
  </li>

  

  <li>
    <button
    disabled={currentPage===numberOfPages}
    onClick={()=>handleCurrentPage(currentPage+1)}
      className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
    >
      <span className="sr-only">Next Page</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </li>
</ol>
      </div>
    </div>
    );
};

export default AllJobs;