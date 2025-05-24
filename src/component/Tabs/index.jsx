import {useState} from 'react';
import './index.css'
import ButtonUsage from '../Button/index.jsx';

function Tabs({ onTabChange }) {
    const [tabIndex, setCurrentTab] = useState(0);
    const selectTab = (newTab) => {
        if (newTab !== tabIndex) {
            setCurrentTab(newTab);
            if (onTabChange) {
                onTabChange(newTab); // "emit" về cha
            }
        }
    };
    return (<>
        <div className="tabs w-full flex justify-start h-[50px]">
            <button  value="0"
                    onClick={() => selectTab(0)}
            >Tab1
            </button>
            <button value="1"
                    onClick={() => selectTab(1)}
            >Tab2
            </button>
        </div>
    </>);
}

export default Tabs;