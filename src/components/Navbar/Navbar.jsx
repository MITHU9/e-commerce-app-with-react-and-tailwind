/* eslint-disable react/prop-types */
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";

const menuLinks = [
  {
    id: 1,
    path: "/#",
    name: "Home",
  },
  {
    id: 2,
    path: "/#shop",
    name: "Shop",
  },
  {
    id: 3,
    path: "/#about",
    name: "About",
  },
  {
    id: 4,
    path: "/#blog",
    name: "Blogs",
  },
];

const dropdownLinks = [
  {
    id: 1,
    path: "/#",
    name: "Electronics",
  },
  {
    id: 2,
    path: "/#",
    name: "Clothing",
  },
  {
    id: 3,
    path: "/#",
    name: "Home & Garden",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <a
              className="text-primary font-bold tracking-widest text-2xl uppercase sm:text-3xl"
              href="#"
            >
              E-Shop
            </a>
            <div className="hidden md:block">
              <ul className="flex">
                {menuLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.path}
                      className="ml-4 text-gray-600 hover:text-primary transition duration-200 inline-block font-semibold px-4"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}

                {/* DropDown */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-1 font-semibold text-gray-500 hover:text-primary ml-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300 transition-all" />
                    </span>
                  </a>

                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md p-2 dark:bg-gray-900">
                    <ul className="space-y-2">
                      {dropdownLinks.map((link) => (
                        <li key={link.id}>
                          <a
                            href={link.path}
                            className="hover:text-primary  text-gray-600 font-semibold w-full inline-block p-1 rounded-md hover:bg-primary/20 "
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="relative group hidden sm:block ">
              <input
                type="text"
                placeholder="Search..."
                className="search-bar px-2 py-1 font-semibold"
              />
              <IoMdSearch className="text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary" />
            </div>
            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                4
              </div>
            </button>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
