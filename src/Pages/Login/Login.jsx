import { Link, useNavigate } from "react-router-dom";
import loginBgGif from "../../assets/gif/login-form.gif";
import { GrWorkshop } from "react-icons/gr";
import { useRef, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";
import useAuth from "../../Auth/AuthHook/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toastId = useRef(null);
  const navigate = useNavigate();

  const { loginUser, loginWithGoogle } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (!emailRegex.test(email) && !toast.isActive(toastId.current)) {
      return (toastId.current = toast.error(
        "Please enter a valid email address."
      ));
    }
    if (
      (password.length < 6 || !passwordRegex.test(password)) &&
      !toast.isActive(toastId.current)
    ) {
      return (toastId.current = toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter"
      ));
    }

    loginUser(email, password)
      .then((userCredential) => {
        if (userCredential) {
          Swal.fire({
            title: "Welcome to JobsPlacer",
            text: "You are successfully login",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        }
      })
      .catch((error) => {
        if (error && !toast.isActive(toastId.current)) {
          toast.current = toast.error("Invalid Credentials");
        }
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((userCredential) => {
        if (userCredential) {
          Swal.fire({
            title: "Welcome to JobsPlacer",
            text: "You are successfully login",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        }
      })
      .catch((error) => {
        if (error && toast.isActive(toastId.current)) {
          toast.current = toast.error("This Google account is already used");
        }
      });
  };

  const handlePasswordShowToggler = () => {
    setShowPassword(!showPassword);
  };
  return (
    // <div className="max-w-7xl mx-auto my-12  rounded-tl-[60px] rounded-tr-[60px] rounded-bl-[60px] rounded-br-[60px] bg-slate-200 dark:bg-gray-900 border border-[#11B719]">
    //   <div className="flex justify-center min-h-screen">
    //     <div
    //       className="hidden bg-cover lg:block lg:w-2/3 rounded-tl-[60px] rounded-bl-[60px] rounded-br-[60px] rounded-tr-[60px] border-[#11B719] border-r-4"
    //       style={{
    //         backgroundImage: `url(${loginBgGif})`,
    //       }}
    //     >
    //       <div className="flex h-full items-center px-10 bg-gray-800 bg-opacity-40 rounded-tl-[60px] rounded-br-[60px] rounded-tr-[60px] rounded-bl-[60px] ">
    //         <div className="mt-8">
    //           <h4 className="text-5xl text-teal-800 font-lora font-bold">
    //             Jobs<span className="text-[#11B719]">Placer</span>
    //           </h4>
    //           <p className="max-w-2xl mt-3 text-gray-200 font-inter">
    //             Welcome to Job Placer – your gateway to career opportunities!
    //             Log in to access exclusive job listings, personalized
    //             recommendations, and tools to streamline your job search. Join
    //             our community of talented professionals and take the next step
    //             towards your dream career.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
    //       <div className="flex-1">
    //         <div className="text-center">
    //           <div className="flex justify-center mx-auto">
    //             <GrWorkshop className="text-5xl text-[#11B719]"></GrWorkshop>
    //           </div>
    //           <p className="mt-3 text-gray-500 dark:text-gray-300 font-lora">
    //             Log in to access your account
    //           </p>
    //         </div>

    //         <div className="mt-8">
    //           <form onSubmit={handleSubmit(onSubmit)} className="font-inter">
    //             <div>
    //               <label
    //                 htmlFor="email"
    //                 className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
    //               >
    //                 Email Address
    //               </label>
    //               <input
    //                 type="email"
    //                 name="email"
    //                 id="email"
    //                 placeholder="example@example.com"
    //                 className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    //                 {...register("email", { required: true })}
    //               />
    //               {errors.email && (
    //                 <span className="text-red-500">This field is required</span>
    //               )}
    //             </div>

    //             <div className="mt-6 relative">
    //               <div className="flex justify-between mb-2">
    //                 <label
    //                   htmlFor="password"
    //                   className="text-sm text-gray-600 dark:text-gray-200"
    //                 >
    //                   Password
    //                 </label>
    //               </div>
    //               <input
    //                 type={showPassword ? "text" : "password"}
    //                 name="password"
    //                 id="password"
    //                 placeholder="Your Password"
    //                 className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    //                 {...register("password", {
    //                   required: {
    //                     value: true,
    //                     message: "This field is required",
    //                   },
    //                 })}
    //               />
    //               {errors.password && (
    //                 <span className="text-red-500">
    //                   {errors.password.message}
    //                 </span>
    //               )}
    //               <span
    //                 onClick={handlePasswordShowToggler}
    //                 className="absolute right-2 top-10"
    //               >
    //                 {showPassword ? (
    //                   <IoMdEyeOff className="text-gray-400 text-xl"></IoMdEyeOff>
    //                 ) : (
    //                   <IoMdEye className="text-gray-400 text-xl "></IoMdEye>
    //                 )}
    //               </span>
    //             </div>

    //             <div className="mt-6">
    //               <input
    //                 className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50"
    //                 type="submit"
    //                 value="Log in"
    //               />
    //             </div>
    //           </form>
    //           <div className="mt-3">
    //             <span className="relative flex justify-center mb-3">
    //               <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

    //               <span className="relative z-10 bg-white px-6 font-lora">
    //                 OR
    //               </span>
    //             </span>
    //             <button onClick={handleGoogleLogin} className="bg-white flex items-center text-gray-700 dark:text-gray-300 justify-center gap-x-3 text-sm sm:text-base  dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5 w-full font-inter">
    //               <svg
    //                 className="w-5 h-5 sm:h-6 sm:w-6"
    //                 viewBox="0 0 24 24"
    //                 fill="none"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <g clipPath="url(#clip0_3033_94454)">
    //                   <path
    //                     d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
    //                     fill="#4285F4"
    //                   />
    //                   <path
    //                     d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z"
    //                     fill="#34A853"
    //                   />
    //                   <path
    //                     d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z"
    //                     fill="#FBBC04"
    //                   />
    //                   <path
    //                     d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z"
    //                     fill="#EA4335"
    //                   />
    //                 </g>
    //                 <defs>
    //                   <clipPath id="clip0_3033_94454">
    //                     <rect width="24" height="24" fill="white" />
    //                   </clipPath>
    //                 </defs>
    //               </svg>

    //               <span>Log in with Google</span>
    //             </button>
    //           </div>
    //           <p className="mt-6 text-sm text-center text-gray-400 font-lora">
    //             Do not have an account yet?{" "}
    //             <Link
    //               to="/register"
    //               className="text-[#11B719] focus:outline-none focus:underline hover:underline"
    //             >
    //               Register
    //             </Link>
    //             .
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <ToastContainer
    //     style={{ width: "500px" }}
    //     position="top-right"
    //     theme="colored"
    //     autoClose={4000}
    //   />
    // </div>
    <div className="my-12">
      <div className="max-w-7xl mx-auto flex flex-col  lg:flex-row gap-2 border  shadow-xl   bg-slate-200 dark:bg-gray-900">
        <div className=" lg:w-1/2 flex justify-center items-center">
          <img
            className="h-full rounded-tr-full rounded-br-full  rounded-r-2xl"
            src={loginBgGif}
            alt=""
          />
        </div>
        <div className=" lg:w-1/2 p-4">
          <section className="bg-slate-200 dark:bg-gray-900">
            <div className="container flex flex-col items-center justify-center min-h-screen px-6 mx-auto">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-md"
              >
                <div className="flex justify-center mx-auto">
                  <GrWorkshop className="text-5xl text-[#11B719]"></GrWorkshop>
                  <h4 className="text-5xl text-teal-800 font-lora font-bold">
                    Jobs<span className="text-[#11B719]">Placer</span>
                  </h4>
                </div>
                <div className="flex items-center justify-center mt-4">
                  <p className="font-medium text-center text-gray-800 dark:text-gray-400">
                    Welcome to Job Placer – your gateway to career
                    opportunities! Log in to access exclusive job listings,
                    personalized recommendations, and tools to streamline your
                    job search.
                  </p>
                </div>
                <div className="flex items-center justify-center mt-6">
                  <a className=" pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-[#11B719] dark:text-gray-400">
                    Log in your acoount here
                  </a>
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
                    {...register("email", { required: true })}
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}

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
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  <span
                    onClick={handlePasswordShowToggler}
                    className="absolute right-2 top-4"
                  >
                    {showPassword ? (
                      <IoMdEyeOff className="text-gray-400 text-xl"></IoMdEyeOff>
                    ) : (
                      <IoMdEye className="text-gray-400 text-xl "></IoMdEye>
                    )}
                  </span>
                </div>
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}                
                <div className="mt-6">
                  <input
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50"
                    type="submit"
                    value="Log in"
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
              <div className="mt-3 ">
                <span className="relative flex justify-center mb-3">
                  <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

                  <span className="relative z-10 bg-white dark:bg-gray-900 text-gray-500 rounded-lg px-6 font-lora">
                    OR
                  </span>
                </span>
                <button onClick={handleGoogleLogin} className="bg-white flex items-center text-gray-700 dark:text-gray-300 justify-center gap-x-3 text-sm sm:text-base  dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5 w-full font-inter">
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
              </div>
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

export default Login;
