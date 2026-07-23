import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const MenuLinks = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Shop", link: "/#shop" },
    { id: 3, name: "About", link: "/#about" },
    { id: 4, name: "Blogs", link: "/#blog" },
];

const DropdownLinks = [
    { id: 1, name: "Trending Product", link: "/#" },
    { id: 2, name: "Best Selling", link: "/#" },
    { id: 3, name: "Top Rated", link: "/#" },
];

const NavBar = () => {
    return (
        <div className="bg-white dark:bg-black dark:text-white duration-200 relative z-40">
            <div className="py-4 px-8">
                <div className="container flex justify-between items-center">
                    {/* Logo and Links sections*/}
                    <div className="flex items-center gap-6">
                        {" "}
                        <a
                            href="#"
                            className="text-2xl text-red-500 font-semibold tracking-widest uppercase sm:text-3xl"
                        >
                            ESHOP
                        </a>
                        {/* Menu item */}
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-4">
                                {MenuLinks.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            href={data.link}
                                            className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                                        >
                                            {" "}
                                            {data.name}{" "}
                                        </a>
                                    </li>
                                ))}
                                {/* Dropdown */}
                                <li className="relative cursor-pointer group">
                                    <a
                                        href="#"
                                        className="flex items-center gap-[1px] font-semibold text-gray-500 dark:group-hover:text-white py-2"
                                    >
                                        Quick Links
                                        <span>
                                            <FaCaretDown className="group-hover:rotate-180 duration-400" />
                                        </span>
                                    </a>

                                    {/* Dropdown Links */}
                                    <div className="absolute z-[9999] p-3 hidden group-hover:block w-[200px] rounded-md shadow-md bg-white dark:bg-gray-900">
                                        <ul className="space-y-2">
                                            {DropdownLinks.map((item) => (
                                                <li key={item.id}>
                                                    <a
                                                        href={item.link}
                                                        className="text-gray-500 hover:text-black dark:hover:text-white duration-200 p-2 hover:bg-yellow-600 inline-block w-full rounded-md hover:font-semibold"
                                                    >
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Navbar right section*/}
                    <div className="flex justify-between items-center gap-4 ">
                        {/* Sreach Section */}
                        <div className="group relative hidden sm:block">
                            <input
                                placeholder="Search..."
                                type="text"
                                className="search-bar"
                            />
                            <IoMdSearch
                                className="text-xl text-gray-600 group-hover:text-red-500
                             dark:text-gray-400  absolute top-1/2 -translate-y-1/2 right-0.5"
                            />
                        </div>
                        {/* Order-button section  */}
                        <button className="relative p-4 cursor-pointer">
                            <FaCartPlus className="text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 " />
                            <div className="w-4 h-4 text-white rounded-full bg-red-500 absolute top-0 left-7.5 flex items-center justify-center text-xs ">
                                3
                            </div>
                        </button>

                        {/* Dark mode section */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
