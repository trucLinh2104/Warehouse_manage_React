import EnhancedTable from '../../component/CheckboxTable/index.jsx';

function ProductInfo() {
    const headCells = [
        {
            id: 'No',
            numeric: true,
            disablePadding: true,
            align: 'left',
            label: 'No',
        },
        {
            id: 'Name',
            numeric: true,
            align: 'right',
            disablePadding: false,
            label: 'Name',
        },
        {
            id: 'Unit',
            numeric: false,
            align: 'right',
            disablePadding: false,
            label: 'Unit',
        },
        {
            id: 'Price',
            numeric: true,
            align: 'right',
            disablePadding: false,
            label: 'Price',
        },
        {
            id: 'Image',
            align: 'right',
            numeric: false,
            disablePadding: false,
            label: 'Image',
        },
    ];
    return (<>
        <EnhancedTable cols={headCells}></EnhancedTable>
    </>)
}

export default ProductInfo;