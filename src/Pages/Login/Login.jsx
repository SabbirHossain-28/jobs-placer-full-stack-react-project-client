import { Link } from "react-router-dom";
import loginBgGif from "../../assets/gif/login-form.gif"
import { GrWorkshop } from "react-icons/gr";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordShowToggler = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="max-w-7xl mx-auto my-12  rounded-tl-[60px] rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px] bg-white dark:bg-gray-900 border border-[#11B719]">
      <div className="flex justify-center min-h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3 rounded-br-[60px] rounded-tr-[60px] border-[#11B719] border-r-4"
          style={{
            backgroundImage:
              `url(${loginBgGif})`,
          }}
        >
          <div className="flex h-full px-10 bg-gray-800 bg-opacity-40 rounded-tl-[60px] rounded-br-[60px] rounded-tr-[60px] rounded-bl-[60px] ">
            <div className="mt-8">
            <h4 className="text-5xl text-teal-800 font-lora font-bold">
              Jobs<span className="text-[#11B719]">Placer</span>
            </h4>
              <p className="max-w-sm mt-3 text-gray-200">
              Welcome to Job Placer – your gateway to career opportunities! Log in to access exclusive job listings, personalized recommendations, and tools to streamline your job search. Join our community of talented professionals and take the next step towards your dream career.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <GrWorkshop className="text-5xl text-[#11B719]"></GrWorkshop>
              </div>
              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Sign in to access your account
              </p>
            </div>

            <div className="mt-8">
              <form>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6 relative">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 dark:text-gray-200"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <span
                      onClick={handlePasswordShowToggler}
                      className="absolute right-2 top-10"
                    >
                      {showPassword ? (
                        <IoMdEyeOff className="text-gray-400 text-xl"></IoMdEyeOff>
                      ) : (
                        <IoMdEye className="text-gray-400 text-xl "></IoMdEye>
                      )}
                    </span>
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50">
                    Sign in
                  </button>
                </div>
              </form>
              <p className="mt-6 text-sm text-center text-gray-400">
                Do not have an account yet?{" "}
                <Link
                  to="/signup"
                  className="text-[#11B719] focus:outline-none focus:underline hover:underline"
                >
                  Sign up
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
