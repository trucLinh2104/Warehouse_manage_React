import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';



const StickyHeadTable = ({columns, data}) => {
    console.log("data nhận được", data);
    const rows = Object?.values(data);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleEventClick = (fun, params, row )=>{
        let value = params.map(item=>{
            if(item ==='row'){
                return row;
            }else{
                return row[item];
            }

        })
        fun(...value)
    }
    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead sx={{bgcolor: 'transparent'}}>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.billNo}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            if(column.action){
                                                return (
                                                    < TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                        sx={{display:'flex', alignItems: 'center',  justifyContent: 'flex-start' ,height:'100%',gap:'15px'}}

                                                    >
                                                        { column.action.map(item =>(
                                                            <img key={`${row.billNo}-${item.title}`}
                                                                 src={item.img}
                                                                 alt={item.title}
                                                                 className="w-[30px] h-[30px]"
                                                                 onClick={() => handleEventClick(item.callback, item.params, row)}
                                                            />
                                                            )

                                                        )}
                                                    </TableCell>
                                                )




                                            }
                                            return (
                                                < TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    sx={{ cursor: column.callback ? 'pointer' : 'default' }}
                                                    onClick={
                                                        column.callback                     // <─ kiểm tra callback riêng của cột
                                                            ? () => handleEventClick(column.callback, column.params, row) // truyền billNo (hoặc row) tuỳ ý
                                                            : undefined
                                                    }
                                                >
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                                

                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
export  default StickyHeadTable
