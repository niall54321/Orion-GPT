import React, {useEffect, useState} from 'react';
export const ChatContext = React.createContext();

export const ChatProvider = ({children}) => {
    const [formValue, setFormValue] = useState("");
    const [chatLog, setChatLog] = useState([])
    const [models, setModels] = useState([]);
    const [currentModel, setCurrentModel] = useState("gpt-3.5-turbo");
    const [temperature, setTemperature] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (message) => {

        let chatLogNew = [...chatLog, { role: "user", content: message}]

        setLoading(true);
        setChatLog(chatLogNew);

        const messages = chatLogNew.map((entry) => entry.content).join("\n")
        try {
            const response = await fetch("https://orion-gpt-server.onrender.com/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chatLogNew,
                    message: messages,
                    currentModel,
                    temperature,
                })
            });
            const data = await response.json();
            setChatLog([...chatLogNew, { role: "system", content: `${data.message}`}])
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }

    }
    
    const getEngines = () => {
        fetch("https://orion-gpt-server.onrender.com/models")
        .then(res => res.json())
        .then(data => {
            setModels(data.models.data)
        })
    }
    
    useEffect(() => {
        getEngines();
    }, [])

    return (
        <ChatContext.Provider value={{formValue, setFormValue, chatLog, setChatLog, models, setModels, currentModel, setCurrentModel, handleSubmit, temperature, setTemperature, loading}}>
            {children}
        </ChatContext.Provider>
    )
}