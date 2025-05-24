
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './index.css'
import BasicSelect from '../../component/select/index.jsx';
import ImageUploader from '../../component/UploadImage/index.jsx';
function ProductAdd() {
    return (<>
        <div className="add-area  ">
            <TextField id="prod_no" label="Mã sản phẩm" variant="standard" />
            <TextField id="prod_name" label="Tên sản phẩm" variant="standard" />
           <div className="flex flex-nowrap items-center gap-[20px] mt-[30px]">
               <BasicSelect></BasicSelect>
               <TextField id="prod_name" label="Tên sản phẩm " variant="standard" />
           </div>
            <TextField id="prod_unit" label="Đơn vị" variant="standard" />
            <TextField id="prod_desc" label="Kích thước" variant="standard" />
            <TextField id="prod_desc" label="Cân nặng" variant="standard" />
            <TextField id="prod_desc" label="Đặc điểm" variant="standard" />
            <TextField id="prod_desc" label="Kích thước đóng gói" variant="standard" />
            <TextField id="prod_desc" label="Số lượng cái trên thùng (pcs)" variant="standard" />
            <TextField id="prod_desc" label="Số lượng cái trên kiện (pcs)" variant="standard" />
            <BasicSelect></BasicSelect>
            < ImageUploader></ImageUploader>
        </div>
    </>)
}

export default ProductAdd;