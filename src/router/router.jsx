import Overview from '../page/overview.jsx';
import ImportList from '../page/import-list.jsx';
import ImportBill from '../page/import-bill.jsx';
import WarehouseManagement from '../page/warehouse_management.jsx';

const routes = [
    { path: '/', element: <Overview /> },
    { path: '/import-list', element: <ImportList /> },
    { path: '/import-bill', element: <ImportBill /> },
    { path: '/warehouse-management', element: <WarehouseManagement /> },



];

export default routes;
