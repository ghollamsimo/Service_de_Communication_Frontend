import React from "react";
import { IoClose } from "react-icons/io5";
import {NotificationDropdownProps} from "../constant.ts";


const Notification: React.FC<NotificationDropdownProps> = ({ isOpen, toggleDropdown }) => {
    if (!isOpen) return null;

    return (
        <div className="absolute right-0 mt-2 w-screen max-w-xs sm:max-w-sm bg-white shadow-2xl rounded-lg p-4 z-10">
            <h3 className="text-xl font-semibold">Notifications</h3>
            <div className="mt-3">
                <div className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg">
                    <div className="flex w-full items-center">
                        <img
                            src="http://localhost:8000/storage/images/sample-image.jpg"
                            alt="User"
                            className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                            <p className="text-sm font-medium">John Doe</p>
                            <p className="text-xs text-gray-500">Sample notification message</p>
                            <p className="text-xs text-gray-400">10 minutes ago</p>
                        </div>
                    </div>
                    <button onClick={toggleDropdown} className="text-gray-400">
                        <IoClose />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Notification;
