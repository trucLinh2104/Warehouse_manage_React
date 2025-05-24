import Overview from '../page/OverView/overview.jsx';
import ImportList from '../page/ImportListView/import-list.jsx';
import ImportBill from '../page/ImportBill/import-bill.jsx';
import WarehouseManagement from '../page/Management/management.jsx';
import ExportList from '../page/ExportList/export-list.jsx';
import Product from '../page/Product/index.jsx';
import ImportOrder from '../page/ImportOrder/index.jsx';
import ProductType from '../page/ProductType/index.jsx';

const routes = [
    { path: '/', element: <Overview /> },
    { path: '/action-page/import-list', element: <ImportList /> },
    { path: '/action-page/export-list', element: <ExportList /> },
    { path: '/import-bill', element: <ImportBill /> },
    { path: '/warehouse-management', element: <WarehouseManagement /> },
    { path: '/product/type', element: <ProductType /> },
    { path: '/product/info', element: <Product /> },
    { path: '/import-order', element: <ImportOrder /> },


];

export default routes;
