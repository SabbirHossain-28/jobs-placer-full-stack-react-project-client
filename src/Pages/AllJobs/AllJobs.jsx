import axios from "axios";
import { useEffect, useState } from "react";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";

const AllJobs = () => {
  const [allJobsData, setALLJobsData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [search,setSearch]=useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_LOCAL_URL
        }/allJobs?page=${currentPage}&size=${itemsPerPage}&search=${search}`
      );
      setALLJobsData(data);
    };
    getData();
  }, [currentPage, itemsPerPage,search]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_LOCAL_URL}/countedJobs?search=${search}`
      );
      setCount(data.result);
    };
    getData();
  }, [search]);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [
    ...Array(numberOfPages)
      .keys()
      .map((key) => key + 1),
  ];

  const handleSearch=(e)=>{
    e.preventDefault();
    const text=e.target.search.value
    setSearch(text);
  }

  const handleCurrentPage = (value) => {
    setCurrentPage(value);
  };

  return (
    <div className=" shadow-xl   bg-slate-200 dark:bg-gray-900 py-14 px-12">
      <div className="border-black border-2 p-8">
      <div className="text-center  mb-12 text-gray-800 dark:text-gray-400">
        <h2 className="text-4xl font-lora  font-semibold mb-4">
          Manage Your Job Listings on Jobs Placer | Jobs Placer
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
      <div className=" max-w-7xl mx-auto border-black dark:border-white border-2  p-4">
        <div className="my-2">
          <div className="relative border-black dark:border-white border-2 p-2 rounded-lg">
            <form  onSubmit={handleSearch}>
            <label htmlFor="Search" className="sr-only">
              {" "}
              Search{" "}
            </label>

            <input
              type="text"
              name="search"
              id="Search"
              placeholder="Search for..."
              className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              {/* <button
                type="button"
                className="text-gray-600 hover:text-gray-700"
              >
                <span className="sr-only">Search</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button> */}
              <input className="border mr-8 rounded-lg bg-green-500 text-white p-1" type="submit" value="search" />
            </span>
            </form>
          </div>
        </div>
        <div className="overflow-x-auto border-black dark:border-white border-2 rounded-lg">
          <table className="table text-gray-800 dark:text-gray-400">
            {/* head */}
            <thead className="text-gray-800 dark:text-gray-400">
              <tr className="border-black dark:border-white border">
                <th></th>
                <th className="border-black dark:border-white border">Job Title</th>
                <th className="border-black dark:border-white border">Salary</th>
                <th className="border-black dark:border-white border">Posting Date</th>
                <th className="border-black dark:border-white border">Deadline</th>
                <th className="border-black dark:border-white border">Details</th>
              </tr>
            </thead>
            <tbody>
              {allJobsData.map((listData, idx) => (
                <tr key={idx}>
                  <th className="border-black dark:border-white border">{idx + 1}</th>
                  <td className="border-black dark:border-white border">{listData.jobTitle}</td>
                  <td className="border-black dark:border-white border">{listData.salaryRange}($)</td>
                  <td className="border-black dark:border-white border">{listData.jobPostingDate}</td>
                  <td className="border-black dark:border-white border">
                    {new Date(
                      listData.applicationDeadline
                    ).toLocaleDateString()}
                  </td>
                  <td className="border-black dark:border-white border">
                    <Link to={`/jobDetails/${listData._id}`}>
                      <button className="btn btn-xs bg-green-500">
                        <TbListDetails className="text-xl text-black"></TbListDetails>
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
              disabled={currentPage === 1}
              onClick={() => handleCurrentPage(currentPage - 1)}
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
            {pages.map((page, idx) => (
              <button
                onClick={() => handleCurrentPage(page)}
                key={idx}
                className={`${
                  currentPage === page
                    ? "bg-[#5ad560] text-black dark:text-white"
                    : "bg-white text-gray-900 dark:text-white"
                }block size-8 rounded border border-gray-100  text-center leading-8 `}
              >
                {page}
              </button>
            ))}
          </li>

          <li>
            <button
              disabled={currentPage === numberOfPages}
              onClick={() => handleCurrentPage(currentPage + 1)}
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
    </div>
  );
};

export default AllJobs;
