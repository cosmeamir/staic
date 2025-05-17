import React from 'react'
import Link from 'next/link';
function Nav() {
    return (
        <div>
            <div className="nav-area-center">
                <nav className="navigation">
                    <ul className="parent-ul">
                        <li className="has-dropdown with-megamenu">
                            <Link className="nav-link" href="/index-seven" prefetch>
                                Home
                            </Link>
                            
                        </li>
                        <li className="has-dropdown">
                            <Link className="nav-link" href="about">
                                About Us
                            </Link>
                            
                        </li>
                        <li className="has-dropdown">
                            <Link className="nav-link" href="/service-details">
                                What We Do
                            </Link>
                            
                        </li>
                        <li className="has-dropdown">
                            <Link className="nav-link" href="/portfolio-grid-col-4">
                                Portfolio
                            </Link>
                            
                        </li>
                        
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav