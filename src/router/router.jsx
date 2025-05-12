import Overview from '../page/overview.jsx';
import ImportList from '../page/import-list.jsx';

const routes = [
    { path: '/', element: <Overview /> },
    { path: '/import-list', element: <ImportList /> }

];

export default routes;
