import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
    const [textSize, setTextSize] = useState(5);
    const state = useSelector(state => state.handleCart);

    const updateTextSize = () => {
        setTextSize(prevSize => (prevSize < 50 ? prevSize + 5 : 5));
    };

    useEffect(() => {
        const intervalId = setInterval(updateTextSize, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">[ T I T L E ] Last Work For GoMycode</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">| Home |</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">| Products |</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">| About |</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">| Contact |</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark m-2">
                            <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})
                        </NavLink>

                        <button
                            className="btn btn-outline-dark m-2"
                            onClick={() => {
                                document.body.innerHTML = '';

                                const newH1 = document.createElement('h1');
                                newH1.innerText = 'Se site web est just un code de secour car j ai casser mon projet principale je vous demande de m excuser et d accepter se manifique code simple qui utilise une api et du js , jsx react . . .';
                                newH1.className = 'dynamic-text';
                                document.body.appendChild(newH1);
                            }}
                        >
                            📢 Annonce ! ! !
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
