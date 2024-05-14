import { useEffect, useState } from "react";
import useAuth from "../../Auth/AuthHook/useAuth";
import useAxiosSecure from "../../AxiosHook/useAxiosSecure";

const AppliedJobs = () => {
  const { user } = useAuth();
  const [appliedJobsData, setAppliedJobsData] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(`/application?email=${user.email}`);
      setAppliedJobsData(data);
    };
    getData();
  }, [user, axiosSecure, filterCategory]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(
        `/categoryFilter?filter=${filterCategory}`
      );
      setAppliedJobsData(data);
    };
    getData();
  }, [user, axiosSecure, filterCategory]);
  console.log(appliedJobsData);

  return (
    <div className="max-w-7xl mx-auto mb-12 mt-12 shadow-xl   bg-slate-200 dark:bg-gray-900 py-14 px-8">
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
      <div className="border  p-4">
        <div className="my-2">
          <select onChange={e=>setFilterCategory(e.target.value)} value={filterCategory} className="w-full p-2" name="category" id="">
            <option value="">Select Category For Filter</option>
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
              <tr className="border">
                <th></th>
                <th className="border">Job Title</th>
                <th className="border">Job Category</th>
                <th className="border">User Email</th>
                <th className="border">Salary</th>
                <th className="border">Posting Date</th>
                <th className="border">Deadline</th>
                <th className="border">Total Applicants</th>
              </tr>
            </thead>
            <tbody>
              {appliedJobsData.map((listData, idx) => (
                <tr key={idx}>
                  <th className="border">{idx + 1}</th>
                  <td className="border">{listData.jobTitle}</td>
                  <td className="border">{listData.jobCategory}</td>
                  <td className="border">{listData.loggedInUserEmail}</td>
                  <td className="border">{listData.salaryRange}</td>
                  <td className="border">{listData.jobPostingDate}</td>
                  <td className="border">
                    {new Date(
                      listData.applicationDeadline
                    ).toLocaleDateString()}
                  </td>
                  <td className="border">{listData.jobApplicantsNumber}</td>
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
