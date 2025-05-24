import React, { useRef, useState } from 'react';
import { Button, Avatar, Stack, Typography } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function ImageUploader() {
    const inputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleUploadClick = () => {
        inputRef.current.click(); // Kích hoạt input file khi click nút
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result); // hiển thị ảnh
        };
        reader.readAsDataURL(file);
    };

    return (
        <Stack spacing={2} alignItems="flex-start" mt={4}>
            <Typography variant="h6">Upload Ảnh</Typography>
            <input
                type="file"
                accept="image/*"
                ref={inputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />

            <Avatar
                src={imagePreview}
                sx={{ width: 100, height: 100 }}
            />

            <Button
                variant="contained"
                startIcon={<PhotoCamera />}
                onClick={handleUploadClick}
            >
                Chọn ảnh
            </Button>
        </Stack>
    );
}
