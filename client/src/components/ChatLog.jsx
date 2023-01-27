
import ChatMessage from "./ChatMessage";

const ChatLog = (chatLog) => {

    return (
        <div className=" h-screen overflow-auto">        
               {
                chatLog.chatLog.map((chatLog, index) => (
                    <ChatMessage key={index} message={chatLog.message.replace(/^\s+/,'')} user={chatLog.user} />
                ))
               }            
        </div>
    )
};

export default ChatLog;