import React from 'react';
import Navigation from '../Navigation/index.jsx';

function Filter(element) {


    const openFilter = async (event) => {

        let isClickIcon = event.target.classList.contains('filterIcon');
        console.log(isClickIcon);
        let modal = await document.querySelector(element.name);
        if (isClickIcon) {
            modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
        }


    };
    return (<>
        <div className="openSearch-mobile flex justify-end ">
            <p className="text-[20px] font-semibold pr-[10px]">Tìm kiếm theo bộ lọc</p>
            <img src="../src/assets/icons/filter-2.svg"
                 alt=""
                 className="w-[30px] h-auto object-cover filterIcon"
                 onClick={(event) => openFilter(event)}
            />
        </div>

    </>);
}

export default Filter;