import React from "react";
import {IoVideocam} from "react-icons/io5";


const ChatNavbar: React.FC = () => {
    return (
        <header className="w-full border-b-2 h-fit">
            <nav className="flex justify-between text-black bg-white p-7 backdrop-blur-sm">
                <div className="font-bold">
                    <h1>John Doe</h1>
                </div>

                <ul className='bg-gray-100 flex justify-center items-center rounded-lg'>
                    <li className="relative cursor-pointer">
                        <IoVideocam />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default ChatNavbar;
