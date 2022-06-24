import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import './header.css';
import  {to} from '../container/container';

const Header = () => {

    return (
        <Fragment>
                <nav>
                    <div className="menu left">
                        <button><i className="fa-solid fa-bars"></i></button>
                        <span>logo</span>
                        <ol>
                            <li><button onClick={() =>to('man')}>man</button></li>
                            <li><button onClick={() =>to('weman')}>weman</button></li>
                            <li><button onClick={() =>to('kids')}>kids</button></li>
                            <li><button onClick={() =>to('')}>all</button></li>
                        </ol>
                    </div>
                    <div className="menu right">
                        <ol>
                            <li><Link to=""><i className="fa-brands fa-facebook-f"></i></Link></li>
                            <li><Link to=""><i className="fa-brands fa-twitter"></i></Link></li>
                            <li><Link to=""><i className="fa-brands fa-google-plus-g"></i></Link></li>
                        </ol>
                        <button className="shoping"><i className="fa-solid fa-bag-shopping"></i></button>
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </nav>
                <header>
                    <div>
                        <h1>NIKE Shoes</h1>
                        <span className="sign">SIGN UP NOW AND GET 50% OFF</span>
                        <Link to="#" className="shop">SHOP NOW</Link>
                    </div>
                </header>
        </Fragment>
    )
}

export default Header;