import React, {useState} from "react";
import Logo from '../images/logo.png';

const Header = () => {

    const [navState, setNavState] = useState(false);

    const [windowWidth , setWidth] = useState(window.innerWidth);

    window.addEventListener('resize', function(){
        setWidth(this.innerWidth);
    });

    return(
        <header className={navState ? 'navopen' : 'navclosed'}>

            
            <ul className="left-menu">
                {
                // conditional rendering
                (windowWidth > 992) ?
                    <>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    </>
                    :
                    ""
                }
            </ul>

            <a href="#" className="logo">
                <img src={Logo} alt="" />
            </a>

            <ul className="right-menu">
                {
                // conditional rendering
                (windowWidth < 992) ?
                    <>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    </>
                    :
                    ""
                }
                <li><a href="#">Press</a></li>
                <li><a href="#">What we Do</a></li>
                <li><a href="#">LogIn / Singup</a></li>
            </ul>

            <div className="phone-menu" onClick={()=> setNavState(!navState)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Header;