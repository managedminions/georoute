import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
    const [count, setCount] = useState(0)
    const location = useLocation();

    useEffect(() => {

        // Append the Georoute script to enable the on-page demo
        var script = document.createElement('script');
        script.async = false;
        script.src = "js/georoute.js";
        document.body.appendChild(script);

    }, [location.key]);

    return (
        <div>
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
            <main>
                <section className="py-5 text-center bg-white">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <h1 className="display-4 fw-bold text-dark">
                                    Optimize Your Routes, <br />
                                    Transform Your Operations
                                </h1>
                                <p className="mt-4 fs-5 text-muted">
                                    Georoute is the ultimate geospatial route planner, designed to
                                    find the fastest, most efficient paths for your business, saving
                                    you time and money.
                                </p>
                                <div className="mt-4 d-flex justify-content-center gap-3">
                                    <a
                                        className="btn btn-primary btn-lg rounded-pill shadow-lg"
                                        href="#pricing">
                                        Get Started
                                    </a>
                                    <a
                                        className="btn btn-outline-primary btn-lg rounded-pill"
                                        href="#features">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5 bg-light" id="about">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <img
                                    alt="Georoute Interface"
                                    className="img-fluid rounded-5 shadow-lg"
                                    src="https://placehold.co/600x400/2563EB/ffffff?text=Georoute+Map"
                                />
                            </div>
                            <div className="col-md-6">
                                <h2 className="display-6 fw-bold text-dark">What is Georoute?</h2>
                                <p className="mt-3 text-muted fs-5">
                                    Georoute is an advanced, cloud-based platform that leverages
                                    cutting-edge geospatial technology to solve complex routing
                                    problems. Whether you're a small delivery service or a large
                                    logistics company, our powerful algorithms can help you reduce
                                    fuel costs, minimize travel time, and enhance overall operational
                                    efficiency.
                                </p>
                                <ul className="list-unstyled mt-4 text-muted">
                                    <li className="d-flex align-items-center mb-2">
                                        <svg
                                            className="me-2"
                                            fill="currentColor"
                                            style={{
                                                color: "#10B981",
                                                height: "1.25rem",
                                                width: "1.25rem",
                                            }}
                                            viewBox="0 0 20 20">
                                            <path
                                                clipRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                        <span>Real-time traffic and data analysis</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <svg
                                            className="me-2"
                                            fill="currentColor"
                                            style={{
                                                color: "#10B981",
                                                height: "1.25rem",
                                                width: "1.25rem",
                                            }}
                                            viewBox="0 0 20 20">
                                            <path
                                                clipRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                        <span>Multi-stop route optimization</span>
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <svg
                                            className="me-2"
                                            fill="currentColor"
                                            style={{
                                                color: "#10B981",
                                                height: "1.25rem",
                                                width: "1.25rem",
                                            }}
                                            viewBox="0 0 20 20">
                                            <path
                                                clipRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                        <span>Customizable constraints and vehicle types</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5" id="features">
                    <div className="container text-center">
                        <h2 className="display-6 fw-bold text-dark">
                            Powerful Features for Smarter Routes
                        </h2>
                        <p className="mt-3 text-muted fs-5 col-md-8 mx-auto">
                            Georoute offers a comprehensive suite of tools to help you plan,
                            execute, and monitor your routes with unparalleled precision.
                        </p>
                        <div className="row mt-5 g-4">
                            <div className="col-md-4">
                                <div className="card p-4 rounded-5 shadow-sm border-0 h-100">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <svg
                                            className="text-primary mb-3"
                                            fill="none"
                                            stroke="currentColor"
                                            style={{
                                                height: "3rem",
                                                width: "3rem",
                                            }}
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M14.752 11.168l-3.197 3.197m0 0L8.358 12.37M11.555 14.365a4.01 4.01 0 01-5.679 0c-1.57-1.57-1.57-4.116 0-5.686a4.01 4.01 0 015.679 0c1.57 1.57 1.57 4.116 0 5.686z"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                            <path
                                                d="M21 21l-4.5-4.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        <h3 className="h5 fw-bold text-dark mt-2">
                                            Optimal Pathfinding
                                        </h3>
                                        <p className="text-muted mt-2">
                                            Our advanced algorithms find the most efficient route,
                                            considering distance, time, traffic, and more.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-4 rounded-5 shadow-sm border-0 h-100">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <svg
                                            className="text-primary mb-3"
                                            fill="none"
                                            stroke="currentColor"
                                            style={{
                                                height: "3rem",
                                                width: "3rem",
                                            }}
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        <h3 className="h5 fw-bold text-dark mt-2">Real-Time Traffic</h3>
                                        <p className="text-muted mt-2">
                                            Get up-to-the-minute traffic updates to dynamically adjust
                                            routes and avoid delays.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-4 rounded-5 shadow-sm border-0 h-100">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <svg
                                            className="text-primary mb-3"
                                            fill="none"
                                            stroke="currentColor"
                                            style={{
                                                height: "3rem",
                                                width: "3rem",
                                            }}
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M19 11H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 01-2 2zM3 13h18M3 17h18m-9 4h-2M15 21h-2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                        <h3 className="h5 fw-bold text-dark mt-2">
                                            Multi-Stop Planning
                                        </h3>
                                        <p className="text-muted mt-2">
                                            Plan routes for multiple destinations with ease, optimizing
                                            the sequence for maximum efficiency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5 bg-light" id="pricing">
                    <div className="container text-center">
                        <h2 className="display-6 fw-bold text-dark">
                            Simple & Transparent Pricing
                        </h2>
                        <p className="mt-3 text-muted fs-5 col-md-8 mx-auto">
                            Choose the plan that's right for your business. No hidden fees, no
                            long-term contracts.
                        </p>
                        <div className="row mt-5 g-4">
                            <div className="col-md-4">
                                <div className="card p-4 rounded-5 shadow-sm border-0 h-100 d-flex flex-column">
                                    <div className="card-body text-center">
                                        <h3 className="h4 fw-bold text-dark">Basic</h3>
                                        <p className="card-text text-muted">
                                            Perfect for small teams and individuals.
                                        </p>
                                        <p className="fs-2 fw-bold text-dark">
                                            $29
                                            <span className="fs-6 fw-normal text-muted">/mo</span>
                                        </p>
                                        <ul className="list-unstyled text-start">
                                            <li className="d-flex align-items-center mb-2">
                                                <svg
                                                    className="me-2"
                                                    fill="currentColor"
                                                    style={{
                                                        color: "#10B981",
                                                        height: "1.25rem",
                                                        width: "1.25rem",
                                                    }}
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        clipRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                                <span>Unlimited Routing</span>
                                            </li>
                                            <li className="d-flex align-items-center mb-2">
                                                <svg
                                                    className="me-2"
                                                    fill="currentColor"
                                                    style={{
                                                        color: "#10B981",
                                                        height: "1.25rem",
                                                        width: "1.25rem",
                                                    }}
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        clipRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                                <span>Adnaced Reporting</span>
                                            </li>
                                            <li className="d-flex align-items-center mb-2">
                                                <svg
                                                    className="me-2"
                                                    fill="currentColor"
                                                    style={{
                                                        color: "#10B981",
                                                        height: "1.25rem",
                                                        width: "1.25rem",
                                                    }}
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        clipRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                                <span>API Access</span>
                                            </li>
                                            <li className="d-flex align-items-center mb-2">
                                                <svg
                                                    className="me-2"
                                                    fill="currentColor"
                                                    style={{
                                                        color: "#10B981",
                                                        height: "1.25rem",
                                                        width: "1.25rem",
                                                    }}
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        clipRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                                <span>Email support</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer bg-transparent border-0 mt-auto">
                                        <a className="btn btn-primary w-100 rounded-pill" href="#">
                                            Choose Basic
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-4 rounded-5 shadow-sm border border-primary h-100 d-flex flex-column position-relative">
                                    <span className="badge bg-primary position-absolute top-0 end-0 mt-2 me-2 p-2 rounded-pill">
                                        Most Popular
                                    </span>
                                    <div className="card-body text-center">
                                        <h3 className="h4 fw-bold text-dark">Advanced</h3>
                                        <p className="card-text text-muted">
                                            Ideal for growing businesses.
                                        </p>
                                        <p className="fs-2 fw-bold text-dark">
                                            $99
                                            <span className="fs-6 fw-normal text-muted">/mo</span>
                                        </p>
                                        <ul className="list-unstyled text-start">
                                            <li className="d-flex align-items-center mb-2">
                                                <svg
                                                    className="me-2"
                                                    fill="currentColor"
                                                    style={{
                                                        color: "#10B981",
                                                        height: "1.25rem",
                                                        width: "1.25rem",
                                                    }}
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        clipRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                                <span>Unlimited Routing</span>
                                            </li>
                                            <li className="d-flex align-items-center mb-2">
                                                <svg
                                                    className="me-2"
                                                    fill="currentColor"
                                                    style={{
                                                        color: "#10B981",
                                                        height: "1.25rem",
                                                        width: "1.25rem",
                                                    }}
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        clipRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                                <span>Advanced Reporting</span>
                                            </li>
                                            <li className="d-flex align-items-center mb-2">
                                                <svg
                                                    className="me-2"
                                                    fill="currentColor"
                                                    style={{
                                                        color: "#10B981",
                                                        height: "1.25rem",
                                                        width: "1.25rem",
                                                    }}
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        clipRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                                <span>API Access</span>
                                            </li>
                                            <li className="d-flex align-items-center mb-2">
                                                <svg
                                                    className="me-2"
                                                    fill="currentColor"
                                                    style={{
                                                        color: "#10B981",
                                                        height: "1.25rem",
                                                        width: "1.25rem",
                                                    }}
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        clipRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                                <span>Priority Support</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer bg-transparent border-0 mt-auto">
                                        <a className="btn btn-primary w-100 rounded-pill" href="#">
                                            Choose Advanced
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card p-4 rounded-5 shadow-sm border-0 h-100 d-flex flex-column">
                                    <div className="card-body text-center">
                                        <h3 className="h4 fw-bold text-dark">Enterprise</h3>
                                        <p className="card-text text-muted">
                                            For large-scale operations.
                                        </p>
                                        <p className="fs-2 fw-bold text-dark">Custom</p>
                                        <ul className="list-unstyled text-start">
                                            <li className="d-flex align-items-center mb-2">
                                                <svg
                                                    className="me-2"
                                                    fill="currentColor"
                                                    style={{
                                                        color: "#10B981",
                                                        height: "1.25rem",
                                                        width: "1.25rem",
                                                    }}
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        clipRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                                <span>Dedicated Account Manager</span>
                                            </li>
                                            <li className="d-flex align-items-center mb-2">
                                                <svg
                                                    className="me-2"
                                                    fill="currentColor"
                                                    style={{
                                                        color: "#10B981",
                                                        height: "1.25rem",
                                                        width: "1.25rem",
                                                    }}
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        clipRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                                <span>Custom Integrations</span>
                                            </li>
                                            <li className="d-flex align-items-center mb-2">
                                                <svg
                                                    className="me-2"
                                                    fill="currentColor"
                                                    style={{
                                                        color: "#10B981",
                                                        height: "1.25rem",
                                                        width: "1.25rem",
                                                    }}
                                                    viewBox="0 0 20 20">
                                                    <path
                                                        clipRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                                <span>24/7 Telephone Support</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-footer bg-transparent border-0 mt-auto">
                                        <a
                                            className="btn btn-outline-primary w-100 rounded-pill"
                                            href="#contact">
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5" id="testimonials">
                    <div className="container text-center">
                        <h2 className="display-6 fw-bold text-dark">What Our Customers Say</h2>
                        <p className="mt-3 text-muted fs-5 col-md-8 mx-auto">
                            Hear from the businesses that have transformed their operations with
                            Georoute.
                        </p>
                        <div
                            className="carousel slide mt-5"
                            data-bs-ride="carousel"
                            id="testimonialCarousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="card p-4 rounded-5 shadow-sm border-0 h-100">
                                                <div className="card-body">
                                                    <p className="card-text fs-5 fst-italic text-muted">
                                                        "Georoute has saved our delivery service countless hours
                                                        and thousands of dollars in fuel costs. The optimization
                                                        is second to none."
                                                    </p>
                                                    <div className="d-flex justify-content-center align-items-center mt-4">
                                                        <img
                                                            alt="Jane's photo"
                                                            className="rounded-circle me-3"
                                                            src="https://placehold.co/48x48/60a5fa/ffffff?text=JK"
                                                        />
                                                        <div>
                                                            <p className="mb-0 fw-bold text-dark">Jane K.</p>
                                                            <p className="mb-0 text-muted small">
                                                                Logistics Manager, Urban Express
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card p-4 rounded-5 shadow-sm border-0 h-100">
                                                <div className="card-body">
                                                    <p className="card-text fs-5 fst-italic text-muted">
                                                        "The multi-stop feature is a game-changer. We can now
                                                        plan complex routes in a matter of minutes instead of several hours."
                                                    </p>
                                                    <div className="d-flex justify-content-center align-items-center mt-4">
                                                        <img
                                                            alt="Alex's photo"
                                                            className="rounded-circle me-3"
                                                            src="https://placehold.co/48x48/60a5fa/ffffff?text=AS"
                                                        />
                                                        <div>
                                                            <p className="mb-0 fw-bold text-dark">Alex S.</p>
                                                            <p className="mb-0 text-muted small">
                                                                Field Service Director, TechConnect
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="card p-4 rounded-5 shadow-sm border-0 h-100">
                                                <div className="card-body">
                                                    <p className="card-text fs-5 fst-italic text-muted">
                                                        "I've been using Georoute for a year, and my fuel costs
                                                        have dropped by 30%. I highly recommend it to anyone in
                                                        logistics."
                                                    </p>
                                                    <div className="d-flex justify-content-center align-items-center mt-4">
                                                        <img
                                                            alt="Michael's photo"
                                                            className="rounded-circle me-3"
                                                            src="https://placehold.co/48x48/60a5fa/ffffff?text=MJ"
                                                        />
                                                        <div>
                                                            <p className="mb-0 fw-bold text-dark">Michael J.</p>
                                                            <p className="mb-0 text-muted small">
                                                                Owner, MJ Hauling
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card p-4 rounded-5 shadow-sm border-0 h-100">
                                                <div className="card-body">
                                                    <p className="card-text fs-5 fst-italic text-muted">
                                                        "The interface is so intuitive and easy to use. Even our
                                                        newest employees were able to start optimizing routes on
                                                        day one."
                                                    </p>
                                                    <div className="d-flex justify-content-center align-items-center mt-4">
                                                        <img
                                                            alt="Lina's photo"
                                                            className="rounded-circle me-3"
                                                            src="https://placehold.co/48x48/60a5fa/ffffff?text=LK"
                                                        />
                                                        <div>
                                                            <p className="mb-0 fw-bold text-dark">Lina K.</p>
                                                            <p className="mb-0 text-muted small">
                                                                Operations Lead, City Couriers
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="card p-4 rounded-5 shadow-sm border-0 h-100">
                                                <div className="card-body">
                                                    <p className="card-text fs-5 fst-italic text-muted">
                                                        "Customer satisfaction has improved significantly
                                                        because of the predictable delivery times from
                                                        Georoute's planning."
                                                    </p>
                                                    <div className="d-flex justify-content-center align-items-center mt-4">
                                                        <img
                                                            alt="Ryan's photo"
                                                            className="rounded-circle me-3"
                                                            src="https://placehold.co/48x48/60a5fa/ffffff?text=RS"
                                                        />
                                                        <div>
                                                            <p className="mb-0 fw-bold text-dark">Ryan S.</p>
                                                            <p className="mb-0 text-muted small">
                                                                Warehouse Manager, Global Supply
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card p-4 rounded-5 shadow-sm border-0 h-100">
                                                <div className="card-body">
                                                    <p className="card-text fs-5 fst-italic text-muted">
                                                        "This tool is a must-have for any business that relies
                                                        on daily route planning. It paid for itself in the very first
                                                        month of use."
                                                    </p>
                                                    <div className="d-flex justify-content-center align-items-center mt-4">
                                                        <img
                                                            alt="Diana's photo"
                                                            className="rounded-circle me-3"
                                                            src="https://placehold.co/48x48/60a5fa/ffffff?text=DS"
                                                        />
                                                        <div>
                                                            <p className="mb-0 fw-bold text-dark">Diana S.</p>
                                                            <p className="mb-0 text-muted small">
                                                                Sales Rep, Direct Sales Inc.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                data-bs-slide="prev"
                                data-bs-target="#testimonialCarousel"
                                type="button">
                                <span aria-hidden="true" className="carousel-control-prev-icon" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                data-bs-slide="next"
                                data-bs-target="#testimonialCarousel"
                                type="button">
                                <span aria-hidden="true" className="carousel-control-next-icon" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="py-5 bg-light" id="faq">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="display-6 fw-bold text-dark">
                                    Frequently Asked Questions
                                </h2>
                                <p className="mt-3 text-muted fs-5">
                                    Find quick answers to the most common questions about our
                                    platform.
                                </p>
                                <div className="accordion mt-4" id="faqAccordion">
                                    <div className="accordion-item rounded-5 mb-3 shadow-sm border-0">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                aria-controls="collapseOne"
                                                aria-expanded="true"
                                                className="accordion-button rounded-5"
                                                data-bs-target="#collapseOne"
                                                data-bs-toggle="collapse"
                                                type="button">
                                                How does Georoute calculate the most efficient route?
                                            </button>
                                        </h2>
                                        <div
                                            aria-labelledby="headingOne"
                                            className="accordion-collapse collapse show"
                                            data-bs-parent="#faqAccordion"
                                            id="collapseOne">
                                            <div className="accordion-body text-start text-muted">
                                                Our platform uses a proprietary algorithm that takes into
                                                account real-time traffic data, historical travel patterns,
                                                road closures, and vehicle-specific constraints to calculate
                                                the optimal path.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item rounded-5 mb-3 shadow-sm border-0">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button
                                                aria-controls="collapseTwo"
                                                aria-expanded="false"
                                                className="accordion-button rounded-5 collapsed"
                                                data-bs-target="#collapseTwo"
                                                data-bs-toggle="collapse"
                                                type="button">
                                                Can I integrate Georoute with my existing systems?
                                            </button>
                                        </h2>
                                        <div
                                            aria-labelledby="headingTwo"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion"
                                            id="collapseTwo">
                                            <div className="accordion-body text-start text-muted">
                                                Yes, Georoute offers a robust and well-documented API that
                                                allows for seamless integration with your business
                                                applications, including ERP, CRM, and logistics software.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item rounded-5 mb-3 shadow-sm border-0">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                aria-controls="collapseThree"
                                                aria-expanded="false"
                                                className="accordion-button rounded-5 collapsed"
                                                data-bs-target="#collapseThree"
                                                data-bs-toggle="collapse"
                                                type="button">
                                                What types of businesses can benefit from Georoute?
                                            </button>
                                        </h2>
                                        <div
                                            aria-labelledby="headingThree"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion"
                                            id="collapseThree">
                                            <div className="accordion-body text-start text-muted">
                                                Georoute is designed for a wide range of businesses,
                                                including delivery services, field service technicians,
                                                sales teams, logistics and transportation companies, and
                                                more.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5" id="contact">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h2 className="display-6 fw-bold text-dark">Get in Touch</h2>
                                <p className="mt-3 text-muted fs-5">
                                    Have questions or want to discuss a custom plan? We'd love to hear
                                    from you.
                                </p>
                                <form className="mt-4">
                                    <div className="mb-3">
                                        <input
                                            className="form-control rounded-pill p-3"
                                            id="contact-name"
                                            placeholder="Your Name"
                                            required
                                            type="text"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            className="form-control rounded-pill p-3"
                                            placeholder="Your Email"
                                            required
                                            type="email"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            className="form-control rounded-4 p-3"
                                            placeholder="Your Message"
                                            required
                                            rows="5"
                                        />
                                    </div>
                                    <button
                                        className="btn btn-primary btn-lg w-100 rounded-pill shadow-lg"
                                        type="submit">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
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
        </div>
    )
}

export default App
