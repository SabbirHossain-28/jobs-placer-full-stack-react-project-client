import { useEffect, useState } from "react";
import useAuth from "../../Auth/AuthHook/useAuth";
import useAxiosSecure from "../../AxiosHook/useAxiosSecure";

const AppliedJobs = () => {
  const { user } = useAuth();
  const [appliedJobsData, setAppliedJobsData] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const axiosSecure = useAxiosSecure();

  console.log(user);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(`/application?email=${user.email}&filter=${filterCategory}`);
      setAppliedJobsData(data);
    };
    getData();
  }, [user, axiosSecure, filterCategory]);
  console.log(appliedJobsData);

  return (
    <div className="shadow-xl  bg-slate-200 dark:bg-gray-900 py-14 px-8">
      <div className="text-center mb-12 text-gray-800 dark:text-gray-400">
        <h2 className="text-4xl font-lora  font-semibold">
          Track Your Career Journey | Jobs Placer
        </h2>
        <p className="font-inter mt-4">
          Dive into the details of the jobs you have applied for on Jobs Placer,
          your gateway to diverse opportunities in on-site, remote, part-time,
          and hybrid categories. Keep tabs on your career progress and explore
          new horizons with ease.
        </p>
      </div>
      <div className="border-black dark:border-white  p-4">
        <div className="my-2">
          <select onChange={e=>setFilterCategory(e.target.value)} value={filterCategory} className="w-full p-2" name="category" id="">
            <option value="">All Applied Jobs</option>
            <option value="On Site">On Site</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Part-Time">Part-Time</option>
          </select>
        </div>
        <div className="overflow-x-auto font-inter">
          <table className="table text-gray-800 dark:text-gray-400">
            {/* head */}
            <thead className="text-gray-800 dark:text-gray-400">
              <tr className="border-black dark:border-white">
                <th></th>
                <th className="border-black dark:border-white">Job Title</th>
                <th className="border-black dark:border-white">Job Category</th>
                <th className="border-black dark:border-white">Employer Email</th>
                <th className="border-black dark:border-white">Applicant Email</th>
                <th className="border-black dark:border-white">Salary</th>
                <th className="border-black dark:border-white">Posting Date</th>
                <th className="border-black dark:border-white">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {appliedJobsData.map((listData, idx) => (
                <tr key={idx}>
                  <th className="border-black dark:border-white">{idx + 1}</th>
                  <td className="border-black dark:border-white">{listData.jobTitle}</td>
                  <td className="border-black dark:border-white">{listData.jobCategory}</td>
                  <td className="border-black dark:border-white">{listData.jobPosterEmail}</td>
                  <td className="border-black dark:border-white">{listData.userEmail}</td>
                  <td className="border-black dark:border-white">{listData.salaryRange}</td>
                  <td className="border-black dark:border-white">{listData.jobPostingDate}</td>
                  <td className="border-black dark:border-white">
                    {new Date(
                      listData.applicationDeadline
                    ).toLocaleDateString()}
                  </td>
                  {/* <td className="border">
                    <Link to={`/updateJobData/${listData._id}`}>
                      <button className="btn btn-xs bg-green-500">
                        <LuClipboardEdit className="text-xl"></LuClipboardEdit>
                      </button>
                    </Link>
                  </td>
                  <td className="border">
                    <button
                    //   onClick={() => handleDelete(`${listData._id}`)}
                      className="btn btn-xs bg-red-500"
                    >
                      <MdDeleteForever className="text-xl"></MdDeleteForever>
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
