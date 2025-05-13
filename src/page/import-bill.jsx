import '../assets/css/import-bill.css'
function ImportBill (){

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
                    <div className="flex flex-col p-[10px] w-full p-0 lg:w-[50%]">
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
                <button className="flex items-center w-[150px]">
                    <img className=" ml-1 translate-y-0" src="./src/assets/icons/add-plus.svg"
                    />
                    Thêm sản phẩm
                </button>
            </div>

            <div className="wrapper">
                <table>
                    <thead>
                    <tr className="text-[8px] md:text-[10px] lg:text-[0.8rem]">
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th>Loại</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Ncc</th>
                        <th>Ngày nhập</th>
                        <th>Hành động</th>
                    </tr>
                    </thead>
                    <tbody className="text-[8px] md:text-[10px] lg:text-[0.8rem]">
                    <tr data-masp="SP001">
                        <td>SP001</td>
                        <td>Sản phẩm A</td>
                        <td>Điện tử</td>
                        <td>2,000,000</td>
                        <td>10</td>
                        <td>Cty ABC</td>
                        <td>2025-05-01</td>
                        <td>
                            <img src="asset/icons/delete-2.svg"
                                 alt=""
                                 className="delete-btn"

                            />
                            <img src="asset/icons/edit.svg"
                                 alt=""
                                 className="edit-btn"
                            />
                        </td>
                    </tr>
                    <tr data-masp="SP001">
                        <td>SP001</td>
                        <td>Sản phẩm A</td>
                        <td>Điện tử</td>
                        <td>2,000,000</td>
                        <td>10</td>
                        <td>Cty ABC</td>
                        <td>2025-05-01</td>
                        <td>
                            <img src="asset/icons/delete-2.svg"
                                 alt=""
                                 className="delete-btn"

                            />
                            <img src="asset/icons/edit.svg"
                                 alt=""
                                 className="edit-btn"
                            />
                        </td>
                    </tr>
                    <tr data-masp="SP001">
                        <td>SP001</td>
                        <td>Sản phẩm A</td>
                        <td>Điện tử</td>
                        <td>2,000,000</td>
                        <td>10</td>
                        <td>Cty ABC</td>
                        <td>2025-05-01</td>
                        <td>
                            <img src="asset/icons/delete-2.svg"
                                 alt=""
                                 className="delete-btn"

                            />
                            <img src="asset/icons/edit.svg"
                                 alt=""
                                 className="edit-btn"
                            />
                        </td>
                    </tr>
                    <tr data-masp="SP001">
                        <td>SP001</td>
                        <td>Sản phẩm A</td>
                        <td>Điện tử</td>
                        <td>2,000,000</td>
                        <td>10</td>
                        <td>Cty ABC</td>
                        <td>2025-05-01</td>
                        <td>
                            <img src="asset/icons/delete-2.svg"
                                 alt=""
                                 className="delete-btn"

                            />
                            <img src="asset/icons/edit.svg"
                                 alt=""
                                 className="edit-btn"
                            />
                        </td>
                    </tr>
                    <tr data-masp="SP001">
                        <td>SP001</td>
                        <td>Sản phẩm A</td>
                        <td>Điện tử</td>
                        <td>2,000,000</td>
                        <td>10</td>
                        <td>Cty ABC</td>
                        <td>2025-05-01</td>
                        <td>
                            <img src="asset/icons/delete-2.svg"
                                 alt=""
                                 className="delete-btn"

                            />
                            <img src="asset/icons/edit.svg"
                                 alt=""
                                 className="edit-btn"
                            />
                        </td>
                    </tr>
                    <tr data-masp="SP001">
                        <td>SP001</td>
                        <td>Sản phẩm A</td>
                        <td>Điện tử</td>
                        <td>2,000,000</td>
                        <td>10</td>
                        <td>Cty ABC</td>
                        <td>2025-05-01</td>
                        <td>
                            <img src="asset/icons/delete-2.svg"
                                 alt=""
                                 className="delete-btn"

                            />
                            <img src="asset/icons/edit.svg"
                                 alt=""
                                 className="edit-btn"
                            />
                        </td>
                    </tr>
                    <tr data-masp="SP001">
                        <td>SP001</td>
                        <td>Sản phẩm A</td>
                        <td>Điện tử</td>
                        <td>2,000,000</td>
                        <td>10</td>
                        <td>Cty ABC</td>
                        <td>2025-05-01</td>
                        <td>
                            <img src="asset/icons/delete-2.svg"
                                 alt=""
                                 className="delete-btn"

                            />
                            <img src="asset/icons/edit.svg"
                                 alt=""
                                 className="edit-btn"
                            />
                        </td>
                    </tr>
                    <tr data-masp="SP001">
                        <td>SP001</td>
                        <td>Sản phẩm A</td>
                        <td>Điện tử</td>
                        <td>2,000,000</td>
                        <td>10</td>
                        <td>Cty ABC</td>
                        <td>2025-05-01</td>
                        <td>
                            <img src="asset/icons/delete-2.svg"
                                 alt=""
                                 className="delete-btn"

                            />
                            <img src="asset/icons/edit.svg"
                                 alt=""
                                 className="edit-btn"
                            />
                        </td>
                    </tr>
                    <tr data-masp="SP001">
                        <td>SP001</td>
                        <td>Sản phẩm A</td>
                        <td>Điện tử</td>
                        <td>2,000,000</td>
                        <td>10</td>
                        <td>Cty ABC</td>
                        <td>2025-05-01</td>
                        <td>
                            <img src="asset/icons/delete-2.svg"
                                 alt=""
                                 className="delete-btn"

                            />
                            <img src="asset/icons/edit.svg"
                                 alt=""
                                 className="edit-btn"
                            />
                        </td>
                    </tr>
                    <tr data-masp="SP001">
                        <td>SP001</td>
                        <td>Sản phẩm A</td>
                        <td>Điện tử</td>
                        <td>2,000,000</td>
                        <td>10</td>
                        <td>Cty ABC</td>
                        <td>2025-05-01</td>
                        <td>
                            <img src="asset/icons/delete-2.svg"
                                 alt=""
                                 className="delete-btn"

                            />
                            <img src="asset/icons/edit.svg"
                                 alt=""
                                 className="edit-btn"
                            />
                        </td>
                    </tr>
                    </tbody>
                    <tfoot className="text-[8px] md:text-[10px] lg:text-[0.8rem]">
                    <tr data-masp="SP001">
                        <td colSpan="6">TỔNG</td>
                        <td colSpan="2">10.000.000</td>
                    </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    </>)
}

export default ImportBill