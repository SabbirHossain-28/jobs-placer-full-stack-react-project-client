import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const data = useLoaderData();
  const { job_title, name } = data;
  console.log(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="my-12">
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center dark:bg-gray-900">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left ">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
              {job_title}
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block dark:text-gray-400">
              {name}
            </p>

            <div className="mt-4 md:mt-8">
              <button
                onClick={openModal}
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </button>
              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                  <div className="modal-box bg-white rounded p-8">
                    <form>
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
                          className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="Username"
                          //   {...register("name", { required: true })}
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
                          className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="Email address"
                          // {...register("email", { required: true })}
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
                          // {...register("url", { required: true })}
                        />
                      </div>
                      <div className="mt-6">
                        <input
                          onClick={closeModal}
                          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50"
                          type="submit"
                          value="Submit Application"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <img
          alt=""
          src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </div>
  );
};

export default JobDetails;
