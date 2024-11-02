import React, { useState } from "react";
import Sidebar from "../components/SideBarComponent";
import NavBar from "../components/NavBarComponent";
import ChatNavbar from "../components/ChatNavbarComponent.tsx";
import Friends from "../components/FriendsComponent";
import Messages from "../components/MessagesComponent";
import ChatComponent from "../components/ChatComponent";

const HomePage: React.FC = () => {
    const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

    const handleFriendClick = () => {
        setIsChatOpen(true);
    };

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                {isChatOpen ? <ChatNavbar /> : <NavBar />}
                <main className="flex-1 flex">
                    {isChatOpen ? (
                        <ChatComponent />
                    ) : (
                        <Friends onFriendClick={handleFriendClick} />
                    )}
                </main>
            </div>
            {isChatOpen && <Messages />}
        </div>
    );
};

export default HomePage;
