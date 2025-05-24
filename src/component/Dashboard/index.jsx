import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import {useNavigate, useRoutes} from 'react-router-dom';
import routes from '../../router/router.jsx';

const NAVIGATION = [
    {
        kind: 'header',
        title: 'Báo cáo',
    },
    {
        segment: '',
        title: 'Tổng quan',
        icon: <DashboardIcon />,
    },

    {
        segment: 'product',
        title: 'Danh mục sản phẩm',
        icon: <ShoppingCartIcon />,
        children: [
            {
                segment: 'info',
                title: 'Thông tin sản phẩm',
                icon: <DescriptionIcon />,
            },
            {
                segment: 'type',
                title: 'Loại sản phẩm',
                icon: <DescriptionIcon />,
            },
        ],
    },

    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Thao tác',
    },
    {
        segment: 'action-page',
        title: 'Xuất nhập kho',
        icon: <BarChartIcon />,
        children: [
            {
                segment: 'import-list',
                title: 'Nhập kho',
                icon: <DescriptionIcon />,
            },
            {
                segment: 'export-list',
                title: 'Xuất kho',
                icon: <DescriptionIcon />,
            },
        ],
    },
    {
        segment: 'warehouse-management',
        title: 'Quản lý kho',
        icon: <LayersIcon />,
    },
    {
        segment: 'import-order',
        title: 'Nhập đơn yêu cầu nhập kho',
        icon: <LayersIcon />,
    },

];

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

function DemoPageContent({ pathname }) {

    return (
        <Box
            sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Typography>Dashboard content for {pathname}</Typography>
        </Box>
    );
}

DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
    const navigate = useNavigate();
    const { window } = props;

    const router = {
        pathname: location.pathname,
        searchParams: new URLSearchParams(location.search),
        navigate: (path) => navigate(path),
    };
    // useEffect(() => {
    //     navigate(router.pathname);
    //
    // }, [router]);

    const routing = useRoutes(routes);
    // Remove this const when copying and pasting into your project.
    const demoWindow = window !== undefined ? window() : undefined;

    return (
        // Remove this provider when copying and pasting into your project.
        <AppProvider  className="bg-[#ecf8ff] z-[1000]"
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
        >
            <DashboardLayout className="bg-[#ecf8ff]">
                <DemoPageContent pathname={router.pathname} />
                {routing}
            </DashboardLayout>
        </AppProvider>
    );
}


export default DashboardLayoutBasic;
