import { Link } from "react-router-dom";
import registerGif from "../../assets/gif/register-form.gif";
import { GrWorkshop } from "react-icons/gr";
import { ToastContainer } from "react-toastify";

const Register = () => {
  return (
    <div className="my-12">
      <div className="max-w-7xl mx-auto flex flex-col  lg:flex-row-reverse gap-2 border  shadow-xl   bg-slate-200 dark:bg-gray-900">
        <div className=" lg:w-1/2 flex justify-center items-center">
          <img
            className="h-full rounded-tl-full rounded-bl-full  rounded-r-2xl"
            src={registerGif}
            alt=""
          />
        </div>
        <div className=" lg:w-1/2 p-4">
          <section className="bg-slate-200 dark:bg-gray-900">
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
              <form className="w-full max-w-md">
                <div className="flex justify-center mx-auto">
                  <GrWorkshop className="text-5xl text-[#11B719]"></GrWorkshop>
                  <h4 className="text-5xl text-teal-800 font-lora font-bold">
                    Jobs<span className="text-[#11B719]">Placer</span>
                  </h4>
                </div>
                <div className="flex items-center justify-center mt-4">
                  <p className="font-medium text-center text-gray-400">
                    Unlock your potential and take the next step in your career
                    journey with Jobs Placer seamless registration process.{" "}
                  </p>
                </div>
                <div className="flex items-center justify-center mt-6">
                  <a className=" pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                    Register your acoount here
                  </a>
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>

                  <input
                    type="text"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Username"
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
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Your photo URL"
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
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Email address"
                  />
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>

                  <input
                    type="password"
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Password"
                  />
                </div>

                <div className="mt-6">
                  <input
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50"
                    type="submit"
                    value="Register"
                  />

                  <p className="mt-6 text-sm text-center text-gray-400 font-lora">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-[#11B719] focus:outline-none focus:underline hover:underline"
                    >
                      Log in
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        theme="colored"
        autoClose={4000}
      ></ToastContainer>
    </div>
  );
};

export default Register;
