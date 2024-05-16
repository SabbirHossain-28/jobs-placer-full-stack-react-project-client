import { Link} from "react-router-dom";
import PropTypes from "prop-types";

const CategoryCard = ({ data }) => {

  const {
    _id,
    jobTitle,
    jobPosterName,
    applicationDeadline,
    jobPostingDate,
    salaryRange,
    jobApplicantsNumber,
  } = data || {};
  return (
    <div className="mt-12">
      <div className="lg:max-w-2xl px-8 py-4 bg-slate-200 shadow-xl  rounded-lg border-2 border-gray-500 dark:bg-gray-800">
        <div className="flex flex-col md:flex-row md:items-center lg:items-center lg:justify-between md:justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            Posting Date:{jobPostingDate}
          </span>
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            Deadline:{new Date(applicationDeadline).toLocaleDateString()}
          </span>
          <span
            className=" text-gray-600  py-1 text-sm font-bold  transition-colors duration-300 transform  rounded cursor-pointer hover:bg-gray-500"
            tabIndex="0"
            role="button"
          >
            Applicant:{jobApplicantsNumber}
          </span>
        </div>

        <div className="mt-2">
          <a
            className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            tabIndex="0"
            role="link"
          >
            {jobTitle}
          </a>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Salary-range:{salaryRange}($)
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 mt-4">
          <div className="flex items-center">
            <a
              className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
              tabIndex="0"
              role="link"
            >
              Employer Name:
              {jobPosterName}
            </a>
          </div>
          <Link
            // onClick={handleViewDetails}
            to={`/jobDetails/${_id}`}
            className="text-blue-600 dark:text-blue-400 hover:underline"
            tabIndex="0"
            role="link"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  data: PropTypes.object,
};
export default CategoryCard;
