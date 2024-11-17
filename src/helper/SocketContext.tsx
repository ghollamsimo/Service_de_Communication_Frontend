import React, { createContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export const SocketContext = createContext<Socket | null>(null);

interface SocketProviderProps {
    children: React.ReactNode;
    socket:any
}

const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io("http://localhost:3000", {
            query: { token: localStorage.getItem("token") },
        });
        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, []);

    return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export default SocketProvider;
