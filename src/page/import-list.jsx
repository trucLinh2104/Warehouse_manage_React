import React, {useEffect, useRef, useState} from 'react';
import '../assets/css/import-list.css';
import BillDetailModal from '../component/bill-detail-modal.jsx';


function ImportList() {
    const [dataTable, setDataTable] = useState([]);

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

    const deleteBill =(billNo, indexToRemove) =>{
        setDataTable(prev => prev.filter((_, index) => index !== indexToRemove));

    }
    useEffect(() => {
        getDataTable();
    },[])
    return (

        <>
            <div className="main-content-query">
                <div className="search-area">
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
                            <button className="button">Tìm kiếm</button>
                        </div>
                    </div>
                </div>

                <div className="button-import">

                    <button>
                        <img src="./src/assets/icons/folder-import.svg"
                             alt="Nhập kho"
                        />
                        Nhập kho
                    </button>
                </div>

                <div className="grid-container">
                    <div className="grid-header">STT</div>
                    <div className="grid-header">
                        Mã phiếu
                        <img className="arrow"
                             src="./src/assets/icons/arrow-down1.svg"
                        />
                    </div>
                    <div className="grid-header">
                        Giá trị
                        <img className="arrow"
                             src="./src/assets/icons/arrow-down1.svg"
                        />
                    </div>
                    <div className="grid-header">
                        Thời gian nhập
                        <img className="arrow"
                             src="./src/assets/icons/arrow-down1.svg"
                        />
                    </div>
                    <div className="grid-header">
                        Tình trạng
                        <img className="arrow"
                             src="./src/assets/icons/arrow-down1.svg"
                        />
                    </div>
                    <div className="grid-header">Thao tác</div>

                    {dataTable.map((item, index) => (
                        <React.Fragment key={item.billNo}>
                            <div className="grid-item">{index + 1}</div>
                            <div className="grid-item bill-no"
                                 onClick={() => openBillModal(item.billNo)}
                            >
                                {item.billNo}</div>
                            <div className="grid-item">{item.price}</div>
                            <div className="grid-item">{item.inputTime}</div>
                            <div className="grid-item"><span className="status expire">{item.status}</span></div>
                            <div className="grid-item">
                                <img src="./src/assets/icons/delete-2.svg"
                                     alt=""
                                     className="delete-btn"
                                     onClick={() => deleteBill(item.billNo, index)}
                                />
                                <img src="./src/assets/icons/edit.svg"
                                     alt=""
                                     onClick={() => openBillModal(item, item.billNo)}
                                     className="edit-btn"
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