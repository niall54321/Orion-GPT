import { useContext } from 'react';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import { ChatContext } from '../context/ChatContext';



const NewChat = () => {
    const { setChatLog } = useContext(ChatContext);

    const clearChat = () => {
        setChatLog([])
    }
    return (
        <div onClick={clearChat} className='inline-flex items-center border-2 rounded-full text-l px-10 py-2 hover:bg-slate-50/[0.1] duration-500 cursor-pointer'>
            <AiOutlinePlusCircle size={20} fixedwidth className='text-left'/>
            <p className='mx-4 text-center'>Clear Chat</p>
        </div>
    )
};

export default NewChat;