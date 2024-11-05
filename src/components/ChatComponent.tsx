import React from "react";

const ChatComponent: React.FC = () => {
    return (
        <div className="grid w-full h-full">
            <div className="p-5 mt-10">
                <h2 className="text-lg font-bold">Chat with John Doe</h2>
            </div>

            <div className="flex-1 px-5 overflow-y-auto">
                kkk
            </div>

            <div className="p-2 flex items-center">
                <input
                    type="text"
                    placeholder="Message..."
                    className="w-full p-3 rounded-lg border-gray-300 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
};

export default ChatComponent;
