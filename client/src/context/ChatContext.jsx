import React, {useEffect, useState} from 'react';
export const ChatContext = React.createContext();

export const ChatProvider = ({children}) => {
    const [formValue, setFormValue] = useState("");
    const [chatLog, setChatLog] = useState([])
    const [models, setModels] = useState([]);
    const [currentModel, setCurrentModel] = useState("text-davinci-003");
    const [temperature, setTemperature] = useState(0.1);

    const handleSubmit = async (message) => {

        let chatLogNew = [...chatLog, { user: "user", message}]

        setChatLog(chatLogNew)

        const messages = chatLogNew.map((entry) => entry.message).join("\n")
        const response = await fetch("https://orion-gpt-host.onrender.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: messages,
                currentModel,
                temperature,
            })
        });
        const data = await response.json();
        setChatLog([...chatLogNew, { user: "AI", message: `${data.message}`}])

    }
    
    const getEngines = () => {
        fetch("http://localhost:3080/models")
        .then(res => res.json())
        .then(data => {
            setModels(data.models.data)
        })
    }
    
    useEffect(() => {
        getEngines();
    }, [])

    return (
        <ChatContext.Provider value={{formValue, setFormValue, chatLog, setChatLog, models, setModels, currentModel, setCurrentModel, handleSubmit, temperature, setTemperature}}>
            {children}
        </ChatContext.Provider>
    )
}