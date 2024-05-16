import { useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Auth/AuthHook/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const JobDetails = () => {
  const data = useLoaderData();
  const { user } = useAuth();
  const toastId = useRef();
  const navigate = useNavigate();
  const { email } = user;
  const {
    _id,
    jobTitle,
    jobDescription,
    jobBannerURL,
    salaryRange,
    jobApplicantsNumber,
    jobPosterEmail,
    jobPostingDate,
    applicationDeadline,
    jobCategory,
  } = data;

  const jobId = _id;
  const userEmail = email;

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const onSubmit = (data) => {
    const { url } = data;

    const applicationData = {
      jobId,
      userEmail,
      jobPosterEmail,
      url,
      jobPostingDate,
      applicationDeadline,
      jobCategory,
      jobTitle,
      salaryRange,
      jobApplicantsNumber,
    };

    const currentDate = new Date();
    if (currentDate > new Date(applicationDeadline)) {
      toast.error(
        "The application deadline has passed. You cannot apply for this job."
      );
      return;
    }
    console.table(applicationData);
    if (userEmail === jobPosterEmail && !toast.isActive(toastId.current)) {
      return (toast.current = toast.error("You are not eligible to apply"));
    }

    fetch(`${import.meta.env.VITE_LOCAL_URL}/applications`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Application Submited",
            text: "Your application is submited successfully",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok",
          });
          navigate("/appliedJobs");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <section className=" py-12 px-12 bg-slate-200 dark:bg-gray-800">
        <div className="border-black border-2 overflow-hidden bg-slate-300 sm:grid sm:grid-cols-2 sm:items-center dark:bg-gray-900 rounded-xl">
          <div className="p-8 md:p-12 lg:px-16 lg:py-24 border-black">
            <div className="mx-auto max-w-xl text-center ltr:sm:text-left ">
              <h2 className="text-2xl font-bold text-gray-900 md:text-4xl dark:text-white font-lora mb-2">
                {jobTitle}
              </h2>
              <h2 className="text-2xl font-bold text-gray-900 md:text-2xl dark:text-white font-lora">
                Job category:{jobCategory}
              </h2>
              <p className=" text-gray-500 md:mt-4 md:block dark:text-gray-400">
                {jobDescription}
              </p>
              <p className=" text-gray-500 md:mt-4 md:block dark:text-gray-400">
                Employer name:{jobPosterEmail}
              </p>
              <p className=" text-gray-500 md:mt-4 md:block dark:text-gray-400">
                Salary-Range:{salaryRange}
              </p>
              <p className=" text-gray-500 md:mt-4 md:block dark:text-gray-400">
                Application Deadline:
                {new Date(applicationDeadline).toLocaleDateString()}
              </p>
              <p className=" text-gray-500 md:mt-4 md:block dark:text-gray-400">
                Total Applicants:{jobApplicantsNumber}
              </p>

              <div className="mt-4 md:mt-8">
                <button
                  onClick={openModal}
                  className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Apply For Job
                </button>
                {isModalOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="modal-box bg-white rounded p-8">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                          <h2 className="text-xl font-medium font-rale">
                            Submit Your Application here
                          </h2>
                        </div>
                        <div className="relative flex items-center mt-4">
                          <span className="absolute">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </span>

                          <input
                            type="text"
                            name="name"
                            value={user?.displayName}
                            readOnly
                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Username"
                            {...register("name")}
                          />
                        </div>
                        <div className="relative flex items-center mt-6">
                          <span className="absolute">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </span>

                          <input
                            type="email"
                            name="email"
                            value={user?.email}
                            readOnly
                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Email address"
                            {...register("email")}
                          />
                        </div>
                        <div className="relative flex items-center mt-8">
                          <span className="absolute">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                              />
                            </svg>
                          </span>

                          <input
                            type="url"
                            name="url"
                            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="Your Resume URL"
                            {...register("url", { required: true })}
                          />
                        </div>
                        {errors.url && (
                          <span className="text-red-500">
                            This field is required
                          </span>
                        )}
                        <div className="mt-6">
                          <input
                            //
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50"
                            type="submit"
                            value="Submit Application"
                          />
                        </div>
                      </form>
                      <button
                        className="btn w-full mt-2 font-medium"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <img
            alt=""
            src={jobBannerURL}
            className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
          />
        </div>
      </section>
      <ToastContainer
        style={{ width: "500px" }}
        position="top-right"
        theme="colored"
        autoClose={4000}
      />
    </div>
  );
};

export default JobDetails;
