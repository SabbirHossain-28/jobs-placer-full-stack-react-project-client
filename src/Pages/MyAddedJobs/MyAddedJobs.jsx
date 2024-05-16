import { useEffect, useState } from "react";
import useAuth from "../../Auth/AuthHook/useAuth";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../AxiosHook/useAxiosSecure";

const MyAddedJobs = () => {
  const { user } = useAuth();
  const [myAddedJobsData, setMyAddedJobsData] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axiosSecure(`/job?email=${user.email}`);
    setMyAddedJobsData(data);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_LOCAL_URL}/jobs/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your data has been deleted.",
                icon: "success",
              });
              getData();
            }
          });
      }
    });
  };

  return (
    <div className=" shadow-xl   bg-slate-200 dark:bg-gray-900 py-14 px-12">
      <div className=" max-w-7xl mx-auto text-center mb-12 text-gray-800 dark:text-gray-400">
        <h2 className="text-4xl font-lora mb-4  font-semibold">
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
      <div className="border-black dark:border-white border">
        <div className="overflow-x-auto ">
          <table className="table text-gray-800 dark:text-gray-400 ">
            {/* head */}
            <thead className="text-gray-800 dark:text-gray-400 ">
              <tr className="border-black dark:border-white border">
                <th></th>
                <th className="border-black dark:border-white border">Job Title</th>
                <th className="border-black dark:border-white border">Job Category</th>
                <th className="border-black dark:border-white border">User Name</th>
                <th className="border-black dark:border-white border">User Email</th>
                <th className="border-black dark:border-white border">Salary</th>
                <th className="border-black dark:border-white border">Posting Date</th>
                <th className="border-black dark:border-white border">Deadline</th>
                <th className="border-black dark:border-white border">Total Applicants</th>
                <th className="border-black dark:border-white border">Update</th>
                <th className="border-black dark:border-white border">Delete</th>
              </tr>
            </thead>
            <tbody>
              {myAddedJobsData.map((listData, idx) => (
                <tr key={idx}>
                  <th className="border-black dark:border-white border">{idx + 1}</th>
                  <td className="border-black dark:border-white border">{listData.jobTitle}</td>
                  <td className="border-black dark:border-white border">{listData.jobCategory}</td>
                  <td className="border-black dark:border-white border">{listData.jobPosterName}</td>
                  <td className="border-black dark:border-white border">{listData.jobPosterEmail}</td>
                  <td className="border-black dark:border-white border">{listData.salaryRange}</td>
                  <td className="border-black dark:border-white border">{listData.jobPostingDate}</td>
                  <td className="border-black dark:border-white border">
                    {new Date(
                      listData.applicationDeadline
                    ).toLocaleDateString()}
                  </td>
                  <td className="border-black dark:border-white border">{listData.jobApplicantsNumber}</td>
                  <td className="border-black dark:border-white border">
                    <Link to={`/updateJobData/${listData._id}`}>
                      <button className="btn btn-xs bg-green-500">
                        <LuClipboardEdit className="text-xl text-white"></LuClipboardEdit>
                      </button>
                    </Link>
                  </td>
                  <td className="border-black dark:border-white border">
                    <button
                      onClick={() => handleDelete(`${listData._id}`)}
                      className="btn btn-xs bg-red-500"
                    >
                      <MdDeleteForever className="text-xl text-white"></MdDeleteForever>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAddedJobs;
