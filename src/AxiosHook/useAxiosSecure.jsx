import axios from "axios";
import useAuth from "../Auth/AuthHook/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure=axios.create({
    baseURL:import.meta.env.VITE_LOCAL_URL,
    withCredentials:true
})
const useAxiosSecure = () => {
    const {logOutUser} =useAuth();
    const navigate=useNavigate();
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res;
        },
    error=>{
        if(error.response.status ===401 || error.response.status ===403){
            logOutUser()
            .then(()=>{
                navigate("/loginUser")
            })
        }
    })
    },[navigate,logOutUser])
    return axiosSecure;
};

export default useAxiosSecure;