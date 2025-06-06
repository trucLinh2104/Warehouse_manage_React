import './index.css'

import { useNavigate } from 'react-router-dom';
function Navigation() {
    const navigate = useNavigate();
    const directLink = (event) => {
        event.preventDefault();
        const arrow = event.currentTarget.querySelector('.sub-multi_option');
        const isInsideSubItem = event.currentTarget.querySelector('.sub-item');

        if (isInsideSubItem) {
            arrow.classList.toggle('active');
            isInsideSubItem.classList.toggle('open');
        }

        let path = event.target.getAttribute('href');

        navigate(path);
    };


    return (
        <>
            <div className="main-nav  fadeIn md:animate-none">
                <div className="avatar h-15 flex items-center w-full mt-[10px] text-base gap-[25px] mb-[15px] ">
                    <img src="./src/assets/image/avatar.jpg"
                         alt=""
                         className="w-[40px] h-[40px] object-cover lg:w-[50px] h-[50px]"
                    />
                    <span>Nguyễn Văn A </span>
                </div>
                <hr />
                <ul className="list-option">
                    <li className="item1"   onClick={(event) => directLink(event)}>
                        <img src="./src/assets/icons/chart-pie-svgrepo-com.svg"
                             alt=""
                        />
                        <a className="main-item"
                           href="/"
                        >Tổng quan</a>
                        <img src="./src/assets/icons/arrow.svg"
                             alt=""
                        />


                    </li>
                    <li className="item2 mul-option"   onClick={(event) => directLink(event)}>
                        <img src="./src/assets/icons/folder.svg"
                             alt=""
                        />
                        <div className="option">
                            <a className="main-item"

                            >Xuất - Nhập</a>
                            <ul className="sub-item">
                                <li className="sub-item1"><a href="./export-list">Xuất</a></li>
                                <li className="sub-item2"><a href="./import-list">Nhập</a></li>
                            </ul>
                        </div>
                        <img className="sub-multi_option"
                             src="./src/assets/icons/arrow.svg"
                             alt=""
                        />
                    </li>
                    <li className="item3"  onClick={(event) => directLink(event)}>
                        <img src="./src/assets/icons/setting.svg"
                             alt=""
                        />
                        <a className="main-item"
                           href="./warehouse-management"
                        > Quản lý kho</a>
                        <img src="./src/assets/icons/arrow.svg"
                             alt=""
                        />
                    </li>
                    <li className="item4 mul-option"  onClick={(event) => directLink(event)}>
                        <img src="./src/assets/icons/list-menu.svg"
                             alt=""
                        />
                        <div className="option">
                            <a className="main-item"
                               href="./product-list.html"
                            >Danh mục</a>
                            <ul className="sub-item">
                                <li className="sub-item1">
                                    <a href="./product-list.html">Sản phẩm</a>

                                </li>
                                <li className="sub-item2">
                                    <a href="./product-list.html">Nhóm hàng</a></li>
                            </ul>
                        </div>

                        <img className="sub-multi_option"
                             src="./src/assets/icons/arrow.svg"
                             alt=""
                        />
                    </li>

                </ul>
            </div>
        </>
    )

}

export default Navigation