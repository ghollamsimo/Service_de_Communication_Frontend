import React from "react";
import { IoSend } from "react-icons/io5";
import { TiMicrophone } from "react-icons/ti";

const ChatComponent: React.FC = () => {
    return (
        <div className="flex flex-col h-full w-full">
            <div className="p-5 flex justify-center mt-10">
                <h2 className="text-sm font-semibold">Chat with John Doe</h2>
            </div>

            <div className="flex-1 px-5 overflow-y-auto">
                {/* messages between user and user */}
            </div>

            <div className="p-6 flex justify-between items-end">
                <div className="flex gap-4 w-full items-center">
                    <div className="w-full">
                        <input
                            type="text"
                            placeholder="Message..."
                            className="w-full focus:border-gray-400 p-3 rounded-lg border-gray-300 border focus:outline-none ring-0 focus:ring-0"
                        />
                    </div>
                    <div className="flex gap-3">
                        <button
                            className="bg-white shadow-xl text-lg text-[#1B0036] p-4 rounded-full"
                            type="button"
                        >
                            <IoSend />
                        </button>
                        <button
                            className="bg-[#1B0036] text-lg text-white p-4 rounded-full"
                            type="button"
                        >
                            <TiMicrophone />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatComponent;
