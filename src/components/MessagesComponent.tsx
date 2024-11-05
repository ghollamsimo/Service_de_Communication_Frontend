import React, { useState, useEffect } from "react";
import Contact from "./ContactComponent.tsx";
import {TbEdit} from "react-icons/tb";

const Messages: React.FC = () => {
    const [open, setOpen] = useState<boolean>(true);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const toggleContact = () => {
        setIsContactOpen(!isContactOpen);
    };
    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth >= 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className="flex">
            <div
                className={`${
                    open ? "w-72" : "w-20"
                } bg-white border-l-2 h-screen p-5 pt-8 relative flex flex-col justify-between duration-300 ml-auto`}
            >
                <div>
                    <div className="flex gap-x-28 items-center">
                        <div className="text-black rounded rounded-br-2xl bg-white px-2 py-1">
                            <h1 className={`text-xl`}>
                                Messages
                            </h1>
                        </div>

                        <div onClick={toggleContact}>
                            <TbEdit className="text-2xl font-bold" />
                            <Contact
                                isOpen={isContactOpen}
                                toggleDropdown={toggleContact}
                            />
                        </div>
                    </div>
                    <ul className="pt-6 mt-8">

                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Messages;
