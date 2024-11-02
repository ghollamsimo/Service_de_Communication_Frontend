import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import Notification from "./NotificationComponent.tsx";

const NavBar: React.FC = () => {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const toggleNotification = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };

    return (
        <>
            <header className="w-full border-b-2 h-fit">
                <nav className="flex justify-between text-black bg-white p-7 backdrop-blur-sm">
                    <div className="font-bold">
                        <h1>Friends</h1>
                    </div>

                    <ul>
                        <li onClick={toggleNotification} className="relative cursor-pointer">
                            <IoNotificationsOutline className="text-2xl font-bold" />
                            <Notification
                                isOpen={isNotificationOpen}
                                toggleDropdown={toggleNotification}
                            />
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default NavBar;
