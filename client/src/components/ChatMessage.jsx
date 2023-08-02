import {BiUser} from "react-icons/bi"
import ChatGPTLogo from "./ChatGPTLogo";
import TypeWriter from "./Typewriter";
import React, {useState, useEffect} from "react";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const isCodeBlock = (message) => {
    return message.startsWith("```") && message.endsWith("```");
  };
  
  const CodeBlock = ({ content }) => {

    if (isCodeBlock(content)) {

      const codeContent = content.slice(3, -3).trim();
  
      return (
        <SyntaxHighlighter className="rounded-md" style={nightOwl}>
          {codeContent}
        </SyntaxHighlighter>
      );
    }
    return (
      <pre>{content}</pre>
    );
  };
  
  const splitMessage = (message) => {
    const parts = message.split(/(```[\s\S]*?```)/g);
    return (
      <>
        {parts.map((part, index) => (
          <span key={index}>
            {isCodeBlock(part) ? (
              <CodeBlock content={part} />
            ) : (
              part
            )}
          </span>
        ))}
      </>
    );
  };
    
const ChatMessage = ({ user }) => {

    return(
        <div className={`p-6 max-lg:p-2 text-left ${user.role === "system" && "bg-[#444654]"}`}> 
            <div className="w-3/5 max-lg:w-full ml-auto mr-auto flex p-2 px-12">
                <div className={`p-1 ${user.role === "system" ? "bg-[#10a37f] text-white" : "bg-blue-500 text-white"}  rounded-full w-[40px] h-[40px] flex justify-center items-center`}>
                    {user.role === "user" ?
                        <BiUser size={"40px"}/>
                        :
                        <ChatGPTLogo />
                    }   
                </div>
                <div className="whitespace-pre-wrap overflow-auto px-[40px]">
                    {user.role === "system" ?
                        splitMessage(user.content) :
                        user.content
                    }
                </div>
            </div>
        </div>
    )
};

export default ChatMessage;

