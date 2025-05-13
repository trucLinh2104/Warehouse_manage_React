import React, {useEffect, useRef, useState} from 'react';
import '../assets/css/import-list.css';
import { useNavigate } from 'react-router-dom';
import BillDetailModal from '../component/bill-detail-modal.jsx';


function ImportList() {
    const [dataTable, setDataTable] = useState([]);
    const navigate = useNavigate();
    const getDataTable = () => {
        setDataTable([{
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
    useEffect(() => {
        getDataTable();

    },[])
    return (

        <>
            <div className="main-content-query">
                <div className="search-area p-[10px]">
                    <div className="col">
                        <div className="row">
                            <p className="title">Mã sản phẩm</p>
                            <input type="text" />
                        </div>

                        <div className="row">
                            <p className="title">Tình trạng</p>
                            <input type="text" />
                        </div>

                    </div>
                    <div className="col">
                        <div className="row">
                            <p className="title">Số lượng</p>
                            <input type="text" />
                        </div>

                        <div className="row">
                            <p className="title">Từ ngày</p>
                            <input type="date"
                                   id="date"
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <button className="sm:w-[80%] md:text-[15px] lg:text-[0.8rem] clickBtn">Tìm kiếm</button>
                        </div>
                    </div>
                </div>

                <div className="button-import">

                    <button className = "button clickBtn md:text-[15px] lg:text-[0.8rem]" onClick={() => directLink('/import-bill')}>
                        <img src="./src/assets/icons/folder-import.svg"
                             alt="Nhập kho"
                        />
                        Nhập kho
                    </button>
                </div>

                <div className="grid-container hidden md:grid md:text-[12px] lg:text-[0.9rem]">
                    <div className="grid-header md:text-[10px] lg:text-[0.8rem]">STT</div>
                    <div className="grid-header md:text-[10px] lg:text-[0.8rem]">
                        Mã phiếu
                        <img className="arrow"
                             src="./src/assets/icons/arrow-down1.svg"
                        />
                    </div>
                    <div className="grid-header md:text-[10px] lg:text-[0.8rem]">
                        Giá trị
                        <img className="arrow"
                             src="./src/assets/icons/arrow-down1.svg"
                        />
                    </div>
                    <div className="grid-header md:text-[10px] lg:text-[0.8rem]">
                        Thời gian nhập
                        <img className="arrow"
                             src="./src/assets/icons/arrow-down1.svg"
                        />
                    </div>
                    <div className="grid-header md:text-[10px] lg:text-[0.8rem]">
                        Tình trạng
                        <img className="arrow"
                             src="./src/assets/icons/arrow-down1.svg"
                        />
                    </div>
                    <div className="grid-header md:text-[10px] lg:text-[0.8rem]">Thao tác</div>

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