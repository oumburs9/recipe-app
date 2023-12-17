
import  { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../redux/task/taskSlice';

function Modal() {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [date, setDate] = useState('');
  const modalOverlayRef = useRef(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (modalOverlayRef.current && modalOverlayRef.current === event.target) {
      closeModal();
    }
  };

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Dispatch createTask action with the new task data
    dispatch(createTask({ name: taskName, todoDate: date }));

    // Close the modal after submitting
    closeModal();
    // set to ''
    setDate('')
    setTaskName('')

  };

  // Add event listener to close the modal when clicking outside of its content
  useEffect(() => {
    document.addEventListener('mousedown', handleOverlayClick);

    return () => {
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, []);

  return (
    <>
      <button
        data-modal-target="popup-modal"
        data-modal-toggle="popup-modal"
        className="text-white bg-[#1E6F9F] hover:bg-blue-500 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={openModal}
      >
        + Add New
      </button>

      {isModalOpen && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50"
          ref={modalOverlayRef}
        >
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4">
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={closeModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <form className="max-w-md mx-auto mt-4" onSubmit={handleFormSubmit}>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="task_name"
                      id="task_name"
                      value={taskName}
                      onChange={handleTaskNameChange}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="task_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
                    >
                      Task Name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="date"
                      name="todoDate"
                      id="date"
                      value={date}
                      onChange={handleDateChange}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="date"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
                    >
                      Date
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add Task
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;



























// import { useState, useRef, useEffect } from "react";

// function Modal() {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const modalOverlayRef = useRef(null);

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const handleOverlayClick = (event) => {
//     if (modalOverlayRef.current && modalOverlayRef.current === event.target) {
//       closeModal();
//     }
//   };

//   // Add event listener to close the modal when clicking outside of its content
//   useEffect(() => {
//     document.addEventListener("mousedown", handleOverlayClick);

//     return () => {
//       document.removeEventListener("mousedown", handleOverlayClick);
//     };
//   }, []);

//   return (
//     <>
//       <button
//         data-modal-target="popup-modal"
//         data-modal-toggle="popup-modal"
//         className="text-white bg-[#1E6F9F] hover:bg-blue-500  focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

//         // className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         type="button"
//         onClick={openModal}
//       >
//         + Add New
//       </button>


//       {isModalOpen && (
//         <div
//           id="popup-modal"
//           tabIndex="-1"
//           className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50"
//           ref={modalOverlayRef}
//         >
//           <div className="relative p-4 w-full max-w-md">
//             <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4">
//               <button
//                 type="button"
//                 className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                 onClick={closeModal}
//               >
//                 <svg
//                   className="w-3 h-3"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 14"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                   />
//                 </svg>
//                 <span className="sr-only">Close modal</span>
//               </button>
//               <div className="p-4 md:p-5 text-center">
//                 {/* ... rest of your modal content */}

//                 <form className="max-w-md mx-auto mt-4">
//                   <div className="relative z-0 w-full mb-5 group">
//                     <input
//                       type="text"
//                       name="task_name"
//                       id="task_name"
//                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                       placeholder=" "
//                       required
//                     />
//                     <label
//                       htmlFor="task_name"
//                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
//                     >
//                       Task Name
//                     </label>
//                   </div>
//                   <div className="relative z-0 w-full mb-5 group">
//                     <input
//                       type="date"
//                       name="date"
//                       id="date"
//                       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                       placeholder=" "
//                       required
//                     />
//                     <label
//                       htmlFor="date"
//                       className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 left-0"
//                     >
//                       Date
//                     </label>
//                   </div>
//                   <button
//                     type="submit"
//                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     Add Task
//                   </button>
//                 </form>

//                 {/*  */}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Modal;
