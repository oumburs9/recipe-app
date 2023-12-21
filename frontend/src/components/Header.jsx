import Logo from "../assets/Logo.svg";
import SearchInput from "./SearchInput";
import Modal from "./modal";

const Header = () => {
  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900">
      <div className="mx-48 max-xl:mx-32 max-lg:mx-20 max-md:mx-16 max-sm:mx-6 min-w-fit flex flex-wrap items-center justify-between pt-2 pb-4">

        <a
          href="#"
          className="flex items-center  rtl:space-x-reverse"
        >
          <img
            src= {Logo}
            className="h-10"
            alt="Flowbite Logo"
          />
        </a>
        <div className="flex md:order-2  md:space-x-0 rtl:space-x-reverse">
         < Modal/>
        </div>
        
        
      </div>

      <div className="pb-3 mx-56 max-xl:mx-40 max-lg:mx-24 max-md:mx-20 max-sm:mx-10">
      
      <SearchInput/>
      </div>
    </nav>
  );
};

export default Header;
