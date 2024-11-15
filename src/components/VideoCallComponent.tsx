import React, { useEffect } from "react";
import {IoCallSharp} from "react-icons/io5";

export const VideoCall: React.FC = ({ setOpenModal }) => {
    useEffect(() => {
        const peer = new RTCPeerConnection({
            iceServers: [
                {
                    urls: 'stun:stun.l.google.com:19302',
                },
            ],
        });
    }, []);

    return (
        <>
            <div className="fixed inset-0 z-50">
                <div className="min-h-screen px-4 text-center">
                    <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true"></div>
                    <div className="inline-block py-8 h-screen w-full max-w-4xl">
                        <div
                            className="inline-flex flex-col w-full text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-[#0E131F] dark:border dark:border-gray-700 dark:text-neutral-100 shadow-xl h-[30rem]"
                        >
                            <div
                                className="relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 text-center"
                            >
                                <h3 className="text-lg font-medium leading-6 text-white">Video Call</h3>
                                <span className="absolute left-3 top-3">
                  <button
                      onClick={() => setOpenModal(false)}
                      className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none"
                  >
                   <IoCallSharp className={'text-red-600 text-xl'} />
                  </button>
                </span>
                            </div>
                            <div className="flex gap-7 flex-1 items-center justify-center">
                                <div className="bg-gray-300 h-96 rounded-lg w-[30rem]"></div>
                                <div className="bg-gray-300 h-64 rounded-lg w-[20rem]"></div>
                            </div>
                                <div className={'flex justify-center items-center'}>
                                    hello
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
