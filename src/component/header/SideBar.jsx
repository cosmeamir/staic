"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';


function SideBar({ isSidebarOpen, toggleSidebar }) {

    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menuhome) => {
        setOpenMenu(openMenu === menuhome ? null : menuhome);
    };


    // useEffect(() => {
    //     const sidebar = document.getElementById('side-bar');
    //     const anywhereHome = document.getElementById('anywhere-home');

    //     if (isSidebarOpen) {
    //         sidebar.classList.add('show');
    //         anywhereHome.classList.add('bgshow');
    //     } else {
    //         sidebar.classList.remove('show');
    //         anywhereHome.classList.remove('bgshow');
    //     }
    // }, [isSidebarOpen]);


    return (
        <div>


            <div id="side-bar" className={`side-bar ${isSidebarOpen ? 'show' : ''}`}>
                <button className="close-icon-menu" aria-label="Close Menu" onClick={toggleSidebar}>
                    <i className="far fa-times"></i>
                </button>
                {/* inner menu area desktop start */}
                <div className="inner-main-wrapper-desk">
                    <div className="thumbnail">
                        <img src="assets/images/logo/05.png" alt="Innovate" />
                    </div>
                    <div className="inner-content">
                        <p className="disc">
                            Innovate Architects is a full-service design firm providing architecture
                            architecture.
                        </p>
                        <div className="contact-information--sidebar">
                            <h6 className="title">Contact Info</h6>
                            <div className="single-info">
                                <a href="#">+phone</a>
                            </div>
                            <div className="single-info">
                                <a href="#">
                                    TESTO <br /> TESTO
                                </a>
                            </div>
                            <div className="single-info">
                                <a href="#">EMAIL</a>
                            </div>
                            
                            
                            <div className="rts-social-style-one">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-youtube" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-brands fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer">
                            <h4 className="title">Got a project in mind?</h4>
                            <a href="/contact" className="rts-btn btn-primary">
                                Let's talk
                            </a>
                        </div>
                    </div>
                </div>
                {/* mobile menu area start */}
                <div className="mobile-menu-main">
                    <nav className="nav-main mainmenu-nav mt--30">
                        <ul className="mainmenu metismenu" id="mobile-menu-active">
                            <li className="has-droupdown">
                                <a href="/index-seven" className="main" onClick={() => toggleMenu(1)}>
                                    Home
                                </a>
             
                            </li>
                            <li className="has-droupdown">
                                <a href="about" className="main" onClick={() => toggleMenu(2)}>
                                    About Us
                                </a>
                                
                            </li>
                            <li className="has-droupdown">
                                <a href="/service-details" className="main" onClick={() => toggleMenu(3)}>
                                    What We Do
                                </a>
                                
                            </li>
                            <li className="has-droupdown">
                                <a href="/portfolio-grid-col-4" className="main" onClick={() => toggleMenu(4)}>
                                    Portfolio
                                </a>
                               
                            </li>
                            
                            <li>
                                <a href="/contact" className="main">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="rts-social-style-one pl--20 mt--100">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-youtube" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-linkedin-in" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* mobile menu area end */}
            </div>



        </div>
    )
}

export default SideBar