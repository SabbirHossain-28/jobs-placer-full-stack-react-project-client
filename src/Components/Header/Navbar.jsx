// import { useEffect } from "react";
import { GrWorkshop } from "react-icons/gr";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Auth/AuthHook/useAuth";
import { Tooltip } from "react-tooltip";
import { IoPersonCircleOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const Navbar = () => {
  const {user,logOutUser}=useAuth();
  const navigate=useNavigate()

  const handleUserLogOut = () => {
    logOutUser().then(() => {
      Swal.fire({
        title: "You are successfully logout",
        text: "You won't be able to revert this!",
        icon: "success",
        confirmButtonColor: "#3085d6",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    });
  }
  return (
    <div className="navbar bg-base-100 shadow-md sticky">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[999] border  mt-3  p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                style={({ isActive,isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bolder" : "bold",
                    fontSize:isActive?"16px":"",
                    color:isActive?"#11B719":"#3d5270",
                    background:isActive?"none":"",
                    textDecoration:isActive?"underline":"",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                Home
              </NavLink>
            </li>
            {/* <p className="text-[]"></p> */}
            <li>
          <NavLink
              to="/login"
              style={({ isActive,isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bolder" : "bold",
                  fontSize:isActive?"16px":"",
                  color:isActive?"#11B719":"#3d5270",
                  background:isActive?"none":"",
                  textDecoration:isActive?"underline":"",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Login
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/register"
              style={({ isActive,isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bolder" : "bold",
                  fontSize:isActive?"16px":"",
                  color:isActive?"#11B719":"#3d5270",
                  background:isActive?"none":"",
                  textDecoration:isActive?"underline":"",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Register
            </NavLink>
          </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <div className="flex items-center">
            <p className="text-4xl text-[#11B719]">
              <GrWorkshop></GrWorkshop>
            </p>
            <h4 className="text-4xl font-lora">
              Jobs<span className="text-[#11B719]">Placer</span>
            </h4>
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              style={({ isActive,isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bolder" : "bold",
                  fontSize:isActive?"16px":"",
                  color:isActive?"#11B719":"#1F2937",
                  background:isActive?"none":"",
                  textDecoration:isActive?"underline":"",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addJob"
              style={({ isActive,isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bolder" : "bold",
                  fontSize:isActive?"16px":"",
                  color:isActive?"#11B719":"#1F2937",
                  background:isActive?"none":"",
                  textDecoration:isActive?"underline":"",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Add Job
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/login"
              style={({ isActive,isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bolder" : "bold",
                  fontSize:isActive?"16px":"",
                  color:isActive?"#11B719":"#1F2937",
                  background:isActive?"none":"",
                  textDecoration:isActive?"underline":"",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Login
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/register"
              style={({ isActive,isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bolder" : "bold",
                  fontSize:isActive?"16px":"",
                  color:isActive?"#11B719":"#3d5270",
                  background:isActive?"none":"",
                  textDecoration:isActive?"underline":"",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              Register
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {
          user?<div className={`avatar ${user ? "online" : "offline"} online`}>
          <div id="btn-tooltip" className="w-14 rounded-full">
            {user ? (
              <img referrerPolicy="no-referrer" src={user?.photoURL} />
            ) : (
              <IoPersonCircleOutline className="text-6xl"></IoPersonCircleOutline>
            )}
          </div>
          <Tooltip
            anchorSelect="#btn-tooltip"
            clickable
            style={{
              width: "130px",
              height: "60px",
              backgroundColor: "#000000a4",
              borderRadius: "15px",
            }}
          >
            <button
              onClick={handleUserLogOut}
              className="btn btn-xs bg-red-600 border-none mb-1"
            >
              Logout
            </button>
            <p className="text-xs ">{user?.displayName ? user.displayName : "No User"}</p>
          </Tooltip>
        </div>:<div className="flex gap-2 font-raleway">
              <button className="btn btn-sm md:btn-md lg:btn">
                <Link to="/login">Login</Link>
              </button>
            </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
