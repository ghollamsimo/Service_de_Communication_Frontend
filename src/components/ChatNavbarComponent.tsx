import React from "react";
import {IoCall, IoVideocam} from "react-icons/io5";


const ChatNavbar: React.FC = () => {
    return (
        <header className="w-full border-b-2 h-fit">
            <nav className="sticky flex items-center align-middle justify-between text-black bg-white p-7 backdrop-blur-sm">
                <div className="font-bold">
                    <h1>John Doe</h1>
                </div>

                <ul className='gap-3 flex justify-center items-center'>
                    <li className="p-3 bg-white shadow-lg relative cursor-pointer rounded-lg">
                        <IoVideocam/>
                    </li>
                    <li className="p-3 relative bg-white shadow-lg cursor-pointer rounded-lg">
                        <IoCall />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default ChatNavbar;
