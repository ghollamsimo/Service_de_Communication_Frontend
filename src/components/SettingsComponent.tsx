import React from "react";

const Settings: React.FC = ({ setIsSettingOpen }) => {
    const Menus = [
        { title: "Messages" },
        { title: "Groups" },
        { title: "Settings" },
        { title: "Contact"},
    ];
    return (
        <>
            <div className="fixed inset-0 z-50">
                <div className="fixed inset-0 bg-black opacity-50" aria-hidden="true"></div>

                <div className="min-h-screen px-4 text-center flex items-center justify-center">
                    <div className="inline-block py-8 h-screen w-full max-w-4xl opacity-100 scale-100">
                        <div
                            className="inline-flex flex-col w-full text-left align-middle transition-all transform overflow-hidden rounded-2xl bg-white dark:bg-white dark:border dark:border-gray-500 dark:text-neutral-100 shadow-xl h-full">
                            <div
                                className="text-[#1B0036] relative flex-shrink-0 px-6 py-4 border-b border-neutral-200 dark:border-[#1b0036] text-center">
                                <h3 className="text-lg font-medium leading-6 "
                                    id="headlessui-dialog-title-70">Settings</h3>
                                <span className="absolute left-3 top-3">
                                  <button
                                      onClick={() => setIsSettingOpen(false)}
                                      className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none">
                                      <span className="sr-only">Close</span>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                                          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd"></path>
                                      </svg>
                                  </button>
                              </span>
                            </div>
                            <div className={'w-52 flex border-r border-[#1b0036] h-full'}>
                                <ul className="pt-6 m-3 mt-8">
                                    {Menus.map((menu, index) => (
                                        <li
                                            key={index}
                                            className={`flex rounded-md space-x-3 p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4 ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}
                                        >
                                            <span className={`${!open && "hidden"} text-[17px] origin-left duration-200`}>
                                    {menu.title}
                                </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Settings;
