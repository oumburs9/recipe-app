/* eslint-disable react/prop-types */
const HeaderBadges = ({badges}) => {
  
  return (
    <div className="flex flex-row space-x-4 mx-56 max-xl:mx-40 max-lg:mx-24 max-md:mx-20 max-sm:mx-10 mt-4 pb-2">
      {badges.map( (badge, index) => (
        <div key={index}>
        <span className="text-[#8284FA] font-bold pr-2 text-sm">{badge.name}</span>
        <span className="bg-[#333333] text-[#D9D9D9] text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-[#D9D9D9] dark:text-[#333333]">
          {badge.value}
        </span>
      </div>
      ))}

      

    </div>
  );
};

export default HeaderBadges;
