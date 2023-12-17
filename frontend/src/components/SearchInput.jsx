const SearchInput = () => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      <input
        type="text"
        className="w-full rounded-md py-2 px-4 bg-[#262626] text-white focus:outline-none text-center"
        placeholder="Search todo..."
        // value={value}

        // onChange={(e) => onChange(e.target.value)}
      />
      <div className="absolute left-0 pl-5 h-full top-0 flex justify-center items-center">
      <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15.5 15.5L20 20"
      stroke="white" 
    />
    <circle cx="10.5" cy="10.5" r="6.75" stroke="white" strokeWidth="2" fill="none" />
  </svg>
      </div>
      {/* <div className="absolute right-0 pr-5 h-full top-0 flex justify-center items-center">
        Search
      </div> */}
    </div>
  );
};

export default SearchInput;
