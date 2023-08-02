import React from "react";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const ModelsSelector = () => {
    const { models, currentModel, setCurrentModel } = useContext(ChatContext);

    const filteredModels = models.filter((model) => model.id.startsWith("gpt-"));

    return(
        <div className='pt-10 px-4'>
            <h2 className=' text-left underline underline-offset-2'>Models</h2>
            <select value={currentModel} onChange={(e) => setCurrentModel(e.target.value)}  className='cursor-pointer w-full mt-2 h-10 mx-6 ml-auto mr-auto border-2 rounded-lg bg-[#202123]'>
                {filteredModels.map((model, index) => (
                    <option 
                    key={model.id} 
                    value={model.id}>
                        {model.id}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ModelsSelector;