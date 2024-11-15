import React, {useEffect} from "react";
import {Contacts} from "../constant.ts";
import Aos from "aos";

const Contact: React.FC = ({isOpen}) => {

    const Friends: Contacts[] = [

    ]
    return(
        <>
            {isOpen && (
                <div
                    className={`relative right-0 w-screen max-w-xs sm:max-w-sm bg-white border-r-2 p-4 z-10 ${
                        Friends.length > 0 ? "overflow-y-scroll h-screen" : "overflow-y-auto"
                    }`}

                >
                    <h3 className="text-xl font-bold">Contact</h3>
                    <div className="mt-3 space-y-4">
                        <div className="pt-6 w-full m-1 space-y-4 mt-8">
                            {Friends.length > 0 ? (
                                Friends.map((friend, index) => (
                                    <div className="flex items-center space-x-3" key={index}>
                                        <div>
                                            <img className="w-14 rounded-lg" src={friend.image} alt="user" />
                                        </div>
                                        <div className="w-full">
                                            <div className="flex justify-between">
                                                <span className="text-sm font-semibold">{friend.name}</span>
                                                <span className="text-sm text-gray-600">Online</span>
                                            </div>
                                            <span className="text-sm w-full font-light text-gray-600">@{friend.name}</span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No contacts available.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Contact