import React from 'react';
import CricleChart from '../component/cricle-chart.jsx';
import '../assets/css/overview.css';
import TableCustom from '../component/table-custom.jsx';
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
                        <div className="bg-[var(--primary)] text-white text-center h-[30px] leading-[30px] text-[22px] font-bold">TỔNG KHO</div>
                        <div className="box-desc flex justify-center items-center sm:gap-3 sm:pr-3 sm:pl-3 lg:pr-8 lg:pl-8">
                            <div className="lg:basis-1/2 sm:basis-2/3 sm:shrink-0 sm:grow-0">
                                <div className="box-item-title sm:text-sm sm:text-center">
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
                            <div className="flex-1 relative">
                                <ul className="border-[0.5px] border-[#171100] border-r-0 inline-block
                                               shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
                                               absolute right-0 top-[-5px]  sm:hidden">
                                    <li>Ngày</li>
                                    <li>Tuần</li>
                                    <li>Tháng</li>
                                    <li>Năm</li>
                                </ul>
                                <div className="flex-wrap w-full mt-[40px]">
                                <div className="shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_0px_-30px,_rgba(10,_37,_64,_0.35)_0px_-2px_6px_0px_inset] w-full flex gap-[30px] bg-[aliceblue] p-[10px] rounded-[20px] mb-[15px]">
                                        <img src="./asset/icons/up_file.png"
                                             alt=""
                                        />
                                        <div className="about">
                                            <div className="title">Tổng số phiếu</div>
                                            <div className="count">52</div>
                                        </div>
                                    </div>
                                    <div className="shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_0px_-30px,_rgba(10,_37,_64,_0.35)_0px_-2px_6px_0px_inset] w-full flex gap-[30px] bg-[aliceblue] p-[10px] rounded-[20px]">
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
                        <div className="bg-[var(--primary)] text-white text-center h-[30px] leading-[30px] text-[22px] font-bold">XUẤT KHO</div>
                        <div className="box-desc  flex justify-center items-center sm:gap-3 sm:pr-3 sm:pl-3 lg:pr-8 lg:pl-8">
                            <div className="lg:basis-1/2 sm:basis-2/3 shrink-0 grow-0">
                                <div className="box-item-title sm:text-sm sm:text-center">
                                    Tỷ lệ xuất kho theo tình trạng sản phẩm
                                </div>
                                <div className="flex items-center mt-[15px] gap-[15px]">
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
                            <div className="flex-1 relative">
                                <ul className="border-[0.5px] border-[#171100] border-r-0 inline-block
                                               shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
                                               absolute right-0 top-[-5px]  sm:hidden">
                                    <li>Ngày</li>
                                    <li>Tuần</li>
                                    <li>Tháng</li>
                                    <li>Năm</li>
                                </ul>
                                <div className="flex-wrap w-full mt-[40px] ">
                                    <div className="shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_0px_-30px,_rgba(10,_37,_64,_0.35)_0px_-2px_6px_0px_inset] w-full flex gap-[30px] bg-[aliceblue] p-[10px] rounded-[20px] mb-[15px]">
                                        <img src="./asset/icons/up_file.png"
                                             alt=""
                                        />
                                        <div className="about">
                                            <div className="title">Tổng số phiếu</div>
                                            <div className="count">52</div>
                                        </div>
                                    </div>
                                    <div className="shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_0px_-30px,_rgba(10,_37,_64,_0.35)_0px_-2px_6px_0px_inset] w-full flex gap-[30px] bg-[aliceblue] p-[10px] rounded-[20px]">
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