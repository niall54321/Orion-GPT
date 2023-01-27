import '../App.css';

import NewChat from './NewChat';
import Slider from './Slider';
import ModelsSelector from './ModelsSelector';

const SideBar = () => {
    return (
        <aside className='flex-none text-white text-center w-64 bg-[#202123] py-4'>
            <NewChat />
            <ModelsSelector />
            <Slider min={0} max={1}/>
        </aside>
    )
}

export default SideBar;