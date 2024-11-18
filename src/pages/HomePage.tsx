import React, { useState } from "react";
import Sidebar from "../components/SideBarComponent";
import NavBar from "../components/NavBarComponent";
import ChatNavbar from "../components/ChatNavbarComponent.tsx";
import Friends from "../components/FriendsComponent";
import Messages from "../components/MessagesComponent";
import ChatComponent from "../components/ChatComponent";
import '../App.css'
const HomePage: React.FC = () => {
    const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

    const handleFriendClick = (id:string) => {
        console.log(id);
        
        setIsChatOpen(true);
    };

    return (
        <div className="scrollable-section flex overflow-y-hidden h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                {isChatOpen ? <ChatNavbar /> : <NavBar />}
                <main className="flex-1 flex overflow-hidden">
                    {isChatOpen ? (
                        <div className="flex-1 flex">
                            <ChatComponent />
                        </div>
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
