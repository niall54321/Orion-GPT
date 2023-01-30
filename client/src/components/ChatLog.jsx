
import ChatMessage from "./ChatMessage";

import { useContext } from "react";

import { ChatContext } from "../context/ChatContext";

import Loader from "./Loader";

const ChatLog = (chatLog) => {
    const { loading } = useContext(ChatContext);

    return (
        <div className=" h-screen overflow-auto">        
               {
                chatLog.chatLog.map((chatLog, index) => (
                    <ChatMessage key={index} message={chatLog.message.replace(/^\s+/,'')} user={chatLog.user} />
                ))
                    
                }               
                {loading ? <Loader /> : <div />}
        </div>
    )
};

export default ChatLog;