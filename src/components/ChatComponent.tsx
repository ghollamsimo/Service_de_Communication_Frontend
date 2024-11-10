import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { TiMicrophone } from "react-icons/ti";

const ChatComponent: React.FC = () => {
    const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            setMessages([...messages, { text: inputValue, sender: "user" }]);
            setInputValue("");

            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: "heyyyyy", sender: "receiver" },
                ]);
            }, 2000);
        }
    };

    return (
        <div className="flex flex-col h-full w-full">
            <div className="p-5 flex justify-center mt-10 bg-white shadow-sm">
                <h2 className="text-sm font-semibold">Chat with John Doe</h2>
            </div>

            <div className="flex-1 px-5 py-3 overflow-y-auto space-y-3">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${
                            message.sender === "user" ? "justify-end" : "justify-start"
                        }`}
                    >
                        <div
                            className={`px-4 py-2 max-w-xs text-sm rounded-xl shadow-md ${
                                message.sender === "user"
                                    ? "bg-blue-500 text-white rounded-br-none"
                                    : "bg-gray-300 text-black rounded-bl-none"
                            }`}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-4 flex justify-between items-center bg-white shadow-lg">
                <input
                    type="text"
                    placeholder="Message..."
                    className="flex-1 focus:border-blue-400 p-3 rounded-full border-gray-300 border focus:outline-none"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <div className="flex gap-2 ml-3">
                    <button
                        className="bg-blue-500 text-white p-3 rounded-full shadow-md"
                        type="button"
                        onClick={handleSendMessage}
                    >
                        <IoSend />
                    </button>
                    <button
                        className="text-gray-700 p-3 rounded-full shadow-xl"
                        type="button"
                    >
                        <TiMicrophone />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatComponent;
