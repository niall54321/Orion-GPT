import { useContext } from "react";

import { ChatContext } from "../context/ChatContext";

const ChatInput = ({onSubmit}) => {
    const { formValue, setFormValue } = useContext(ChatContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        onSubmit(formValue);
        setFormValue("")
    }

    return (
        <div className="absolute bottom-0 right-0 left-0 py-4">
            <form onSubmit={handleSubmit}>
                <input rows="1" value={formValue} onChange={(e)=>setFormValue(e.target.value)} className="bg-[#40414f] shadow-2xl w-[90%] p-2 px-4 rounded-full outline-none resize-none"></input>
            </form>
        </div>
    )
}

export default ChatInput;