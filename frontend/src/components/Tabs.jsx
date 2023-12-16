// import React, { useState } from 'react';

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState('profile');

//   const handleTabClick = (tabId) => {
//     setActiveTab(tabId);
//   };

//   return (
//     <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
//       <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
//         <li className="me-2" role="presentation">
//           <button
//             className={`inline-block p-4 border-b-2 rounded-t-lg ${
//               activeTab === 'profile' ? 'border-blue-500' : 'border-gray-300'
//             }`}
//             onClick={() => handleTabClick('profile')}
//             role="tab"
//             aria-controls="profile"
//             aria-selected={activeTab === 'profile'}
//           >
//             Profile
//           </button>
//         </li>
//         <li className="me-2" role="presentation">
//           <button
//             className={`inline-block p-4 border-b-2 rounded-t-lg ${
//               activeTab === 'dashboard' ? 'border-blue-500' : 'border-gray-300'
//             }`}
//             onClick={() => handleTabClick('dashboard')}
//             role="tab"
//             aria-controls="dashboard"
//             aria-selected={activeTab === 'dashboard'}
//           >
//             Dashboard
//           </button>
//         </li>
//         <li role="presentation">
//           <button
//             className={`inline-block p-4 border-b-2 rounded-t-lg ${
//               activeTab === 'settings' ? 'border-blue-500' : 'border-gray-300'
//             }`}
//             onClick={() => handleTabClick('settings')}
//             role="tab"
//             aria-controls="settings"
//             aria-selected={activeTab === 'settings'}
//           >
//             Settings
//           </button>
//         </li>
//       </ul>

//       <div id="default-tab-content">
//         <div
//           className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
//             activeTab === 'profile' ? '' : 'hidden'
//           }`}
//           role="tabpanel"
//           aria-labelledby="profile-tab"
//         >
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             This is some placeholder content the{' '}
//             <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
//           </p>
//         </div>
//         <div
//           className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
//             activeTab === 'dashboard' ? '' : 'hidden'
//           }`}
//           role="tabpanel"
//           aria-labelledby="dashboard-tab"
//         >
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             This is some placeholder content the{' '}
//             <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
//           </p>
//         </div>
//         <div
//           className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
//             activeTab === 'settings' ? '' : 'hidden'
//           }`}
//           role="tabpanel"
//           aria-labelledby="settings-tab"
//         >
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             This is some placeholder content the{' '}
//             <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tabs;


// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('today');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
        <li className="me-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              activeTab === 'today' ? 'border-blue-500' : 'border-gray-300'
            }`}
            onClick={() => handleTabClick('today')}
            role="tab"
            aria-controls="today"
            aria-selected={activeTab === 'today'}
          >
            Today
          </button>
        </li>
        <li className="me-2" role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              activeTab === 'all' ? 'border-blue-500' : 'border-gray-300'
            }`}
            onClick={() => handleTabClick('all')}
            role="tab"
            aria-controls="all"
            aria-selected={activeTab === 'all'}
          >
            All
          </button>
        </li>
        <li role="presentation">
          <button
            className={`inline-block p-4 border-b-2 rounded-t-lg ${
              activeTab === 'inactive' ? 'border-blue-500' : 'border-gray-300'
            }`}
            onClick={() => handleTabClick('inactive')}
            role="tab"
            aria-controls="inactive"
            aria-selected={activeTab === 'inactive'}
          >
            Inactive
          </button>
        </li>
      </ul>

      <div id="default-tab-content">
        {/* Placeholder content for the Today tab */}
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === 'today' ? '' : 'hidden'
          }`}
          role="tabpanel"
          aria-labelledby="today-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content for the Today tab.
          </p>
        </div>

        {/* Placeholder content for the All tab */}
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === 'all' ? '' : 'hidden'
          }`}
          role="tabpanel"
          aria-labelledby="all-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content for the All tab.
          </p>
        </div>

        {/* Placeholder content for the Inactive tab */}
        <div
          className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
            activeTab === 'inactive' ? '' : 'hidden'
          }`}
          role="tabpanel"
          aria-labelledby="inactive-tab"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            This is some placeholder content for the Inactive tab.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

