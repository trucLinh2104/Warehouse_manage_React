import EnhancedTable from '../../component/CheckboxTable/index.jsx';
import BasicTextFields from '../../component/Input/index.jsx';
import {useEffect, useState} from 'react';
import FloatingActionButtonZoom from '../../component/Tabs/index.jsx';
import Tabs from '../../component/Tabs/index.jsx';
import ProductInfo from '../../component_main/product_info/index.jsx';
import ProductAdd from '../../component_main/product_add/index.jsx';


function Product() {
    const [currentTab, setCurentTab] = useState(0);
    const tabsData = [{label: 'Tab1', component: <ProductInfo/>}, {label: 'Tab2', component: <ProductAdd/>}];
    const [componentData, setComponentData] = useState(tabsData[currentTab].component);
    const handleValueChange = (newValue) => {
        setCurentTab(newValue);
    };
    useEffect(() => {
        console.log("change tab", currentTab);
        setComponentData(tabsData[currentTab].component);
    },[currentTab])
return (<>
    <div className="p-[20px]">
        <Tabs onTabChange={handleValueChange}></Tabs>
        <div className="mt-[25px]" >
            {componentData}
        </div>
    </div>
</>)
}

export default Product;