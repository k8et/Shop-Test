import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import CartIcon from '../../../assets/svg/cart.svg'
import Close from '../../../assets/svg/x-lg.svg'
import Menu from '../../../assets/svg/list.svg'
import './style.css'

const Header = (props) => {
    const { cartItems } = props;
    const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 800);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <header>
                <div className="logo">
                    <h1><Link to="/">Nike</Link></h1>
                </div>
                <nav>
                    {isMobile ? (
                        <div className="menu-button" onClick={() => setIsModalOpen(true)}>
                            <img src={Menu} alt="" width="20" />
                        </div>
                    ) : (
                        <ul className={"toggle"}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Product</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/login">Login / Register</Link></li>
                        </ul>
                    )}
                    <div className="nav-cart">
                        <span>{cartItems.length}</span>
                        <Link to="/cart">
                            <img src={CartIcon} alt="" width="20" />
                        </Link>
                    </div>
                </nav>
                {isModalOpen && (
                    <div className="modal">
                        <ul className="modal-links">
                            <img src={Close} alt={''} onClick={() => setIsModalOpen(false)}/>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Product</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/login">Login / Register</Link></li>
                        </ul>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header;
