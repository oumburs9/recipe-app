/* eslint-disable react/prop-types */


import  { useState } from 'react';
import DeleteConfirmationModal from './DeleteConfirmationModal'; 
import { updateTask } from '../redux/task/taskSlice';
import { useDispatch } from 'react-redux';



const ListCard = ({ data }) => {

  const dispatch = useDispatch();
  const [isActive, setActive] = useState(data.active);

  const handleIsActive = () => {
    const updatedTask = {
      // Assuming your task object has an 'id' property
      ...data,
      // Update the 'active' field
      active: !isActive,
    };

    // Dispatch the updateTask action with the updated task
    dispatch(updateTask({ _id: data._id, updatedTask }));
    // Update the local state
    setActive(!isActive);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      <div className="relative mx-56 mb-3 block rounded-lg bg-[#262626] text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 cursor-pointer">
        <div className="flow-root">
          <div className="flex items-center">
            <div className="flex items-center py-3 sm:py-4" onClick={handleIsActive}>
              <div className="flex-shrink-0 pl-4">
              {isActive ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.96428 1.85957C10.3765 1.85957 11.7571 2.27835 12.9313 3.06296C14.1056 3.84757 15.0208 4.96276 15.5612 6.26752C16.1017 7.57227 16.2431 9.00799 15.9676 10.3931C15.6921 11.7782 15.012 13.0505 14.0134 14.0492C13.0148 15.0478 11.7424 15.7278 10.3573 16.0034C8.9722 16.2789 7.53648 16.1375 6.23173 15.597C4.92697 15.0566 3.81178 14.1414 3.02717 12.9671C2.24257 11.7929 1.82378 10.4123 1.82378 9.00006C1.8311 7.10854 2.58574 5.29657 3.92326 3.95905C5.26079 2.62153 7.07275 1.86688 8.96428 1.85957ZM8.96428 0.272793C7.23972 0.279848 5.55592 0.797684 4.12543 1.76093C2.69494 2.72417 1.58191 4.08964 0.926831 5.68495C0.271755 7.28026 0.104012 9.03389 0.444777 10.7245C0.785541 12.415 1.61954 13.9667 2.84148 15.1837C4.06342 16.4006 5.61852 17.2283 7.31046 17.5622C9.00241 17.896 10.7553 17.7211 12.348 17.0595C13.9406 16.398 15.3015 15.2794 16.2589 13.8449C17.2163 12.4105 17.7272 10.7246 17.7273 9.00006C17.7273 7.85097 17.5003 6.71319 17.0595 5.65202C16.6187 4.59084 15.9727 3.62716 15.1585 2.81629C14.3443 2.00542 13.378 1.36332 12.315 0.926842C11.2521 0.490361 10.1134 0.268093 8.96428 0.272793Z"
                      fill="#4EA8DE"
                    />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.98007 16.4262C13.0726 16.4262 16.3903 13.1085 16.3903 9.01594C16.3903 4.92337 13.0726 1.60569 8.98007 1.60569C4.8875 1.60569 1.56982 4.92337 1.56982 9.01594C1.56982 13.1085 4.8875 16.4262 8.98007 16.4262Z"
                      fill="#5E60CE"
                    />
                    <path
                      d="M8.96428 1.85958C10.3765 1.85958 11.7571 2.27836 12.9313 3.06297C14.1056 3.84758 15.0208 4.96277 15.5612 6.26752C16.1017 7.57228 16.2431 9.00799 15.9676 10.3931C15.6921 11.7782 15.012 13.0505 14.0134 14.0492C13.0148 15.0478 11.7424 15.7278 10.3573 16.0034C8.9722 16.2789 7.53648 16.1375 6.23173 15.597C4.92697 15.0566 3.81178 14.1414 3.02717 12.9671C2.24257 11.7929 1.82378 10.4123 1.82378 9.00007C1.8311 7.10855 2.58574 5.29658 3.92326 3.95906C5.26079 2.62154 7.07275 1.86689 8.96428 1.85958ZM8.96428 0.272801C7.23972 0.279856 5.55592 0.797692 4.12543 1.76094C2.69494 2.72418 1.58191 4.08965 0.926831 5.68495C0.271755 7.28026 0.104012 9.03389 0.444777 10.7245C0.785541 12.415 1.61954 13.9667 2.84148 15.1837C4.06342 16.4007 5.61852 17.2283 7.31046 17.5622C9.00241 17.896 10.7553 17.7211 12.348 17.0595C13.9406 16.398 15.3015 15.2794 16.2589 13.845C17.2163 12.4105 17.7272 10.7246 17.7273 9.00007C17.7273 7.85098 17.5003 6.7132 17.0595 5.65202C16.6187 4.59085 15.9727 3.62717 15.1585 2.8163C14.3443 2.00543 13.378 1.36333 12.315 0.92685C11.2521 0.490368 10.1134 0.2681 8.96428 0.272801Z"
                      fill="#5E60CE"
                    />
                    <path
                      d="M12.4306 6.34214L8.09865 10.6741L5.61618 8.19161L4.78027 9.02751L8.09865 12.3459L13.2665 7.17804L12.4306 6.34214Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                )}

              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-[#7e7676] dark:text-neutral-200 text-sm">
                  {formatDate(data.date)}
                </p>
                <p
                  className={`text-md font-normal dark:text-black ${
                    isActive ? `text-[#F2F2F2]` : ` line-through text-[#7e7676]`
                  }`}
                >
                  {data.name}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              <DeleteConfirmationModal _id={data._id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCard;

























// import { useState } from "react";
// import DeleteConfirmationModal from "./DeleteConfirmationModal";

// const data = {
//   name: "Neil Sims Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam qui excepturi facilis deserunt fugiat nobis.",
//   date: "May 16, 2024",
//   active: Math.round(Math.random()),
// };

// const ListCard = () => {
//   const [isActive, setActive] = useState(data.active);

//   const handleIsActive = () => {
//     setActive(!isActive);
//   };

//   return (
//     <>
//       <div className="relative mx-56 mb-3 block rounded-lg bg-[#262626] text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 cursor-pointer">
//         <div className="flow-root">
//           <div className="flex items-center">
//             <div className="flex items-center py-3 sm:py-4" onClick={handleIsActive}>
//               <div className="flex-shrink-0 pl-4">
//                 {isActive ? (
//                   <svg
//                     width="18"
//                     height="18"
//                     viewBox="0 0 18 18"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M8.96428 1.85957C10.3765 1.85957 11.7571 2.27835 12.9313 3.06296C14.1056 3.84757 15.0208 4.96276 15.5612 6.26752C16.1017 7.57227 16.2431 9.00799 15.9676 10.3931C15.6921 11.7782 15.012 13.0505 14.0134 14.0492C13.0148 15.0478 11.7424 15.7278 10.3573 16.0034C8.9722 16.2789 7.53648 16.1375 6.23173 15.597C4.92697 15.0566 3.81178 14.1414 3.02717 12.9671C2.24257 11.7929 1.82378 10.4123 1.82378 9.00006C1.8311 7.10854 2.58574 5.29657 3.92326 3.95905C5.26079 2.62153 7.07275 1.86688 8.96428 1.85957ZM8.96428 0.272793C7.23972 0.279848 5.55592 0.797684 4.12543 1.76093C2.69494 2.72417 1.58191 4.08964 0.926831 5.68495C0.271755 7.28026 0.104012 9.03389 0.444777 10.7245C0.785541 12.415 1.61954 13.9667 2.84148 15.1837C4.06342 16.4006 5.61852 17.2283 7.31046 17.5622C9.00241 17.896 10.7553 17.7211 12.348 17.0595C13.9406 16.398 15.3015 15.2794 16.2589 13.8449C17.2163 12.4105 17.7272 10.7246 17.7273 9.00006C17.7273 7.85097 17.5003 6.71319 17.0595 5.65202C16.6187 4.59084 15.9727 3.62716 15.1585 2.81629C14.3443 2.00542 13.378 1.36332 12.315 0.926842C11.2521 0.490361 10.1134 0.268093 8.96428 0.272793Z"
//                       fill="#4EA8DE"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     width="18"
//                     height="18"
//                     viewBox="0 0 18 18"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M8.98007 16.4262C13.0726 16.4262 16.3903 13.1085 16.3903 9.01594C16.3903 4.92337 13.0726 1.60569 8.98007 1.60569C4.8875 1.60569 1.56982 4.92337 1.56982 9.01594C1.56982 13.1085 4.8875 16.4262 8.98007 16.4262Z"
//                       fill="#5E60CE"
//                     />
//                     <path
//                       d="M8.96428 1.85958C10.3765 1.85958 11.7571 2.27836 12.9313 3.06297C14.1056 3.84758 15.0208 4.96277 15.5612 6.26752C16.1017 7.57228 16.2431 9.00799 15.9676 10.3931C15.6921 11.7782 15.012 13.0505 14.0134 14.0492C13.0148 15.0478 11.7424 15.7278 10.3573 16.0034C8.9722 16.2789 7.53648 16.1375 6.23173 15.597C4.92697 15.0566 3.81178 14.1414 3.02717 12.9671C2.24257 11.7929 1.82378 10.4123 1.82378 9.00007C1.8311 7.10855 2.58574 5.29658 3.92326 3.95906C5.26079 2.62154 7.07275 1.86689 8.96428 1.85958ZM8.96428 0.272801C7.23972 0.279856 5.55592 0.797692 4.12543 1.76094C2.69494 2.72418 1.58191 4.08965 0.926831 5.68495C0.271755 7.28026 0.104012 9.03389 0.444777 10.7245C0.785541 12.415 1.61954 13.9667 2.84148 15.1837C4.06342 16.4007 5.61852 17.2283 7.31046 17.5622C9.00241 17.896 10.7553 17.7211 12.348 17.0595C13.9406 16.398 15.3015 15.2794 16.2589 13.845C17.2163 12.4105 17.7272 10.7246 17.7273 9.00007C17.7273 7.85098 17.5003 6.7132 17.0595 5.65202C16.6187 4.59085 15.9727 3.62717 15.1585 2.8163C14.3443 2.00543 13.378 1.36333 12.315 0.92685C11.2521 0.490368 10.1134 0.2681 8.96428 0.272801Z"
//                       fill="#5E60CE"
//                     />
//                     <path
//                       d="M12.4306 6.34214L8.09865 10.6741L5.61618 8.19161L4.78027 9.02751L8.09865 12.3459L13.2665 7.17804L12.4306 6.34214Z"
//                       fill="#F2F2F2"
//                     />
//                   </svg>
//                 )}

//                 {/* <ToggleSwitch /> */}
//               </div>
//               <div className="flex-1 min-w-0 ms-4">
//                 <p className="text-[#7e7676] dark:text-neutral-200 text-sm">
//                   {data.date}
//                 </p>
//                 <p
//                   className={`text-md font-normal dark:text-black ${
//                     isActive ? `text-[#F2F2F2]` : ` line-through text-[#7e7676]`
//                   }`}
//                 >
//                   {data.name}
//                 </p>
//               </div>
//             </div>

//             <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              
              

//               <DeleteConfirmationModal/>


//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ListCard;
