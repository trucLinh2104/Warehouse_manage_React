import '../assets/css/header.css'
function Header() {

    return (
        <>
            <header>
                <div id="header">
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