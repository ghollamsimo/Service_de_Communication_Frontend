import React from "react";
import {IoNotificationsOutline} from "react-icons/io5";
import Notification from "./NotificationComponent.tsx";

const ChatNavbar: React.FC = () => {
    return (
        <header className="w-full border-b-2 h-fit">
            <nav className="flex justify-between text-black bg-white p-7 backdrop-blur-sm">
                <div className="font-bold">
                    <h1>Chat</h1>
                </div>

                <ul>
                    <li className="relative cursor-pointer">

                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default ChatNavbar;
