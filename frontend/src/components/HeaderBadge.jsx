const HeaderBadges = () => {
  return (
    <div className="flex flex-row space-x-4 mx-56 mt-4 pb-2">
      <div>
        <span className="text-[#8284FA] font-bold pr-2 text-sm">Tasks</span>
        <span className="bg-[#333333] text-[#D9D9D9] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-[#D9D9D9] dark:text-[#333333]">
          28
        </span>
      </div>
      <div>
        <span className="text-[#8284FA] font-bold pr-2 text-sm">All</span>
        <span className="bg-[#333333] text-[#D9D9D9] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-[#D9D9D9] dark:text-[#333333]">
          28
        </span>
      </div>
      <div>
        <span className="text-[#8284FA] font-bold pr-2 text-sm">Inactive</span>
        <span className="bg-[#333333] text-[#D9D9D9] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-[#D9D9D9] dark:text-[#333333]">
          28
        </span>
      </div>

    </div>
  );
};

export default HeaderBadges;
