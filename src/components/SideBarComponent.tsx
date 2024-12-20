import React, { useState, useEffect } from "react";
import { FaCog, FaRegUser } from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";
import { TiMessage } from "react-icons/ti";
import { TbEdit } from "react-icons/tb";
import Profile from '../assets/profile.jpg';
import { CiLogout } from "react-icons/ci";
import { MenuItem } from "../constant.ts";
import Contact from "./ContactComponent.tsx";
import Settings from "./SettingsComponent.tsx";
import Group from "./GroupComponent.tsx";

const Sidebar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(true);
    const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
    const [isSettingOpen, setIsSettingOpen] = useState<boolean>(false);
    const [isGroupOpen, setIsGroupOpen] = useState<boolean>(false)
    const toggleContact = (): void => {
        setIsContactOpen(!isContactOpen);
    };
    const toggleGroup = (): void => {
        setIsGroupOpen(!isSettingOpen)
    }
    const toggleSetting = (): void => {
        setIsSettingOpen(!isSettingOpen);
    };

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
        { title: "Groups", icon: <MdOutlineGroups /> , onClick: toggleGroup},
        { title: "Settings", icon: <FaCog />, onClick: toggleSetting },
        { title: "Contact", icon: <TbEdit />, onClick: toggleContact },
    ];

    return (
        <>
            <div
                className={`${open ? "w-72" : "w-20"} bg-[#1E3475] h-screen p-5 pt-8 relative flex flex-col justify-between duration-300`}
            >
                <div>
                    <div className="flex gap-x-4 items-center">
                        <div className="text-black rounded rounded-br-2xl bg-white px-2 py-1">
                            <h1 className={`text-xl ${open && "rotate-[360deg]"} duration-500`}>
                                Youchat
                            </h1>
                        </div>
                    </div>
                    <ul className="pt-6 mt-8">
                        {Menus.map((menu, index) => (
                            <li
                                key={index}
                                onClick={menu.onClick}
                                className={`flex rounded-md space-x-3 p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
                            >
                                <span className="text-xl">{menu.icon}</span>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {menu.title}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="text-gray-300 mb-4">
                    <div className="flex items-center gap-7">
                        <div className="block md:hidden">
                            <CiLogout className="text-xl" />
                        </div>
                        <div className="hidden md:flex items-center gap-7">
                            <img className="w-14 rounded-lg h-14" src={Profile} alt="Profile" />
                            <div>
                                <h1>Jordan Betord</h1>
                                <span className="text-sm">@ Jordan Betord</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isContactOpen && (
                <Contact
                    isOpen={isContactOpen}
                    setIsContactOpen={setIsContactOpen}
                />
            )}

            {isSettingOpen && (
                <Settings
                    isOpen={isSettingOpen}
                    setIsSettingOpen={setIsSettingOpen}
                />
            )}

            {isGroupOpen && (
                <Group
                    isOpen={isGroupOpen}
                    setIsGroupOpen={setIsGroupOpen}
                />
            )}
        </>
    );
};

export default Sidebar;
