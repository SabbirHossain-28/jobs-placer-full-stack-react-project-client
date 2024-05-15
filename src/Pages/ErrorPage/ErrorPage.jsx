import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorLottie from "../../../public/errorpage.json";
import goBackLottie from "../../../public/goBack.json";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f3f9fc]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-rancho text-3xl font-bold mb-2">
          OOOooops!!! Sorry You Are In the Wrong Route
        </h1>
        <div>
          <Lottie
            style={{ width: "300px" }}
            animationData={errorLottie}
          ></Lottie>
        </div>
        <h2 className="font-rancho text-5xl font-bold mb-2">
          {error.statusText}
        </h2>
        <Link
          to="/"
          className="font-work text-2xl font-semibold mb-4 text-[#0ab5be]"
        >
          {" "}
          <div className="flex flex-col items-center gap-1">
            {" "}
            <p className="font-rancho">Go Back Home</p>
            <Lottie
            style={{ width: "300px"}}
            animationData={goBackLottie}
          ></Lottie>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
