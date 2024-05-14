import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../Auth/AuthHook/useAuth";
import Lottie from "lottie-react";
import loadingLottie from "../../public/loading-lottie.json";
import Swal from "sweetalert2";

const PrivetRoute = ({children}) => {
    const {user,loading}=useAuth();
    const location=useLocation();

    if(loading){
        return <div className="min-h-screen  flex items-center justify-center"><Lottie style={{ width: "300px" }} animationData={loadingLottie}></Lottie></div>
    }

    if(user){
        return children
    }
    else{
        Swal.fire({
            title: "SORRY",
            text: "You have to login first to view details of this job",
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok",
          })
          return <Navigate state={location.pathname} to="/login" replace={true}></Navigate>;
    }
};

PrivetRoute.propTypes={
    children:PropTypes.node,
}
export default PrivetRoute;