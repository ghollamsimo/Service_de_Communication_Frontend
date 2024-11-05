import React, { useState, useEffect } from "react";
import { FaCog, FaRegUser } from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";
import { TiMessage } from "react-icons/ti";
import { MenuItem } from "../constant.ts";
import {IoNotificationsOutline} from "react-icons/io5";
import Notification from "./NotificationComponent.tsx";

const Messages: React.FC = () => {
    const [open, setOpen] = useState<boolean>(true);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const toggleNotification = () => {
        setIsNotificationOpen(!isNotificationOpen);
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
        { title: "Groups", icon: <MdOutlineGroups /> },
        { title: "Settings", icon: <FaCog /> },
    ];

    return (
        <div className="flex">
            <div
                className={`${
                    open ? "w-72" : "w-20"
                } bg-white border-l-2 h-screen p-5 pt-8 relative flex flex-col justify-between duration-300 ml-auto`}
            >
                <div>
                    <div className="flex gap-x-28 items-center">
                        <div className="text-black rounded rounded-br-2xl bg-white px-2 py-1">
                            <h1 className={`text-xl`}>
                                Messages
                            </h1>
                        </div>

                        <div onClick={toggleNotification}>
                            <IoNotificationsOutline className="text-2xl font-bold" />
                            <Notification
                                isOpen={isNotificationOpen}
                                toggleDropdown={toggleNotification}
                            />
                        </div>
                    </div>
                    <ul className="pt-6 mt-8">

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Messages;
