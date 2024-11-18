import React, { useState } from "react";
import Sidebar from "../components/SideBarComponent";
import NavBar from "../components/NavBarComponent";
import ChatNavbar from "../components/ChatNavbarComponent.tsx";
import Friends from "../components/FriendsComponent";
import Messages from "../components/MessagesComponent";
import ChatComponent from "../components/ChatComponent";
import '../App.css'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/Store";
import { getDmChannel } from "../redux/slices/ChannelSlice";
const HomePage: React.FC = () => {
    const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();

    const handleFriendClick = (id:string) => {

        dispatch(getDmChannel(id));         
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
