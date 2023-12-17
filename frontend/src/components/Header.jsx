import Logo from "../assets/Logo.svg";
import SearchInput from "./SearchInput";
import Modal from "./modal";

const Header = () => {
  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900">
      <div className="mx-48 min-w-fit  flex flex-wrap items-center justify-between p-4 pt-2">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src= {Logo}
            className="h-10"
            alt="Flowbite Logo"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
         < Modal/>
        </div>
        
        
      </div>

      <div className="pb-3 mx-56">
      <SearchInput/>
      </div>
    </nav>
  );
};

export default Header;
