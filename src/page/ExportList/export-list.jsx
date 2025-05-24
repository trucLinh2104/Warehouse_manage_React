import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import BillModal from '../../component/BillDetailModal/index.jsx';
import Filter from '../../component/Filter/filter.jsx';
import StickyHeadTable from '../../component/Table/index.jsx';
import MultiActionAreaCard from '../../component/Card/card.jsx';


function ExportList()  {
    const [dataTable, setDataTable] = useState([]);
    const detailBillData = {
        '202505060001': [
            {
                maSp: 'SP001',
                tenSp: 'Tai nghe Bluetooth A1',
                danhMuc: 'Điện tử',
                gia: 2_000_000,
                soLuong: 2,
                nhaCungCap: 'Cty ABC',
                ngayNhap: '2025-05-01',
            },
            {
                maSp: 'SP002',
                tenSp: 'Chuột không dây B2',
                danhMuc: 'Điện tử',
                gia: 450_000,
                soLuong: 1,
                nhaCungCap: 'TechWorld',
                ngayNhap: '2025-05-01',
            },
        ],

        '202505060002': [
            {
                maSp: 'SP005',
                tenSp: 'Áo thun nam C3',
                danhMuc: 'Thời trang',
                gia: 320_000,
                soLuong: 3,
                nhaCungCap: 'Fashion Co.',
                ngayNhap: '2025-05-02',
            },
            {
                maSp: 'SP006',
                tenSp: 'Quần jeans D4',
                danhMuc: 'Thời trang',
                gia: 650_000,
                soLuong: 2,
                nhaCungCap: 'Fashion Co.',
                ngayNhap: '2025-05-02',
            },
        ],

        '202505060003': [
            {
                maSp: 'SP008',
                tenSp: 'Bình đun siêu tốc E5‑1.8L',
                danhMuc: 'Gia dụng',
                gia: 520_000,
                soLuong: 1,
                nhaCungCap: 'Hòa Bình Home',
                ngayNhap: '2025-05-03',
            },
            {
                maSp: 'SP009',
                tenSp: 'Nồi cơm điện F6 1.2L',
                danhMuc: 'Gia dụng',
                gia: 1_200_000,
                soLuong: 1,
                nhaCungCap: 'Hòa Bình Home',
                ngayNhap: '2025-05-03',
            },
            {
                maSp: 'SP010',
                tenSp: 'Chảo chống dính 26 cm',
                danhMuc: 'Gia dụng',
                gia: 280_000,
                soLuong: 2,
                nhaCungCap: 'Hòa Bình Home',
                ngayNhap: '2025-05-03',
            },
        ],

        '202505060004': [
            {
                maSp: 'SP012',
                tenSp: 'Sữa rửa mặt G7',
                danhMuc: 'Mỹ phẩm',
                gia: 185_000,
                soLuong: 4,
                nhaCungCap: 'BeautyCare',
                ngayNhap: '2025-05-04',
            },
            {
                maSp: 'SP013',
                tenSp: 'Kem dưỡng ẩm H8',
                danhMuc: 'Mỹ phẩm',
                gia: 295_000,
                soLuong: 2,
                nhaCungCap: 'BeautyCare',
                ngayNhap: '2025-05-04',
            },
        ],

        '202505060005': [
            {
                maSp: 'SP015',
                tenSp: 'Bóng đá số 5 I9',
                danhMuc: 'Thể thao',
                gia: 260_000,
                soLuong: 5,
                nhaCungCap: 'Sporty Ltd.',
                ngayNhap: '2025-05-05',
            },
            {
                maSp: 'SP016',
                tenSp: 'Dây kháng lực J10',
                danhMuc: 'Thể thao',
                gia: 120_000,
                soLuong: 3,
                nhaCungCap: 'Sporty Ltd.',
                ngayNhap: '2025-05-05',
            },
        ],
        '202505060006': [
            {
                maSp: 'SP015',
                tenSp: 'Bóng đá số 5 I9',
                danhMuc: 'Thể thao',
                gia: 260_000,
                soLuong: 5,
                nhaCungCap: 'Sporty Ltd.',
                ngayNhap: '2025-05-05',
            },
            {
                maSp: 'SP016',
                tenSp: 'Dây kháng lực J10',
                danhMuc: 'Thể thao',
                gia: 120_000,
                soLuong: 3,
                nhaCungCap: 'Sporty Ltd.',
                ngayNhap: '2025-05-05',
            },
        ],
    };
    const [data, setOpen] = useState(null);
    const cols =  ['Mã Sp','Tên Sp','Loại','Giá','Số lượng','Ncc', 'Ngày nhập'];
    const closeModal = () => {
        setOpen(false);
    };
    const openBillModal = (bill) => {
        setOpen(detailBillData[bill]);
        billNo.current = bill;
    };
    const editBill =(bill)=>{
        console.log("edit", bill);
    }


    const deleteBill = (billNo) => {
        const indexToRemove = dataTable.findIndex((item) => item.billNo === billNo);
        setDataTable(prev => prev.filter((_, index) => index !== indexToRemove));

    };
    const columns = [
        {   id: 'billNo',
            label: 'Bill_No',
            minWidth: 170,
            params:['billNo', 'row'],
            callback: (bill) => openBillModal(bill),

        },
        {
            id: 'price',
            label: 'Price',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'inputTime',
            label: 'Input Time',
            minWidth: 170,
            align: 'right',

        },
        {
            id: 'status',
            label: 'Status',
            minWidth: 170,
            align: 'right',
            format: (value) => value.toFixed(2),
        },

        {
            id: 'action-btns',
            label: 'Action',
            minWidth: 170,
            align: 'right',
            display:'flex',
            justifyContent: 'flex-end',
            action: [
                {
                    title:'Sửa',
                    img:'./src/assets/icons/edit.svg',
                    params: ['billNo'],
                    callback: (bill) => editBill(bill)
                },
                {
                    title:'Xóa',
                    img:'./src/assets/icons/delete.svg',
                    params: ['billNo'],
                    callback: (bill) => deleteBill(bill)
                },

            ]
        },

    ];
    const navigate = useNavigate();
    const getDataTable = () => {
        setDataTable([ {
            billNo: '202505060001',
            price: 120000,
            inputTime: '2024-12-01',
            status: 'Đang xử lý',
        }, {
            billNo: '202505060002',
            price: 120000,
            inputTime: '2024-12-01',
            status: 'Đang xử lý',
        }, {
            billNo: '202505060003',
            price: 120000,
            inputTime: '2024-12-01',
            status: 'Đang xử lý',
        }, {
            billNo: '202505060004',
            price: 120000,
            inputTime: '2024-12-01',
            status: 'Đang xử lý',
        }, {
            billNo: '202505060005',
            price: 120000,
            inputTime: '2024-12-01',
            status: 'Đang xử lý',
        }, {
            billNo: '202505060006',
            price: 120000,
            inputTime: '2024-12-01',
            status: 'Đang xử lý',
        }]);
    };
    const searchAreaRef = useRef(null);
    const billNo = useRef(null);





    const directLink = (path) => {
        navigate(path);
    };
    const [openMobiTable, setDisplay] = useState(false);


    useEffect(() => {
        getDataTable();
    }, []);


    useEffect(() => {
        const node = searchAreaRef.current;

        const observer = new MutationObserver(() => {
            const newDisplay = window.getComputedStyle(node).display;
            console.log('dis', newDisplay);
            if (newDisplay === 'none') {
                console.log('dcvxcvcxvzxcv');
                setDisplay(true);

            } else {
                console.log('aaaaaaaaaaaa');
                setDisplay(false);
            }
            console.log('open ', openMobiTable);
        });

        observer.observe(node, {
            attributes: true,
            attributeFilter: ['style', 'class'], // chỉ theo dõi những thuộc tính cần thiết
        });
    }, []);

    return (

        <>
            <div className="main-content-query">
                <Filter name={'.search-area'}></Filter>
                <div ref={searchAreaRef}
                     className="  search-area   lg:search-area-md gap-[10px] lg:gap-[50px]  lg:p-[40px] p-[15px] "
                >
                    <div className="w-full  flex flex-col  lg:w-[40%]  justify-evenly ">
                        <div className="flex lg:flex-nowrap">
                            <p className="title lg:text-[18px] w-[35%] lg:w-[25%] shrink-0">Mã Sp</p>
                            <input type="text"
                                   className="flex-1 w-[10px]"
                            />
                        </div>

                        <div className="flex lg:flex-nowrap">
                            <p className="title lg:text-[18px] w-[35%] lg:w-[25%] shrink-0">Tình trạng</p>
                            <input type="text"
                                   className="flex-1 w-[10px]"
                            />
                        </div>

                    </div>
                    <div className="w-full  flex flex-col  lg:w-[40%]  justify-evenly mt-[-6%] sm:mt-[-30px] md:mt-[-3%] lg:mt-[2px]">
                        <div className="flex lg:flex-nowrap">
                            <p className="title lg:text-[18px] w-[35%] lg:w-[25%] shrink-0">Số lượng</p>
                            <input type="text"
                                   className="flex-1 w-[10px]"
                            />
                        </div>

                        <div className="flex lg:flex-nowrap">
                            <p className="title lg:text-[18px] w-[35%] lg:w-[25%] shrink-0">Từ ngày</p>
                            <input type="date"
                                   id="date"
                                   className="flex-1 w-[10px]"
                            />
                        </div>
                    </div>
                    <div className=" flex flex-1  items-center justify-end lg:justify-center ">
                        <button className=" w-[30%] md:text-[15px] lg:text-[0.8rem] lg:w-[80%] clickBtn">Tìm
                                                                                                         kiếm
                        </button>

                    </div>
                </div>

                <div className="button-import">
                    <button className="button clickBtn md:text-[15px] lg:text-[0.8rem]"
                            onClick={() => directLink('/import-bill')}
                    >
                        <img src="./src/assets/icons/folder-import.svg"
                             alt="Nhập kho"
                        />
                        Xuất kho
                    </button>
                </div>


                {dataTable && Object.keys(dataTable).length > 0 && (
                    <StickyHeadTable columns={columns} data={dataTable} />
                )}
                {data && <MultiActionAreaCard data={data}
                                              cols={cols}
                                              id={billNo.current}
                                              path={'/import-bill'}
                ></MultiActionAreaCard>}
            </div>



            {data && <BillModal data={data}
                                billNo={billNo.current}
                                onClose={closeModal}
                                col={cols}
            ></BillModal>}
        </>
    );

}
export default ExportList;