import Sidebar from "../Sidebar";
import Messages from "./Messages";
import MessagesInput from "./MessagesInput";
import { useEffect, useState } from 'react'

import io, { Socket } from "socket.io-client"

const Chat = () => {
    const [socket, setSocket] = useState<Socket>()
    const [messages, setMessages] = useState<string[]>([])
    const send = (value: string) => {
        socket?.emit('message', value)
    }
    useEffect(() => {
        const newSocket = io("http://localhost:8001")
        setSocket(newSocket)
    }, [setSocket])
    const messageListener = (message: string) => {
        setMessages([...messages, message])
    }
    useEffect(() => {
        socket?.on("message", messageListener)
        return () => {
            socket?.off("message", messageListener)
        }
    }, [messageListener])

    return (
        <div className=" flex w-screen ">
            <div className="w-72 bg-slate-700  ">
                <Sidebar />
            </div>
            <div className=" flex-1 flex-col min-h-screen ">
                <div className=" min-h-screen">
                    <Messages messages={messages} />
                </div>
                <div className="flex-none sticky bottom-0 h-16 ">
                    <MessagesInput send={send} />
                </div>
            </div>

        </div >
    );
};

export default Chat;
