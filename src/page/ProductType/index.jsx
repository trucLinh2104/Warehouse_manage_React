import BasicTextFields from '../../component/Input/index.jsx';
import EnhancedTable from '../../component/CheckboxTable/index.jsx';

function ProductType() {

    const columns = [
        {
            id: 'type_no',
            numeric: true,
            disablePadding: true,
            align: 'left',
            label: 'Mã loại',
        },
        {
            id: 'type_name',
            numeric: true,
            align: 'right',
            disablePadding: false,
            label: 'Tên loại',
        },
        {
            id: 'count',
            numeric: true,
            align: 'right',
            disablePadding: false,
            label: 'Tổng SP',
        },
        {
            id: 'desc',
            numeric: false,
            align: 'right',
            disablePadding: false,
            label: 'Mô tả sản phẩm',
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
        <div className="p-[20px]">
            <div className="conditon-query-area flex w-full flex-wrap gap-[10px]  lg:flex-nowrap mb-[40px] ">
                <BasicTextFields></BasicTextFields>
                <BasicTextFields></BasicTextFields>
                <BasicTextFields></BasicTextFields>

            </div>
            <div className="flex justify-end">
                <button className="p-[20px] flex items-center">Thêm</button>
            </div>


            <EnhancedTable cols={columns}></EnhancedTable>

        </div>
    </>)
}

export default ProductType;