import React from "react";
import Sidebar from "../components/SideBarComponent";
import NavBar from "../components/NavBarComponent";

const HomePage: React.FC = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <NavBar />
                <main className="p-4  min-h-dvh flex-1 flex justify-center align-middle items-center bg-gray-100">
                    Welcome to the HomePage!
                </main>
            </div>
        </div>
    );
};

export default HomePage;
