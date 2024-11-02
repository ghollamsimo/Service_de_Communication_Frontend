import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Profile from '../assets/profile.jpg';
import {FriendsProps} from "../constant.ts";


const Friends: React.FC<FriendsProps> = ({ onFriendClick }) => {
    const [dropdown, setDropdown] = useState<boolean>(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <div
            onClick={onFriendClick}
            className="flex mt-14  m-5 w-full items-center h-fit cursor-pointer justify-between py-3 px-7 rounded-lg"
        >
            <div className="flex w-full items-center">
                <div className='relative left-11 bottom-5'>
                    <div className='rounded-full bg-green-600 p-1.5'></div>
                </div>
                <img
                    src={Profile}
                    alt="User"
                    className="w-10 h-10 rounded-lg mr-3"
                />
                <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-gray-500">Sample message</p>
                </div>
            </div>
            <button onClick={(e) => {
                e.stopPropagation();
                toggleDropdown();
            }} className="text-gray-400">
                <BsThreeDots />
            </button>
            {dropdown && (
                <div className="relative top-7 bg-white shadow-lg p-2 rounded-lg">
                    <p>Hello</p>
                </div>
            )}
        </div>
    );
};

export default Friends;
