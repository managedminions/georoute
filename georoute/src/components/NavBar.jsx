
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    const [count, setCount] = useState(0)

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white sticky-top shadow-sm py-3">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        stroke="currentColor"
                        style={{
                            height: "2rem",
                            width: "2rem",
                        }}
                        viewBox="0 0 24 24">
                        <path
                            d="M17.657 16.657L13.414 20.899a2.001 2.001 0 01-2.828 0L6.343 16.657A8 8 0 1117.657 16.657z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        />
                        <path
                            d="M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        />
                    </svg>
                    <span className="ms-2 fw-bold text-dark fs-5">Georoute</span>
                </a>
                <button
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-bs-target="#navbarNav"
                    data-bs-toggle="collapse"
                    type="button">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#features">
                                Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pricing">
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonials">
                                Testimonials
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
