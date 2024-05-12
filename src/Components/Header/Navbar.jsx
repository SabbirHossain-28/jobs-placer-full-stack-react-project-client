// import { useEffect } from "react";
import { GrWorkshop } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // useEffect(()=>{
  //   const navbar=document.querySelector(".navbar");
  //   const sticky=navbar.offsetTop;

  //   const stickyNavbar=()=>{
  //     if(window.scrollY>=sticky){
  //       navbar.classList.add("sticky");
  //     }
  //     else{
  //       navbar.classList.remove("sticky");
  //     }
  //   }
  //   window.addEventListener("scroll",stickyNavbar);

  //   return ()=>{
  //     window.removeEventListener("scroll",stickyNavbar);
  //   }
  // },[])
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
            className="menu menu-sm dropdown-content mt-3 z-[1000] p-2 shadow bg-base-100 rounded-box w-52"
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
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
