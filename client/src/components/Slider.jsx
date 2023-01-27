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
            <h2 className=' text-left underline underline-offset-2'>Temperature</h2>
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