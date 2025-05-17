import React, {useEffect, useRef, useState} from 'react';
import '../assets/css/import-list.css';
import { useNavigate } from 'react-router-dom';
import BillDetailModal from '../component/bill-detail-modal.jsx';
import Filter from '../component/filter.jsx';
import {Filler} from 'chart.js';


function ImportList() {
    const [dataTable, setDataTable] = useState([]);
    const navigate = useNavigate();
    const getDataTable = () => {
        setDataTable([{
            billNo: "202505060001",
            price: 120000,
            inputTime: "2024-12-01",
            status: "Đang xử lý"
        },{
            billNo: "202505060001",
            price: 120000,
            inputTime: "2024-12-01",
            status: "Đang xử lý"
        },{
            billNo: "202505060001",
            price: 120000,
            inputTime: "2024-12-01",
            status: "Đang xử lý"
        },{
            billNo: "202505060001",
            price: 120000,
            inputTime: "2024-12-01",
            status: "Đang xử lý"
        },{
            billNo: "202505060001",
            price: 120000,
            inputTime: "2024-12-01",
            status: "Đang xử lý"
        },{
            billNo: "202505060001",
            price: 120000,
            inputTime: "2024-12-01",
            status: "Đang xử lý"
        },{
            billNo: "202505060001",
            price: 120000,
            inputTime: "2024-12-01",
            status: "Đang xử lý"
        },{
            billNo: "202505060001",
            price: 120000,
            inputTime: "2024-12-01",
            status: "Đang xử lý"
        },{
            billNo: "202505060001",
            price: 120000,
            inputTime: "2024-12-01",
            status: "Đang xử lý"
        },
            {
                billNo: "202505060002",
                price: 250000,
                inputTime: "2024-12-05",
                status: "Đã nhập "
            },
            {
                billNo: "202505060003",
                price: 350000,
                inputTime: "2024-11-20",
                status: "Đã hủy"
            },
            {
                billNo: "202505060004",
                price: 180000,
                inputTime: "2024-11-30",
                status: "Đang xử lý"
            },
            {
                billNo: "202505060005",
                price: 220000,
                inputTime: "2024-12-10",
                status: "Đã giao"
            }]);
    };
    const searchAreaRef = useRef(null);
    const [data, setOpen] = useState(null);
    const billNo = useRef(null);
    const openBillModal = (data, bill) => {
        setOpen(data);
        billNo.current = bill;
        console.log('billNo', billNo.current);
    };


    const closeModal = () => {
        setOpen(null);
    };

    const deleteBill = (billNo, indexToRemove) =>{
        setDataTable(prev => prev.filter((_, index) => index !== indexToRemove));

    }

    const directLink =(path)=>{
        navigate(path)
    }
    const [openMobiTable, setDisplay] = useState(false);


    useEffect(() => {
        getDataTable();
    },[])


    useEffect(() => {
        const node = searchAreaRef.current;
        const node2 = document.querySelector('.grid-container')

        console.log(node);
        const observer = new MutationObserver(() => {
            const newDisplay = window.getComputedStyle(node).display;
            console.log("dis",newDisplay);
            if (newDisplay === 'none') {
                console.log("dcvxcvcxvzxcv");
                setDisplay(true);

            }else{
                console.log("aaaaaaaaaaaa");
                setDisplay(false);
            }
            console.log("open ",openMobiTable);
        });

        observer.observe(node, {
            attributes: true,
            attributeFilter: ['style', 'class'], // chỉ theo dõi những thuộc tính cần thiết
        });
    },[])

    const [currentPage, setCurrentPage] = useState(1)
    const changePage = (type) => {
        let lenght = 9;
        if(type ==='next'){
            if(currentPage < lenght){
                setCurrentPage(prev=>prev+1)
            }
        }
        if(type ==='prev'){
            if(currentPage > 1){
                setCurrentPage(prev=>prev-1)
            }
        }

    }
    return (

        <>
            <div className="main-content-query">
                <Filter name={".search-area"}></Filter>
                <div  ref={searchAreaRef} className="  search-area   lg:search-area-md gap-[10px] lg:gap-[50px]  lg:p-[40px] p-[15px] ">
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
                        Nhập kho
                    </button>
                </div>


                {openMobiTable && <div className="table-data-mobile  md:hidden">
                    <div className="pagination self-end pr-[20px]">
                        <a href="#"
                           className={`pagination-btn ${currentPage === 1 || currentPage === 0 ? 'disabled' : ''}`}
                           onClick={() => changePage('prev')}
                        >&laquo;</a>

                        <a href="#"
                           className="pagination-page"
                        >{currentPage}/9</a>
                        <a href="#"
                           className={`pagination-btn ${currentPage === 1 || currentPage === 0 ? 'disabled' : ''}`}
                           onClick={() => changePage('next')}
                        >&raquo;</a>
                    </div>
                    <div className="container bg-amber-100">
                        <div className="header h-[46.5px] bg-amber-100">
                            Mã Bill :0000000011
                        </div>

                        <div className="container-body bg-amber-400 flex-1">
                            <div className="body-row">
                                <p className="title">Ma Sp</p>
                                <p className="desc">SP001</p>
                            </div>
                            <div className="body-row">
                                <p className="title">Tên Sp</p>
                                <p className="desc">Sản phẩm A</p>
                            </div>
                            <div className="body-row">
                                <p className="title">Loại Sp</p>
                                <p className="desc">Điện tử</p>
                            </div>
                            <div className="body-row">
                                <p className="title">Đơn giá</p>
                                <p className="desc">2,000,000</p>
                            </div>

                            <div className="body-row">
                                <p className="title">Số lượng</p>
                                <p className="desc">2,000,000</p>
                            </div>
                            <div className="body-row">
                                <p className="title">Trạng thái</p>
                                <p className="desc">2,000,000</p>
                            </div>
                            <div className="body-row">
                                <p className="title">Ngày nhập</p>
                                <p className="desc">05-05-2025</p>
                            </div>


                        </div>
                    </div>
                </div>}


                <div className="hidden md:grid-container lg:flex-1 md:grid md:text-[12px] lg:text-[0.9rem]">
                    <div className="grid-header lg:top-0 md:text-[10px] lg:text-[0.8rem]">STT</div>
                    <div className="grid-header lg:top-0 md:text-[10px] lg:text-[0.8rem]">
                        Mã phiếu
                        <img className="arrow"
                             src="./src/assets/icons/arrow-down1.svg"
                        />
                    </div>
                    <div className="grid-header lg:top-0 md:text-[10px] lg:text-[0.8rem]">
                        Giá trị
                        <img className="arrow"
                             src="./src/assets/icons/arrow-down1.svg"
                        />
                    </div>
                    <div className="grid-header lg:top-0 md:text-[10px] lg:text-[0.8rem]">
                        Thời gian nhập
                        <img className="arrow"
                             src="./src/assets/icons/arrow-down1.svg"
                        />
                    </div>
                    <div className="grid-header lg:top-0 md:text-[10px] lg:text-[0.8rem]">
                        Tình trạng
                        <img className="arrow"
                             src="./src/assets/icons/arrow-down1.svg"
                        />
                    </div>
                    <div className="grid-header lg:top-0 md:text-[10px] lg:text-[0.8rem]">Thao tác</div>

                    {dataTable.map((item, index) => (
                        <React.Fragment key={item.billNo}>
                            <div className="grid-item">{index + 1}</div>
                            <div className="grid-item bill-no"
                                 onClick={() => openBillModal(item.billNo)}
                            >
                                {item.billNo}</div>
                            <div className="grid-item">{item.price}</div>
                            <div className="grid-item">{item.inputTime}</div>
                            <div className="grid-item">
                                <span className={item.status === 'Đang xử lý' ? 'status fresh' : item.status === 'Đã hủy' ? 'status expire' : 'status normal'}>{item.status}</span>
                            </div>
                            <div className="grid-item">
                                <img src="./src/assets/icons/delete-2.svg"
                                     alt=""
                                     className="w-[30px] p-[5px] max-h-full object-contain"
                                     onClick={() => deleteBill(item.billNo, index)}
                                />
                                <img src="./src/assets/icons/edit.svg"
                                     alt=""
                                     onClick={() => openBillModal(item, item.billNo)}
                                     className="w-[30px] p-[5px] max-h-full object-contain"
                                />
                            </div>

                        </React.Fragment>


                    ))}
                </div>

            </div>


            {data && <BillDetailModal data={data}
                                      billNo={billNo.current}
                                      onClose={closeModal}
            ></BillDetailModal>}
        </>
    );

}

export default ImportList;