import React from 'react';
import '../assets/css/overview.css'
import CricleChart from '../component/cricle-chart.jsx';

function Overview() {
 const data = {
        datasets: [
            {
                data: [30,70], // Dữ liệu cho các phần
                backgroundColor: ['#000066', '#00CCFF'], // Màu sắc cho các phần
            },
        ],
    };

 const data_export = {

     datasets: [
         {
             data: [30, 50, 20], // Dữ liệu cho các phần
             backgroundColor: ['#CCFFCC', '#00CC00', '#004400'], // Màu sắc cho các phần
         },
     ],
 };
    return (
        <>
            <div className="main-content">
                <div className="content">
                    <div className="box box-1">
                        <div className="box-title">TỔNG KHO</div>
                        <div className="box-desc">
                            <div className="box-item item-1">
                                <div className="box-item-title">
                                    Tỉ lệ xuất - nhập kho
                                </div>
                                <div className="container">
                                    <CricleChart data={data} />
                                    <div className="legend">
                                        <div className="legend-item">
                                            <div className="color-box"
                                                 style={{ backgroundColor: '#000066' }}
                                            ></div>
                                            Xuất kho
                                        </div>
                                        <div className="legend-item">
                                            <div className="color-box"
                                                 style={{ backgroundColor: '#00CCFF' }}

                                            ></div>
                                            Nhập kho
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="box-item item-2">
                                <ul className="date-container box-item-title">
                                    <li>Ngày</li>
                                    <li>Tuần</li>
                                    <li>Tháng</li>
                                    <li>Năm</li>
                                </ul>
                                <div className="container desc">
                                <div className="detail">
                                        <img src="./asset/icons/up_file.png"
                                             alt=""
                                        />
                                        <div className="about">
                                            <div className="title">Tổng số phiếu</div>
                                            <div className="count">52</div>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <img src="./asset/icons/product.png"
                                             alt=""
                                        />
                                        <div className="about">
                                            <div className="title">Tổng tồn kho</div>
                                            <div className="count">52.000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box box-2">
                        <div className="box-title">XUẤT KHO</div>
                        <div className="box-desc">
                            <div className="box-item item-1">
                                <div className="box-item-title">
                                    Tỷ lệ xuất kho theo tình trạng sản phẩm
                                </div>
                                <div className="container">
                                    <CricleChart data={data_export}></CricleChart>

                                    <div className="legend">
                                        <div className="legend-item">
                                            <div className="color-box"
                                                 style={{ backgroundColor: '#CCFFCC' }}
                                            ></div>
                                            Tươi mới
                                        </div>
                                        <div className="legend-item">
                                            <div className="color-box"
                                                 style={{ backgroundColor: '#00CC00' }}
                                            ></div>
                                            Bình thường
                                        </div>
                                        <div className="legend-item">
                                            <div className="color-box"
                                                 style={{ backgroundColor: '#004400' }}

                                            ></div>
                                            Hết hạn
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="box-item item-2">
                                <ul className="date-container box-item-title">
                                    <li>Ngày</li>
                                    <li>Tuần</li>
                                    <li>Tháng</li>
                                    <li>Năm</li>
                                </ul>
                                <div className="container desc">
                                    <div className="detail">
                                        <img src="./asset/icons/up_file.png"
                                             alt=""
                                        />
                                        <div className="about">
                                            <div className="title">Tổng số phiếu</div>
                                            <div className="count">52</div>
                                        </div>
                                    </div>
                                    <div className="detail">
                                        <img src="./asset/icons/product.png"
                                             alt=""
                                        />
                                        <div className="about">
                                            <div className="title">Tổng tồn kho</div>
                                            <div className="count">52.000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Overview