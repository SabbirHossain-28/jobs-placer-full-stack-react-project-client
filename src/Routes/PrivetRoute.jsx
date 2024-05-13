import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../Auth/AuthHook/useAuth";
import Lottie from "lottie-react";
import loadingLottie from "../../public/loading-lottie.json";

const PrivetRoute = ({children}) => {
    const {user,loading}=useAuth();

    if(loading){
        return <div className="min-h-screen  flex items-center justify-center"><Lottie style={{ width: "300px" }} animationData={loadingLottie}></Lottie></div>
    }

    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>;
};

PrivetRoute.propTypes={
    children:PropTypes.node,
}
export default PrivetRoute;