import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../../Auth/AuthHook/useAuth";
import Swal from "sweetalert2";

const CategoryCard = ({ data }) => {
  const location=useLocation();
  const navigate=useNavigate();
  const {user}=useAuth()
  const from=location.state || "/login";
  
  const {
    _id,
    jobTitle,
    loggedInUserName,
    applicationDeadline,
    jobPostingDate,
    salaryRange,
    jobApplicantsNumber,
  } = data || {};

  const handleViewDetails=()=>{
    if (!user) {
        Swal.fire({
            title: "SORRY",
            text: "You have to login first to view details of this job",
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok",
          })
          .then((result) => {
            if (result.isConfirmed) {
              navigate(from);
            }
          });
      } else {
        navigate(`/jobDetails/${_id}`);
      }
  }
  return (
    <div>
      <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            Posting Date:{jobPostingDate}
          </span>
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            Deadline:{new Date(applicationDeadline).toLocaleDateString()}
          </span>
          <a
            className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
            tabIndex="0"
            role="button"
          >
            Applicant:{jobApplicantsNumber}
          </a>
        </div>

        <div className="mt-2">
          <a
            className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            tabIndex="0"
            role="link"
          >
            {jobTitle}
          </a>
          {/* <p className="mt-2 text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p> */}
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Salary-range:{salaryRange}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 mt-4">
          <div className="flex items-center">
            <a
              className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
              tabIndex="0"
              role="link"
            >
              {loggedInUserName}
            </a>
          </div>
          <button
            onClick={handleViewDetails}
            className="text-blue-600 dark:text-blue-400 hover:underline"
            tabIndex="0"
            role="link"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  data: PropTypes.object,
};
export default CategoryCard;
