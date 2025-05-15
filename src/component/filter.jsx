import React from 'react';
import Navigation from './navigation.jsx';

function Filter(element) {
    let display_org = null;

    const openFilter =async (event) => {
        let isClickIcon = event.target.classList.contains('filterIcon');
        let modal = await document.querySelector(element.name);
        if(display_org === null) {
            display_org = modal.style.display;
        }
        if (isClickIcon) {
            modal.style.display = (modal.style.display === display_org) ? 'none' : display_org;
        }
    }
    return(<>
        <div className="openSearch-mobile flex justify-end ">
            <p className="text-[20px] font-semibold pr-[10px]">Tìm kiếm theo bộ lọc</p>
            <img src="./src/assets/icons/filter-2.svg"
                 alt=""
                 className="w-[30px] h-auto object-cover filterIcon"
                 onClick={(event) => openFilter(event)}
            />
        </div>

    </>)
}
export default Filter