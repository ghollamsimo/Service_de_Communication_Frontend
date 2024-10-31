import { useState, useEffect } from "react";
import { FaHome, FaMoneyBill, FaCreditCard, FaCalendarAlt, FaBalanceScale, FaBell, FaCog, FaRegListAlt } from "react-icons/fa";
import {PiChatTeardrop} from "react-icons/pi";

interface MenuItem {
    title: string;
    icon: JSX.Element;
    gap?: boolean;
}

const Sidebar: React.FC = () => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth >= 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const Menus: MenuItem[] = [
        { title: "Overview", icon: <FaHome /> },
        { title: "Transactions", icon: <FaMoneyBill /> },
        { title: "Loyalty Cards", icon: <FaCreditCard />, gap: true },
        { title: "Subscriptions", icon: <FaCalendarAlt /> },
        { title: "Debts", icon: <FaBalanceScale /> },
        { title: "Legal information", icon: <FaRegListAlt /> },
        { title: "Notifications", icon: <FaBell />, gap: true },
        { title: "Settings", icon: <FaCog /> },
    ];

    return (
        <div className="flex">
            <div
                className={`${
                    open ? "w-72" : "w-20"
                } bg-[#111827] h-screen p-5 pt-8 relative duration-300`}
            >
                <div className="flex gap-x-4 items-center">
                    <PiChatTeardrop  className={`text-white text-3xl ${open && "rotate-[360deg]"} duration-500`} />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${
                            !open && "scale-0"
                        }`}
                    >
                        Chat
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((menu, index) => (
                        <li
                            key={index}
                            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
                                menu.gap ? "mt-9" : "mt-2"
                            } ${index === 0 && "bg-light-white"}`}
                        >
                            <span className="text-xl">{menu.icon}</span>
                            <span
                                className={`${!open && "hidden"} origin-left duration-200`}
                            >
                                {menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
