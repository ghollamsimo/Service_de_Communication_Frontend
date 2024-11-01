import React, { useState, useEffect } from "react";
import {FaCog, FaRegUser} from "react-icons/fa";
import { PiChatTeardrop } from "react-icons/pi";
import { MdOutlineGroups } from "react-icons/md";
import { TiMessage } from "react-icons/ti";
import {MenuItem} from "../constant.ts";
import Profile from '../assets/profile.jpg'
import {CiLogout} from "react-icons/ci";


const Sidebar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(true);

    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth >= 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const Menus: MenuItem[] = [
        { title: "Messages", icon: <TiMessage /> },
        { title: "Groups", icon: <MdOutlineGroups /> },
        { title: "Settings", icon: <FaCog /> },
    ];

    return (
        <div className="flex">
            <div
                className={`${
                    open ? "w-72" : "w-20"
                } bg-[#1B0036] h-screen p-5 pt-8 relative flex flex-col justify-between duration-300`}
            >
                <div>
                    <div className="flex gap-x-4 items-center">
                        <div className={'text-black rounded rounded-br-2xl bg-white px-2 py-1'}>
                            <h1 className={`text-xl ${open && "rotate-[360deg]"} duration-500`}>
                                MS
                            </h1>
                        </div>
                        <h1
                            className={`text-white origin-left font-medium text-xl duration-200 ${
                                !open && "scale-0"
                            }`}
                        >
                            Chat
                        </h1>
                    </div>
                    <ul className="pt-6 mt-8">
                        {Menus.map((menu, index) => (
                            <li
                                key={index}
                                className={`flex rounded-md space-x-3 p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
                                    menu.gap ? "mt-9" : "mt-2"
                                } ${index === 0 && "bg-light-white"}`}
                            >
                                <span className="text-xl">{menu.icon}</span>
                                <span
                                    className={`${!open && "hidden"} origin-left duration-200`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="text-gray-300 mb-4">
                    <div className="flex items-center gap-7">
                        <div className="block md:hidden">
                            <CiLogout className={'text-xl'}/>
                        </div>
                        <div className="hidden md:flex items-center gap-7">
                            <img className="w-14 rounded-lg h-14" src={Profile} alt="Profile"/>
                            <div>
                                <h1>Jordan Betord</h1>
                                <span className="text-sm">@ Jordan Betord</span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Sidebar;
