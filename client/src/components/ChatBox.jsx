import { useContext } from 'react';

import '../App.css';

import ChatInput from './ChatInput';
import ChatLog from './ChatLog';

import { ChatContext } from '../context/ChatContext';

const ChatBox = () => {
    const { chatLog, handleSubmit } = useContext(ChatContext);

    return (
        <section className=' relative text-white w-full text-center bg-[#343541]'>
            <ChatLog chatLog={chatLog} />
            <ChatInput onSubmit={handleSubmit}/>
        </section>
    )
}

export default ChatBox;