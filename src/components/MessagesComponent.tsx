import React, { useState, useEffect } from "react";
import Contact from "./ContactComponent.tsx";
import {TbEdit} from "react-icons/tb";
import {Contacts} from "../constant.ts";

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

    const Friends: Contacts[] = [
        {image: 'src/assets/profile.jpg', name: 'Mohamed' ,message: 'Thanks for the quick response', isOnline: true},
        {image: 'src/assets/profile.jpg', name: 'ghollam' , message: 'Thanks for the quick response' ,isOnline: true},
    ]

    console.log('fff', Friends)
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

                        <div >
                            <TbEdit onClick={toggleContact} className="text-2xl font-bold" />
                            <Contact
                                isOpen={isContactOpen}
                                setIsContactOpen={setIsContactOpen}
                            />
                        </div>
                    </div>
                    <ul className="pt-6 space-y-4 mt-8">
                        {Friends.map((friend, index) => (
                            <li className={"flex items-center space-x-3"} key={index}>
                                <img className={'w-11 rounded-lg '} src={friend?.image} alt={'user'}/>
                                <span className={'text-sm'}>{friend.name}</span>
                                <span className={'text-sm text-gray-300'}>{friend.message}</span>
                                <span>{friend.isOnline}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Messages;
