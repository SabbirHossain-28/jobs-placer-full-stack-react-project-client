import { ToastContainer } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuth from "../../Auth/AuthHook/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useAuth();
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const onSubmit = (data) => {
    // console.table(data);
    const { url, title, category, salary, description, posting_date } = data;
    const addJobData = {
      jobBannerURL: url,
      jobTitle: title,
      jobPosterName: user?.displayName,
      jobPosterEmail: user?.email,
      jobCategory: category,
      salaryRange: salary,
      jobDescription: description,
      jobPostingDate: posting_date,
      applicationDeadline: startDate,
      jobApplicantsNumber: 0,
    };
    fetch(`${import.meta.env.VITE_LOCAL_URL}/jobs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addJobData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Welcome to JobsPlacer",
            text: "You are successfully login",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="">
      <div className=" shadow-xl p-12   bg-slate-200 dark:bg-gray-900">
        <div className=" flex flex-col  justify-center items-center">
          <div className="p-6 text-gray-800 dark:text-gray-400">
            <div className="flex justify-center mx-auto">
              {/* <GrWorkshop className="text-5xl text-[#11B719]"></GrWorkshop>
              <h4 className="text-5xl text-teal-800 font-lora font-bold">
                Jobs<span className="text-[#11B719]">Placer</span>
              </h4> */}
              <h2 className="text-4xl font-lora  font-semibold">
                Manage Your Job Listings on Jobs Placer | Jobs Placer
              </h2>
            </div>
            <div className="flex items-center justify-center mt-4">
              <p className=" text-center">
                Elevate your employer brand with our user-friendly Add Jobs
                interface. Effortlessly create captivating job postings that
                showcase your companies culture and values. Engage with
                prospective candidates and build a team that drives success.
              </p>
            </div>
          </div>
        </div>
        <div className="  p-4">
          <section className="bg-slate-200 dark:bg-gray-900">
            <div className="container flex flex-col items-center justify-center  px-6 mx-auto">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-4xl"
              >
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="mt-6 lg:w-1/2">
                    <span className=" text-gray-700 dark:text-white text-lg block">
                      Photo URL of the Job Banner
                    </span>
                    <input
                      type="url"
                      name="url"
                      className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mt-1"
                      placeholder="Photo URL of the Job Banner"
                      {...register("url", { required: true })}
                    />
                    {errors.url && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="mt-6 lg:w-1/2">
                    <span className=" text-gray-700 dark:text-white text-lg block">
                      Job Title
                    </span>
                    <input
                      type="text"
                      name="title"
                      className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mt-1"
                      placeholder="Job Title"
                      {...register("title", { required: true })}
                    />
                    {errors.title && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="mt-6 lg:w-1/2">
                    <span className=" text-gray-700 dark:text-white text-lg block">
                      Your Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={user?.displayName}
                      readOnly
                      className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mt-1"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mt-6 lg:w-1/2">
                    <span className=" text-gray-700 dark:text-white text-lg block">
                      Your Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={user?.email}
                      readOnly
                      className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mt-1"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="mt-6 lg:w-1/2">
                    <span className=" text-gray-700 dark:text-white text-lg block">
                      Select Job Category
                    </span>
                    <select
                      className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mt-1"
                      name="category"
                      {...register("category", { required: true })}
                    >
                      <option value="">Select Job Category</option>
                      <option value="Remote">Remote</option>
                      <option value="On Site">On Site</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="Part-Time">Part-Time</option>
                    </select>
                    {errors.category && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="mt-6 lg:w-1/2">
                    <span className=" text-gray-700 dark:text-white text-lg block">
                      Salary Range
                    </span>
                    <select
                      className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mt-1"
                      name="salary"
                      {...register("salary", { required: true })}
                    >
                      <option value="">Salary Range</option>
                      <option value="10000-20000">10000-20000</option>
                      <option value="20000-30000">20000-30000</option>
                      <option value="30000-50000">30000-50000</option>
                      <option value="50000-60000">50000-60000</option>
                      <option value="60000-70000">60000-70000</option>
                      <option value="70000-80000">70000-80000</option>
                      <option value="80000-90000">80000-90000</option>
                      <option value="90000-100000">90000-100000</option>
                    </select>
                    {errors.salary && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-2">
                  <div className="mt-6 lg:w-1/2">
                    <span className=" text-gray-700 dark:text-white text-lg block">
                      Job Description
                    </span>
                    <input
                      type="text"
                      name="description"
                      className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mt-1"
                      placeholder="Job Description"
                      {...register("description", { required: true })}
                    />
                    {errors.description && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="mt-6 lg:w-1/2">
                    <span className=" text-gray-700 dark:text-white text-lg block">
                      Total Applicants:
                    </span>
                    <input
                      type="number"
                      name="applicants"
                      value={0}
                      readOnly
                      className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mt-1"
                      placeholder="Total Job Applicants"

                      // {...register("applicants", { required: true })}
                    />
                  </div>
                </div>
                <div className="mt-6 flex flex-col lg:flex-row justify-between gap-2">
                  <div className="lg:w-1/2">
                    <span className=" text-gray-700 dark:text-white text-lg block">
                      Job Posting Date:
                    </span>
                    <input
                      type="date"
                      name="posting_date"
                      className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Posting Date"
                      {...register("posting_date", { required: true })}
                    />
                    {errors.description && (
                      <span className="text-red-500 block">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="lg:w-1/2">
                    <span className=" text-gray-700 dark:text-white text-lg block">
                      Application Deadline:
                    </span>
                    <DatePicker
                      className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-10 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mt-1"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <input
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50"
                    type="submit"
                    value="Add Job"
                  />
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      <ToastContainer
        style={{ width: "500px" }}
        position="top-right"
        theme="colored"
        autoClose={4000}
      />
    </div>
  );
};

export default AddJob;
