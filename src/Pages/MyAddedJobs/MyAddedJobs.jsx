import { useEffect, useState } from "react";
import useAuth from "../../Auth/AuthHook/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import Swal from "sweetalert2";

const MyAddedJobs = () => {
  const { user } = useAuth();
  const [myAddedJobsData, setMyAddedJobsData] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_LOCAL_URL}/job?email=${user.email}`
    );
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
              getData()
            }
          });
      }
    });
  };

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
                <th className="border">Job Category</th>
                <th className="border">User Name</th>
                <th className="border">User Email</th>
                <th className="border">Salary</th>
                <th className="border">Posting Date</th>
                <th className="border">Deadline</th>
                <th className="border">Total Applicants</th>
                <th className="border">Update</th>
                <th className="border">Delete</th>
              </tr>
            </thead>
            <tbody>
              {myAddedJobsData.map((listData, idx) => (
                <tr key={idx}>
                  <th className="border">{idx + 1}</th>
                  <td className="border">{listData.jobTitle}</td>
                  <td className="border">{listData.jobCategory}</td>
                  <td className="border">{listData.loggedInUserName}</td>
                  <td className="border">{listData.loggedInUserEmail}</td>
                  <td className="border">{listData.salaryRange}</td>
                  <td className="border">{listData.jobPostingDate}</td>
                  <td className="border">
                    {new Date(
                      listData.applicationDeadline
                    ).toLocaleDateString()}
                  </td>
                  <td className="border">{listData.jobApplicantsNumber}</td>
                  <td className="border">
                    <Link to={`/updateJobData/${listData._id}`}>
                      <button className="btn btn-xs bg-green-500">
                        <LuClipboardEdit className="text-xl"></LuClipboardEdit>
                      </button>
                    </Link>
                  </td>
                  <td className="border">
                    <button
                      onClick={() => handleDelete(`${listData._id}`)}
                      className="btn btn-xs bg-red-500"
                    >
                      <MdDeleteForever className="text-xl"></MdDeleteForever>
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
