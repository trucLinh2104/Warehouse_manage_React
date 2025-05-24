import SwipeableEdgeDrawer from '../../component/Drawer/Drawer.jsx';
import TableSortAndSelection from '../../component/CheckboxTable/index.jsx';
import EnhancedTable from '../../component/CheckboxTable/index.jsx';
import BasicTextFields from '../../component/Input/index.jsx';
import BasicSelect from '../../component/select/index.jsx';

function WarehouseManagement() {


    return (<>
        <div className="p-[20px]">
            <div className="conditon-query-area flex w-full flex-wrap gap-[10px]  lg:flex-nowrap mb-[40px] ">
                <BasicTextFields ></BasicTextFields>
                <BasicTextFields></BasicTextFields>
                <BasicTextFields></BasicTextFields>

            </div>
            <EnhancedTable></EnhancedTable>
            <div className="flex justify-end">
                <button className="p-[20px] flex items-center">Xuất kho</button>
            </div>
        </div>

    </>);
}

export default WarehouseManagement;