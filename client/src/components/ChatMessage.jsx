import {BiUser} from "react-icons/bi"
import ChatGPTLogo from "./ChatGPTLogo";
import TypeWriter from "./Typewriter";

const ChatMessage = (user, message) => {
    return(
        <div className={`p-6 max-lg:p-2 text-left ${user.user === "AI" && "bg-[#444654]"}`}> 
            <div className="w-3/5 max-lg:w-full ml-auto mr-auto flex p-2 px-12">
                <div className={`p-1 ${user.user === "AI" ? "bg-[#10a37f] text-white" : "bg-blue-500 text-white"}  rounded-full w-[40px] h-[40px] flex justify-center items-center`}>
                    {user.user === "user" ?
                        <BiUser size={"40px"}/>
                        :
                        <ChatGPTLogo />
                    }   
                </div>
                <div className="whitespace-pre-wrap px-[40px]">
                    {user.user === "AI" ?
                        <TypeWriter string={user.message} /> :
                        user.message
                    }
                </div>
            </div>
        </div>
    )
};

export default ChatMessage;