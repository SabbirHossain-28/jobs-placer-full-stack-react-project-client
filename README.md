# Jobs Placer

**Live Site:** [https://jobs-placer-project.web.app/](https://jobs-placer-project.web.app/)

Welcome to Jobs Placer, a platform designed to connect job seekers with opportunities and streamline the job application process.

## Assignment Category: Assignment_category_0003

## Features

- **Navbar:** 
  - Displays website logo and name.
  - Navigation links include Home, All Jobs, Applied Jobs, Add A Job, My Jobs, Blogs, and User Profile.
  - Conditional rendering based on user login status.
  - Hover over the profile picture to view the user's name.
  
- **Login & Registration Systems:**
  - User-friendly login and registration pages with relevant error handling.
  - Login options include Email/Password and Google Sign-in.
  - Registration form includes fields for Name, Email, Password, and Photo URL.
  
- **Home Page:**
  - Banner section showcasing featured jobs.
  - Tab system for browsing jobs by category with an Active Tab feature.
  - Each job card displays information such as Job Poster, Title, Posting Date, Deadline, Salary Range, Applicants Number, and View Details Button.
  - Toast notification prompts non-logged-in users to log in when attempting to view job details.
  
- **Blogs Page:**
  - Addresses topics such as access tokens, refresh tokens, Express.js, and Nest.js.
  - Provides detailed explanations of code implementations.
  
- **All Jobs Page:**
  - Displays all jobs added by users in a tabular format.
  - Search functionality based on Job Title.
  - View Details button redirects non-logged-in users to the Login Page.
  
- **Single Job Details Route:**
  - Private route displaying job details including banner, title, description, salary range, number of applicants, and apply button.
  - Apply modal prefilled with logged-in user's information.
  
- **Add A Job Page:**
  - Private route allowing logged-in users to add new job listings.
  - Form includes fields for Job Banner URL, Title, User Information, Category, Salary Range, Description, Posting Date, and Application Deadline.
  
- **My Jobs Page:**
  - Private route displaying jobs added by the logged-in user.
  - Allows users to update or delete their posted jobs.
  
- **Applied Jobs Page:**
  - Private route showing jobs the user has applied for.
  - Filter system based on Job Category.
  
- **Error Handling:**
  - Provides relevant notifications for CRUD operations.
  
- **Theme Toggling Button:**
  - Allows users to switch between light and dark themes, altering the entire system's appearance.
  
- **Framer Motion Implementation:**
  - Utilizes Framer Motion for animations, particularly on the home page.
  
- **JWT Implementation:**
  - Utilizes JWT for authentication on selected routes.
  
- **Loading Spinner:**
  - Displays a spinner when data is in a loading state, ensuring a smoother user experience.
  
- **Swiper JS Integration:**
  - Implements Swiper JS for banner and slider functionalities.
  
- **React Hook Form:**
  - Utilizes React Hook Form for handling form submissions.
  
- **Pagination:**
  - Implements pagination on the All Jobs page for easier navigation.
  
## Usage Packages

- Framer Motion
- Firebase for authentication
- React Icon
- Lottie React
- React Hook Form
- Axios
- React Datepicker
- React Router DOM
- Sweetalert2
- React Tabs
- React Tooltip
- React Toastify
- Swiper JS

## Folder Structure and Comments

The component names, folder structure, and route names are meaningful and organized for clarity. Comments are added where necessary to enhance code readability.

Feel free to contribute and improve the Jobs Placer platform!
