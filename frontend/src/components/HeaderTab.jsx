/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderBadges from './HeaderBadge';
import ListCard from './ListCard';
import { fetchTasks } from '../redux/task/taskSlice';

const HeaderTabs = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.task);

    // Filter tasks based on the current date
    const filteredTasks = tasks.filter((task) => {
      const today = new Date();
      const taskDate = new Date(task.date);
  
      return (
        today.getFullYear() === taskDate.getFullYear() &&
        today.getMonth() === taskDate.getMonth() &&
        today.getDate() === taskDate.getDate()
      );
    });

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const [activeTab, setActiveTab] = useState("today");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
        <div className="flex justify-center space-x-8 pt-3 " role="tablist">
         <div
          className={`border-b-8 ${
            activeTab === "today"
              ? "bg-white border-blue-500"
              : "border-transparent"
          }  cursor-pointer mr-5 p-2 rounded-md`}
          role="presentation"
          onClick={() => handleTabClick("today")}
        >
          <p
            className={`text-blue-400  text-xl font-extrabold ${
              activeTab === "today" && "text-blue-500"
            } `}
            role="tab"
            aria-controls="today"
            aria-selected={activeTab === "today"}
          >
            Today
          </p>
        </div>
        <div
          className={`border-b-8 ${
            activeTab === "active"
              ? "bg-white border-blue-500"
              : "border-transparent"
          }  cursor-pointer mr-5 p-2 rounded-md`}
          role="presentation"
          onClick={() => handleTabClick("active")}
        >
          <p
            className={`text-blue-400 text-xl font-extrabold ${
              activeTab === "active" && "text-blue-500"
            } `}
            role="tab"
            aria-controls="active"
            aria-selected={activeTab === "active"}
            
          >
            Active
          </p>
        </div>
        <div
          className={`border-b-8 ${
            activeTab === "inactive"
              ? "bg-white border-blue-500"
              : "border-transparent"
          }  cursor-pointer p-2 rounded-md`}
          role="tab"
            aria-controls="active"
            aria-selected={activeTab === "active"}
          onClick={() => handleTabClick("inactive")}
        >
          <p
            className={`text-blue-400 text-xl font-extrabold ${
              activeTab === "inactive" && "text-blue-500"
            } `}
          >
            Inactive
          </p>
        </div>
      </div>

      <div>
        <HeaderBadges />
      </div>

      <div id="default-tab-content">
        <div className="p-2 ">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}

          <div
            className={`${activeTab === 'today' ? '' : 'hidden'}`}
            role="tabpanel"
            aria-labelledby="today-tab"
          >
            {/* {filteredTasks.map((task,index) => ( */}
            {tasks.map((task,index) => (
              <ListCard key={index} data={task} />
            ))}
          </div>

          <div
            className={`${activeTab === 'active' ? '' : 'hidden'}`}
            role="tabpanel"
            aria-labelledby="active-tab"
          >
            {tasks
              .filter((task) => task.active)
              .map((task,index) => (
                <ListCard key={index} data={task} />
              ))}
          </div>

          <div
            className={`${activeTab === 'inactive' ? '' : 'hidden'}`}
            role="tabpanel"
            aria-labelledby="inactive-tab"
          >
            {tasks
              .filter((task) => !task.active)
              .map((task,index) => (
                <ListCard key={index} data={task} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTabs;

