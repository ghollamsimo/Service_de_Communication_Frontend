import React from "react";
import Sidebar from "../components/SideBarComponent";
import NavBar from "../components/NavBarComponent";
import Friends from "../components/FriendsComponent.tsx";
import Messages from "../components/MessagesComponent.tsx";

const HomePage: React.FC = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <NavBar />
                <main className="m-5 mt-14 flex-1 flex">
                    <Friends />
                </main>
            </div>
            <Messages/>
        </div>
    );
};

export default HomePage;
