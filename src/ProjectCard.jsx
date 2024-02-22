import { Navigate, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const ProjectCard = ({
  team,
  projectId,
  projectTitle,
  projectDomain,
  studentOneImg,
  studentTwoImg,
  regNoOne,
  studentOne,
  regNoTwo,
  studentTwo,
}) => {

 const navigate = useNavigate();

  // Simulate data fetching
setTimeout(() => {
  // Replace this with your actual data fetching logic
  const contentDiv = document.getElementById('content');
  contentDiv.classList.remove('loading-content'); // Remove the loading animation class
  // contentDiv.textContent = 'Data loaded'; // Display fetched data or appropriate message
}, 2000); // Simulate 2 seconds delay, replace with actual data loading time



  return (
    // <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
    //   <img
    //     className="w-full h-[12rem] object-cover object-center"
    //     src="https://marvel-b1-cdn.bc0a.com/f00000000100045/www.elmhurst.edu/wp-content/uploads/2018/12/5-skills-project-management-degree-elmhurst-college-infographic-thumb.jpg"
    //     alt="Bg-image"
    //   />
    <div className={`space-y-2 w-full md:w-[27rem] rounded-md shadow-[0px_0px_30px_gray] hover:shadow-[0px_0px_10px_gray] hover:scale transition-shadow ${projectId ? '' : 'loading-content'}`} id="loading">
      <div className="flex w-full h-[13rem] bg-[#cf6e90] justify-center items-center  p-4 mb-4">
        <img
          className="w-[9rem]  border-2 border-slate-400 rounded-full mr-4 relative"
          src={studentOneImg}
          alt="Student One"
        />
        {team && (
          <img
            className="w-[9rem] border-2 border-slate-400 rounded-full relative"
            src={studentTwoImg}
            alt="Student Two"
          />
        )}
      </div>
      <div className="mt-4 p-4 flex justify-center items-center flex-col gap-3">
        <p className="text-gray-600 text-lg font-medium">
          Project ID : {projectId}
        </p>
        <p className="text-gray-600 h-12 text-xl font-semibold flex flex-col justify-center items-center gap-1 capitalize">
          <span>
            {studentOne} ({regNoOne})
          </span>
          {team && (
            <span>
              {studentTwo}({regNoTwo})
            </span>
          )}
        </p>
      </div>
      <h2 className="font-medium flex justify-center items-center text-xl mb-2 p-4 capitalize">
        {projectTitle}
      </h2>
      <p className="text-gray-700 text-base p-4 flex justify-center items-center capitalize">
        {projectDomain}
      </p>
      <div className="w-full flex justify-center items-center">
        <button
          //  href="/staff_dashboard/profile_details"
          onClick={()=>{
            localStorage.setItem("projectId",projectId)
            navigate('/staff_dashboard/profile_details')
          }}
          className="bg-[#d06a0f] h-8 w-[90%] flex justify-center items-center text-white font-bold rounded mb-2"
        >
          Profile Details
        </button>
      </div>
    </div>
  );
};