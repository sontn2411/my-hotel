import { Link } from 'react-router-dom'
import './header.scss';
import iconCall from '../../assets/icons/call.png';
import iconCallHover from '../../assets/icons/callHover.png'
import logo from '../../assets/logo.svg';
import { useState } from 'react';


const Header = () => {

    const [hoverCall, setHoverCall] = useState(false)

    return (
        <div className="wrapperHeader">
            <div className="headerContainer">

                {/* logo */}
                <div className="headerLogo">
                    <Link to='/'>
                        <img src={logo} alt="logo" width='80px' />
                    </Link>
                </div>

                {/* menu */}
                <div className="headerMenu">
                    <ul>
                        <li>
                            <Link to='/about'>Giới thiệu</Link>
                        </li>
                        <li>
                            <Link>Phòng</Link>
                        </li>
                        <li>
                            <Link>Ưu đãi</Link>
                        </li>
                    </ul>
                </div>

                {/* call */}
                <div className="headerCall">
                    <a href='tel:02581234456'
                        onMouseEnter={() => setHoverCall(true)}
                        onMouseLeave={() => setHoverCall(false)}
                    >
                        {hoverCall ? <img src={iconCallHover} alt="call" width='20px' /> : <img src={iconCall} alt="call" width='20px' />}
                        <span>+84 258 1 234 456 </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header