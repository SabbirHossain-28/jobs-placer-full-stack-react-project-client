import { GrWorkshop } from "react-icons/gr";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const AddJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="my-12">
      <div className="max-w-7xl mx-auto border  shadow-xl   bg-slate-200 dark:bg-gray-900">
        <div className=" flex flex-col  border  justify-center items-center">
          <div className="p-6 ">
            <div className="flex justify-center mx-auto">
              <GrWorkshop className="text-5xl text-[#11B719]"></GrWorkshop>
              <h4 className="text-5xl text-teal-800 font-lora font-bold">
                Jobs<span className="text-[#11B719]">Placer</span>
              </h4>
            </div>
            <div className="flex items-center justify-center mt-4">
              <p className="font-medium text-center text-gray-800 dark:text-gray-400">
                Welcome to Job Placer – your gateway to career opportunities!
                Log in to access exclusive job listings, personalized
                recommendations, and tools to streamline your job search.
              </p>
            </div>
          </div>
        </div>
        <div className="  p-4">
          <section className="bg-slate-200 dark:bg-gray-900">
            <div className="container flex flex-col items-center justify-center  px-6 mx-auto">
              <form className="w-full max-w-xl">
                <div className="mt-6">
                  <input
                    type="url"
                    name="url"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Photo URL of the Job Banner"
                    // {...register("email", { required: true })}
                  />
                </div>
                <div className="mt-6">
                  <input
                    type="text"
                    name="title"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Job Title"
                    // {...register("email", { required: true })}
                  />
                </div>
                <div className="mt-6">
                  <input
                    type="text"
                    name="name"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Your Name"
                    // {...register("email", { required: true })}
                  />
                </div>
                <div className="mt-6">
                  <input
                    type="email"
                    name="email"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Your Email"
                    // {...register("email", { required: true })}
                  />
                </div>
                <div className="mt-6">
                  <select
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    name="category"
                    // {...register("category", { required: true })}
                  >
                    <option value="">Select Job Category</option>
                    <option value="Remote">Remote</option>
                    <option value="On Site">On Site</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Part-Time">Part-Time</option>
                  </select>
                  {/* {errors.category && (
                    <span className="text-red-500">This field is required</span>
                  )} */}
                </div>
                <div className="mt-6">
                  <select
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    name="salary"
                    // {...register("category", { required: true })}
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
                  {/* {errors.category && (
                    <span className="text-red-500">This field is required</span>
                  )} */}
                </div>
                <div className="mt-6">
                  <input
                    type="text"
                    name="description"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Job Description"
                    // {...register("email", { required: true })}
                  />
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <div className="w-1/2">
                  <span className=" text-gray-700 dark:text-white text-lg block">
                      Job Posting Date:
                    </span>
                    <input
                      type="date"
                      name="posting_date"
                      className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Posting Date"
                      // {...register("email", { required: true })}
                    />
                  </div>
                  <div>
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
                <span className=" text-gray-700 dark:text-white text-lg block">
                      Application Deadline:
                    </span>
                  <input
                    type="number"
                    name="applicants"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 mt-1"
                    placeholder="Total Job Applicants"
                    value="0"
                    readOnly
                    // {...register("email", { required: true })}
                  />
                </div>
                <div className="mt-6">
                  <input
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50"
                    type="submit"
                    value="Add Job"
                  />

                  <p className="mt-6 text-sm text-center text-gray-400 font-lora">
                    Do not have an account yet?{" "}
                    <Link
                      to="/register"
                      className="text-[#11B719] focus:outline-none focus:underline hover:underline"
                    >
                      Register
                    </Link>
                    .
                  </p>
                </div>
              </form>
              {/* <div className="mt-3 ">
                <span className="relative flex justify-center mb-3">
                  <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

                  <span className="relative z-10 bg-white dark:bg-gray-900 text-gray-500 rounded-lg px-6 font-lora">
                    OR
                  </span>
                </span>
                <button
                  onClick={handleGoogleLogin}
                  className="bg-white flex items-center text-gray-700 dark:text-gray-300 justify-center gap-x-3 text-sm sm:text-base  dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5 w-full font-inter"
                >
                  <svg
                    className="w-5 h-5 sm:h-6 sm:w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3033_94454)">
                      <path
                        d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
                        fill="#EA4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3033_94454">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span>Log in with Google</span>
                </button>
              </div> */}
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
