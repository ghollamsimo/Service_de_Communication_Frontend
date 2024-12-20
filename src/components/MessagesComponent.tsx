import React, { useState, useEffect } from "react";
import {Contacts} from "../constant.ts";

const Messages: React.FC = () => {
    const [open, setOpen] = useState<boolean>(true);
    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth >= 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const Friends: Contacts[] = [
        {image: 'src/assets/profile.jpg', name: 'Mohamed', time: 10 ,message: 'Thanks for the quick response', isOnline: true},
        {image: 'src/assets/profile.jpg', name: 'ghollam', time: 11 , message: 'Thanks for the quick response..' ,isOnline: true},
    ]
    return (
        <div className="flex">
            <div
                className={`${
                    open ? "w-full" : "w-20"
                } bg-white border-l-2 h-screen p-5 pt-8 relative flex flex-col justify-between duration-300 ml-auto`}
            >
                <div>
                    <div className="flex gap-x-28 justify-between items-center">
                        <div className="text-black rounded rounded-br-2xl bg-white px-2 py-1">
                            <h1 className={`text-xl`}>
                                Messages
                            </h1>
                        </div>

                    </div>
                    <div className="pt-6 m-1 space-y-4 mt-8">
                        {Friends.map((friend, index) => (
                            <div className={"flex items-center space-x-3"} key={index}>
                                <div>
                                    <img className={'w-14 rounded-lg '} src={friend?.image} alt={'user'}/>
                                </div>
                                <div>
                                    <div className={'flex justify-between'}>
                                        <span className={'text-sm font-semibold'}>{friend.name}</span>
                                        <span className={'text-sm text-gray-600'}>{friend.time} Am</span>
                                    </div>
                                    <span className={'text-sm w-full font-light text-gray-600'}>{friend.message}</span>
                                    <span>{friend.isOnline}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Messages;
