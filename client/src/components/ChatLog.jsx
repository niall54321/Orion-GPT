
import ChatMessage from "./ChatMessage";

import { useContext } from "react";

import { ChatContext } from "../context/ChatContext";

import Loader from "./Loader";

const ChatLog = (props) => {
    const { loading } = useContext(ChatContext);
    const { chatLog } = props;

    return (
        <div className="pb-20 h-screen overflow-auto">        
               {
                chatLog.map((chatLogEntry, index) => (
                    <ChatMessage key={index} user={chatLogEntry} />
                ))
                    
                }               
                {loading ? <Loader /> : <div />}
        </div>
    )
};

export default ChatLog;