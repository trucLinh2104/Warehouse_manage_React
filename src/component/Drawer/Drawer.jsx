import * as React from 'react';
import PropTypes from 'prop-types';
import {styled} from '@mui/material/styles';
import {grey} from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import StickyHeadTable from '../Table/index.jsx';
import MultiActionAreaCard from '../Card/card.jsx';

const drawerBleeding = 56;

const Root = styled('div')(({theme}) => ({
    height: '100%',
    backgroundColor: grey[100],
    ...theme.applyStyles('dark', {
        backgroundColor: (theme.vars || theme).palette.background.default,
    }),
}));

const StyledBox = styled('div')(({theme}) => ({
    backgroundColor: '#fff',
    ...theme.applyStyles('dark', {
        backgroundColor: grey[800],
    }),
}));

const Puller = styled('div')(({theme}) => ({
    width: 30,
    height: 6,
    backgroundColor: grey[300],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
    ...theme.applyStyles('dark', {
        backgroundColor: grey[900],
    }),
}));

function SwipeableEdgeDrawer(props) {
    console.log(props);
    const billNo = props.props || 'error';
    const cols = props.columns || [];
    const dataTable = props.data || [];
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    return (
        <>
            <Box sx={{textAlign: 'center', pt: 1}}>
                <Button  onClick={toggleDrawer(true)}>Mở - {billNo}</Button>
            </Box>

            <SwipeableDrawer

                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                keepMounted
            >

                <div className="hidden md:block">
                    <StyledBox sx={{px: 2, pb: 2, height: '100%', overflow: 'auto'}}>
                        <StickyHeadTable columns={cols}
                                         data={dataTable}
                        />
                    </StyledBox>
                </div>

                <div className=" md:hidden">
                    <StyledBox sx={{px: 2, pb: 2, height: '100%', overflow: 'auto'}}>
                        <MultiActionAreaCard data={dataTable}
                                             cols={cols}
                                             id={billNo}
                                             path={'/import-bill'}
                        ></MultiActionAreaCard>
                    </StyledBox>
                </div>
            </SwipeableDrawer>
        </>


    );
}

SwipeableEdgeDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
