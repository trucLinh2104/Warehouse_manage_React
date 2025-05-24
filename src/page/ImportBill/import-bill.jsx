import './import-bill.css'
import SwipeableEdgeDrawer from '../../component/Drawer/Drawer.jsx';
import {useState} from 'react';
function ImportBill (){
const bill = '202505050001'
    const editBill =()=>{
        console.log("edit bill");
    }
    const deleteBill =()=>{
        console.log("delete bill");

    }
    const [dataTable,setDataTable] = useState([]);
    const addData = (newData)=>{
        if (newData!==null && newData!==undefined){
            setDataTable(prev => [...prev, newData]);
        }

    }
    const columns = [
        {   id: 'billNo',
            label: 'Bill_No',
            minWidth: 170,
            params:['billNo', 'row'],

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

    return (<>
        <div className="main-content-query">
            <div className="btn-action">
                <div className="row add-button">
                    <button className="action-button">
                        + Thêm từ file ngoài
                    </button>
                    <button className="action-button">
                        + Thêm từ hệ thống

                    </button>
                </div>
            </div>

            <div className="title ">
                <h2>Phiếu nhập kho</h2>
            </div>

            <div className="content-body">
                <div className="import-data-area  p-[15px] flex-wrap lg:flex-nowrap  lg:p-[15px]">
                    <div className="w-full lg:w-[50%]">
                        <div className="row_custom">
                            <p className="w-[35%] shrink-0 ">Mã sản phẩm</p>
                            <input className="w-[60%] rounded-2xl" type="text" />
                        </div>

                        <div className="row_custom">
                            <p className="w-[35%] shrink-0">Số lượng</p>
                            <input className="w-[60%] rounded-2xl" type="text" />
                        </div>

                        <div className="row_custom">
                            <p className="w-[35%] shrink-0">Đơn giá</p>
                            <input className="w-[60%] rounded-2xl" type="text" />
                        </div>

                        <div className="row_custom">
                            <p className="w-[35%] shrink-0">Loại sản phẩm</p>
                            <input className="w-[60%] rounded-2xl" type="text" />
                        </div>

                    </div>
                    <div className="flex flex-col  w-full p-0 lg:w-[50%]">
                        <div className="row_custom h-[50%]">
                            <p className=" w-[35%] shrink-0 grow-0">Mã phiếu</p>
                            <input className="w-[60%] rounded-2xl" type="text" />
                        </div>

                        <div className="row_custom flex-1">
                            <p className="w-[35%] shrink-0 grow-0">Lý do nhập</p>
                            <input type="text"
                                   id="date"
                                   className="w-[60%] rounded-2xl"
                            />
                        </div>


                    </div>

                </div>
            </div>
            <div className="row justify-end text-[15px] lg:text-[0.8rem]">
                <button className="flex items-center w-[150px]" onClick={()=>addData(null)}>
                    <img className=" ml-1 translate-y-0" src="./src/assets/icons/add-plus.svg"
                    />
                    Thêm sản phẩm
                </button>

                <SwipeableEdgeDrawer billNo={bill} columns={columns} data={dataTable} ></SwipeableEdgeDrawer>

            </div>
            {/*<div className="wrapper">*/}
            {/*    <table>*/}
            {/*        <thead>*/}
            {/*        <tr className="text-[8px] md:text-[10px] lg:text-[0.8rem]">*/}
            {/*            <th>Mã SP</th>*/}
            {/*            <th>Tên SP</th>*/}
            {/*            <th>Loại</th>*/}
            {/*            <th>Giá</th>*/}
            {/*            <th>Số lượng</th>*/}
            {/*            <th>Ncc</th>*/}
            {/*            <th>Ngày nhập</th>*/}
            {/*            <th>Hành động</th>*/}
            {/*        </tr>*/}
            {/*        </thead>*/}
            {/*        <tbody className="text-[8px] md:text-[10px] lg:text-[0.8rem]">*/}
            {/*        <tr data-masp="SP001">*/}
            {/*            <td>SP001</td>*/}
            {/*            <td>Sản phẩm A</td>*/}
            {/*            <td>Điện tử</td>*/}
            {/*            <td>2,000,000</td>*/}
            {/*            <td>10</td>*/}
            {/*            <td>Cty ABC</td>*/}
            {/*            <td>2025-05-01</td>*/}
            {/*            <td>*/}
            {/*                <img src="asset/icons/delete-2.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="delete-btn"*/}

            {/*                />*/}
            {/*                <img src="asset/icons/edit.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="edit-btn"*/}
            {/*                />*/}
            {/*            </td>*/}
            {/*        </tr>*/}
            {/*        <tr data-masp="SP001">*/}
            {/*            <td>SP001</td>*/}
            {/*            <td>Sản phẩm A</td>*/}
            {/*            <td>Điện tử</td>*/}
            {/*            <td>2,000,000</td>*/}
            {/*            <td>10</td>*/}
            {/*            <td>Cty ABC</td>*/}
            {/*            <td>2025-05-01</td>*/}
            {/*            <td>*/}
            {/*                <img src="asset/icons/delete-2.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="delete-btn"*/}

            {/*                />*/}
            {/*                <img src="asset/icons/edit.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="edit-btn"*/}
            {/*                />*/}
            {/*            </td>*/}
            {/*        </tr>*/}
            {/*        <tr data-masp="SP001">*/}
            {/*            <td>SP001</td>*/}
            {/*            <td>Sản phẩm A</td>*/}
            {/*            <td>Điện tử</td>*/}
            {/*            <td>2,000,000</td>*/}
            {/*            <td>10</td>*/}
            {/*            <td>Cty ABC</td>*/}
            {/*            <td>2025-05-01</td>*/}
            {/*            <td>*/}
            {/*                <img src="asset/icons/delete-2.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="delete-btn"*/}

            {/*                />*/}
            {/*                <img src="asset/icons/edit.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="edit-btn"*/}
            {/*                />*/}
            {/*            </td>*/}
            {/*        </tr>*/}
            {/*        <tr data-masp="SP001">*/}
            {/*            <td>SP001</td>*/}
            {/*            <td>Sản phẩm A</td>*/}
            {/*            <td>Điện tử</td>*/}
            {/*            <td>2,000,000</td>*/}
            {/*            <td>10</td>*/}
            {/*            <td>Cty ABC</td>*/}
            {/*            <td>2025-05-01</td>*/}
            {/*            <td>*/}
            {/*                <img src="asset/icons/delete-2.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="delete-btn"*/}

            {/*                />*/}
            {/*                <img src="asset/icons/edit.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="edit-btn"*/}
            {/*                />*/}
            {/*            </td>*/}
            {/*        </tr>*/}
            {/*        <tr data-masp="SP001">*/}
            {/*            <td>SP001</td>*/}
            {/*            <td>Sản phẩm A</td>*/}
            {/*            <td>Điện tử</td>*/}
            {/*            <td>2,000,000</td>*/}
            {/*            <td>10</td>*/}
            {/*            <td>Cty ABC</td>*/}
            {/*            <td>2025-05-01</td>*/}
            {/*            <td>*/}
            {/*                <img src="asset/icons/delete-2.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="delete-btn"*/}

            {/*                />*/}
            {/*                <img src="asset/icons/edit.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="edit-btn"*/}
            {/*                />*/}
            {/*            </td>*/}
            {/*        </tr>*/}
            {/*        <tr data-masp="SP001">*/}
            {/*            <td>SP001</td>*/}
            {/*            <td>Sản phẩm A</td>*/}
            {/*            <td>Điện tử</td>*/}
            {/*            <td>2,000,000</td>*/}
            {/*            <td>10</td>*/}
            {/*            <td>Cty ABC</td>*/}
            {/*            <td>2025-05-01</td>*/}
            {/*            <td>*/}
            {/*                <img src="asset/icons/delete-2.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="delete-btn"*/}

            {/*                />*/}
            {/*                <img src="asset/icons/edit.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="edit-btn"*/}
            {/*                />*/}
            {/*            </td>*/}
            {/*        </tr>*/}
            {/*        <tr data-masp="SP001">*/}
            {/*            <td>SP001</td>*/}
            {/*            <td>Sản phẩm A</td>*/}
            {/*            <td>Điện tử</td>*/}
            {/*            <td>2,000,000</td>*/}
            {/*            <td>10</td>*/}
            {/*            <td>Cty ABC</td>*/}
            {/*            <td>2025-05-01</td>*/}
            {/*            <td>*/}
            {/*                <img src="asset/icons/delete-2.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="delete-btn"*/}

            {/*                />*/}
            {/*                <img src="asset/icons/edit.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="edit-btn"*/}
            {/*                />*/}
            {/*            </td>*/}
            {/*        </tr>*/}
            {/*        <tr data-masp="SP001">*/}
            {/*            <td>SP001</td>*/}
            {/*            <td>Sản phẩm A</td>*/}
            {/*            <td>Điện tử</td>*/}
            {/*            <td>2,000,000</td>*/}
            {/*            <td>10</td>*/}
            {/*            <td>Cty ABC</td>*/}
            {/*            <td>2025-05-01</td>*/}
            {/*            <td>*/}
            {/*                <img src="asset/icons/delete-2.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="delete-btn"*/}

            {/*                />*/}
            {/*                <img src="asset/icons/edit.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="edit-btn"*/}
            {/*                />*/}
            {/*            </td>*/}
            {/*        </tr>*/}
            {/*        <tr data-masp="SP001">*/}
            {/*            <td>SP001</td>*/}
            {/*            <td>Sản phẩm A</td>*/}
            {/*            <td>Điện tử</td>*/}
            {/*            <td>2,000,000</td>*/}
            {/*            <td>10</td>*/}
            {/*            <td>Cty ABC</td>*/}
            {/*            <td>2025-05-01</td>*/}
            {/*            <td>*/}
            {/*                <img src="asset/icons/delete-2.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="delete-btn"*/}

            {/*                />*/}
            {/*                <img src="asset/icons/edit.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="edit-btn"*/}
            {/*                />*/}
            {/*            </td>*/}
            {/*        </tr>*/}
            {/*        <tr data-masp="SP001">*/}
            {/*            <td>SP001</td>*/}
            {/*            <td>Sản phẩm A</td>*/}
            {/*            <td>Điện tử</td>*/}
            {/*            <td>2,000,000</td>*/}
            {/*            <td>10</td>*/}
            {/*            <td>Cty ABC</td>*/}
            {/*            <td>2025-05-01</td>*/}
            {/*            <td>*/}
            {/*                <img src="asset/icons/delete-2.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="delete-btn"*/}

            {/*                />*/}
            {/*                <img src="asset/icons/edit.svg"*/}
            {/*                     alt=""*/}
            {/*                     className="edit-btn"*/}
            {/*                />*/}
            {/*            </td>*/}
            {/*        </tr>*/}
            {/*        </tbody>*/}
            {/*        <tfoot className="text-[8px] md:text-[10px] lg:text-[0.8rem]">*/}
            {/*        <tr data-masp="SP001">*/}
            {/*            <td colSpan="6">TỔNG</td>*/}
            {/*            <td colSpan="2">10.000.000</td>*/}
            {/*        </tr>*/}
            {/*        </tfoot>*/}
            {/*    </table>*/}
            {/*</div>*/}

        </div>
    </>)
}

export default ImportBill