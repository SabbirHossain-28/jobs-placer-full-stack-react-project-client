import { Link, useNavigate } from "react-router-dom";
import registerGif from "../../assets/gif/register-form.gif";
import { GrWorkshop } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import { useRef, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";
import useAuth from "../../Auth/AuthHook/useAuth";
import Swal from "sweetalert2";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toastId = useRef(null);
  const {createUser,logOutUser,updateUserProfile}=useAuth();
  const navigate=useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {name,url,email,password,}=data;
    console.log(name,url,email,password);

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
    createUser(email, password).then((userCredential) => {
      updateUserProfile(name, url).then(() => {
      });
      if (userCredential) {
        Swal.fire({
          title: "Registration Successful",
          text: "Now please login to your account",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            logOutUser();
            navigate("/login");
          }
        });
      }
    })
    .catch(error=>{
        if(error && !toast.isActive(toastId.current)){
            toastId.current=toast.error("User is already registered");
        }
    })
  };

  const handlePasswordShowToggler = () => {
    setShowPassword(!showPassword);
  };
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
                    Unlock your potential and take the next step in your career
                    journey with Jobs Placer seamless registration process.{" "}
                  </p>
                </div>
                <div className="flex items-center justify-center mt-6">
                  <a className=" pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-[#11B719] dark:text-gray-400">
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
                    name="name"
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Username"
                    {...register("name", { required: true })}
                  />
                </div>
                  {errors.name && (
                    <span className="text-red-500">This field is required</span>
                  )}
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
                    placeholder="Your photo URL"
                    {...register("url", { required: true })}
                  />
                </div>
                  {errors.url && (
                    <span className="text-red-500">This field is required</span>
                  )}
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
        style={{ width: "500px" }}
        position="top-right"
        theme="colored"
        autoClose={4000}
      />
    </div>
  );
};

export default Register;
