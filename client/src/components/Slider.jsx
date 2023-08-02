import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const Slider = ({min, max}) => {

    const { temperature, setTemperature } = useContext(ChatContext);

    const handleChange = (e) => {
        const newTempValue = Number(e.target.value);
        if(newTempValue >= min && newTempValue <= max) {
            setTemperature(newTempValue);
        }
    }

    return(
        <div className='pt-10 px-4'>
            <div className="relative group">
                <h2 className='group-hover:cursor-pointer text-left underline underline-offset-2'>Temperature</h2>
                <div className="text-xs hidden opacity-0 group-hover:block group-hover:opacity-100 transition-all duration-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#40414f] p-2 rounded border border-gray-300">
                    Sampling Temperature. Lower values result in more focused and deterministic responses. Higher values result in more random responses.
                </div>
            </div>
            <div className="flex items-center mt-2">
                <input className="w-1/5 bg-transparent border-2 rounded-lg appearance-none text-center"
                    type="number"
                    value={temperature}
                    onChange={handleChange}
                />
                <input className="w-4/5 ml-2 cursor-pointer"
                    type="range"
                    min={min}
                    max={max}
                    value={temperature}
                    step="0.05"
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

export default Slider;