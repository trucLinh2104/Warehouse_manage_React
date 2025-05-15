import '../assets/css/header.css'
function Header() {
    const openMenu = (event) => {
        let isClickIcon = event.target.classList.contains('menuIcon');
        console.log(isClickIcon);
        let menu = document.querySelector('.main-nav');
        if (isClickIcon) {
            menu.classList.toggle('openNav');
        }
    }
    return (
        <>
            <header>
                <div id="header" className="pl-[50px]">
                    <div className=" menuIcon block absolute z-[999] left-[5px] "
                         onClick={(event) => openMenu(event)}
                    >
                        <img src="./src/assets/icons/navigation.svg"
                             alt=""
                             className="w-[20px] h-auto object-cover menuIcon  filter invert"
                        />
                    </div>
                    <div className="logo">
                        <img className="transparent-effect"
                             src="./src/assets/image/logo.png"
                             alt=""
                        />
                        <span>Công ty ABC</span>
                    </div>
                    <div className="action-btn">
                        <div className="notify-btn">
                            <img src="./src/assets/icons/icons8-bell-50.png"
                                 alt=""
                            />
                        </div>
                        <div className="logout-btn">
                            <img src="./src/assets/icons/icons8-logout-50.png"
                                 alt=""
                            />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header