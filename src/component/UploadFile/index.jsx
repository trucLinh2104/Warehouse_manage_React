import React, { useRef } from 'react';
import { Button, Typography } from '@mui/material';
import * as XLSX from 'xlsx';

export default function ExcelUploader() {
    const inputRef = useRef(null);
    const data = useRef(null);
    const handleUploadClick = () => {
        inputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            const sheetName = workbook.SheetNames[0]; // đọc sheet đầu tiên
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }); // dạng mảng 2 chiều

            console.log("📊 Dữ liệu Excel:", jsonData);
            const result = confirm("Bạn có muốn tải file?");
            if (result){

            }else return;

        };

        reader.readAsArrayBuffer(file);
    };

    const handleDownloadFile =(data)=>{
        console.log("data gửi đi", data);
    }

    return (
        <div className="flex justify-center items-center w-full flex-wrap gap-[30px]">
            <Typography variant="h6" gutterBottom>Upload File Excel</Typography>

            <input
                type="file"
                accept=".xlsx, .xls"
                ref={inputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />

            <Button variant="contained" onClick={handleUploadClick}>
                Choose Order File
            </Button>

            <Button variant="contained" onClick={handleDownloadFile}>
                Download Chinese's Order File
            </Button>
        </div>
    );
}
