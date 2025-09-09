
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    const [count, setCount] = useState(0)

    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-3">
                        <h4 className="h5 fw-bold">Georoute</h4>
                        <p className="mt-3 text-muted small">
                            Smart, efficient route planning for a more productive future.
                        </p>
                        <div className="d-flex gap-3 mt-3">
                            <a className="text-white-50" href="#">
                                <svg
                                    fill="currentColor"
                                    style={{
                                        height: "1.5rem",
                                        width: "1.5rem",
                                    }}
                                    viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.95.166-1.333 1.166-1.333h2.834v-5h-3c-4.667 0-5.667 2.153-5.667 5.75v2.25z" />
                                </svg>
                            </a>
                            <a className="text-white-50" href="#">
                                <svg
                                    fill="currentColor"
                                    style={{
                                        height: "1.5rem",
                                        width: "1.5rem",
                                    }}
                                    viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.373 0-6.104 2.731-6.104 6.103 0 .47.054.925.158 1.36-.593-.03-1.168-.14-1.722-.321-2.923-1.182-4.856-4.996-4.856-8.735 0-1.851.986-3.513 2.52-4.475-.027.004-.055.008-.083.012-.904.303-1.637.77-2.28 1.35-.91.79-1.472 1.748-1.722 2.859-.51.498-1.107 1.008-1.84 1.517-1.114.77-1.996 1.737-2.67 2.92-.628 1.106-.948 2.378-.948 3.702 0 4.07 3.298 7.368 7.368 7.368 1.833 0 3.51-.676 4.86-1.787 1.12.825 2.502 1.315 4.02 1.315 2.185 0 4.168-.89 5.584-2.336 1.12.215 2.19.08 3.193-.314-.37.896-.984 1.63-1.79 2.222-1.026.75-2.227 1.258-3.483 1.488 1.15-.178 2.25-.49 3.268-.99 1.408 1.258 3.064 2.13 4.887 2.13h.001z" />
                                </svg>
                            </a>
                            <a className="text-white-50" href="#">
                                <svg
                                    fill="currentColor"
                                    style={{
                                        height: "1.5rem",
                                        width: "1.5rem",
                                    }}
                                    viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.769s.784-1.769 1.75-1.769 1.75.79 1.75 1.769-.784 1.769-1.75 1.769zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h5 className="h6 fw-bold">Quick Links</h5>
                        <ul className="list-unstyled mt-3">
                            <li>
                                <a className="text-decoration-none text-white-50" href="#about">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-decoration-none text-white-50"
                                    href="#features">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a className="text-decoration-none text-white-50" href="#pricing">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a className="text-decoration-none text-white-50" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="h6 fw-bold">Support</h5>
                        <ul className="list-unstyled mt-3">
                            <li>
                                <a className="text-decoration-none text-white-50" href="#faq">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a className="text-decoration-none text-white-50" href="#contact">
                                    Support
                                </a>
                            </li>
                            <li>
                                <a className="text-decoration-none text-white-50" href="#">
                                    Knowledgebase
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="h6 fw-bold">Stay Updated</h5>
                        <p className="mt-3 text-muted small">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <form>
                            <div className="input-group">
                                <input
                                    className="form-control rounded-start-pill border-0"
                                    placeholder="Your email"
                                    type="email"
                                />
                                <button
                                    className="btn btn-primary rounded-end-pill"
                                    type="button">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-4 text-center text-muted small border-top pt-3">
                    © 2024 Georoute. All Rights Reserved.
                </div>
            </div>
        </footer>        
    )
}

export default Footer
