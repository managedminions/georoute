
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function HomePage() {
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
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="form-inline mb-0">
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-5 p-0">
                                        <div className="form-group">
                                            <input className="form-control mb-2 pe-2" id="origin" name="origin" placeholder="Starting Address" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-5 p-0">
                                        <div className="form-group">
                                            <input className="form-control mb-2 ms-2" id="destination" name="destination" placeholder="Ending Address" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 p-0">
                                        <div className="form-group">
                                            <button className="btn btn-sm btn-outline-danger float-end" id="clear-btn" type="button">
                                                <i className="fa-solid fa-stop" title="Reset"></i>
                                            </button>
                                            <button
                                                className="btn btn-sm btn-outline-primary me-1 float-end" id="default-btn" type="button">
                                                <i className="fa-solid fa-location-dot" title="Current Location"></i>
                                            </button>
                                            <button className="btn btn-sm btn-outline-success me-1 float-end" id="start-btn" type="button">
                                                <i className="fa-solid fa-play" title="Start"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-2 p-0">
                                        <div className="alert bg-info-subtle mb-2" id="message-box" role="alert"><strong>Instructions: </strong>Click anywhere on the map to set your starting point.</div>
                                    </div>
                                    <div className="mb-4 rounded-5 p-1" style={{ height: '450px' }} id="map"></div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-5">
                            <h2 className="display-6 fw-bold text-dark" id="section-title">What is Georoute?</h2>
                            <p className="mt-3 text-muted fs-5" id="section-description">
                                <b>Georoute</b> is a cloud-based platform that leverages advanced geospatial
                                technology to solve complex routing problems. By determining the most efficient
                                routes between destinations, it helps businesses reduce fuel cost, minimize travel
                                time, and improve overall operational efficiency.
                            </p>
                            <div className="d-none mt-4 text-center" id="loading-indicator">
                                <div className="spinner-border text-primary mx-auto" role="status" />
                                <p className="mt-2">Calculating route...</p>
                            </div>
                            <div className="d-none" id="route-details">
                                <h2 className="display-6 fw-bold text-dark">Route Summary</h2>
                                <div className="row" style={{ height: '100px' }}>
                                    <div className="col-4 d-flex h-100 m-3 p-2 rounded-5 bg-success-subtle justify-content-center align-items-center">
                                        <h4 className="font-semibold" id="distance-box" />
                                    </div>
                                    <div className="col-4 d-flex h-100 m-3 p-2 rounded-5 bg-success-subtle justify-content-center align-items-center">
                                        <h4 className="font-semibold" id="time-box" />
                                    </div>
                                </div>
                                <div className="overflow-y-auto max-h-60 pr-2">
                                    <ol
                                        className="list-decimal list-inside space-y-2"
                                        id="directions-list"
                                    />
                                </div>
                            </div>

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
                                    <i className="fa-solid fa-location-dot text-primary text-opacity-75 fa-3x mb-4"></i>
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
                                    <i className="fa-regular fa-clock text-primary text-opacity-75 fa-3x mb-4"></i>
                                    <h3 className="h5 fw-bold text-dark mt-2">Real-Time Traffic</h3>
                                    <p className="text-muted mt-2">
                                        Receive real-time traffic updates that automatically reroute you
                                        to avoid delays and minimize frustration.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-4 rounded-5 shadow-sm border-0 h-100">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <i class="fa-solid fa-layer-group text-primary text-opacity-75 fa-3x mb-4"></i>
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
                                    <h3 className="h4 fw-bold text-dark">Free Plan</h3>
                                    <p className="card-text text-muted">
                                        Perfect for small teams and individuals.
                                    </p>
                                    <p className="fs-2 fw-bold text-dark">
                                        FREE
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
                                            <span>Unlimited Use</span>
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
                                            <span>5 Waypoints per Query</span>
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
                                            <span>Basic Reporting</span>
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
                                            <span>Community support</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-transparent border-0 mt-auto">
                                    <a className="btn btn-primary w-100 rounded-pill" href="#">
                                        Choose Free
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
                                        $9.95
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
                                            <span>Unlimited Use</span>
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
                                            <span>10 Waypoints per Query</span>
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
                                            <span>E-Mail Support</span>
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
                                    <h3 className="h4 fw-bold text-dark">Professional</h3>
                                    <p className="card-text text-muted">
                                        For large-scale operations.
                                    </p>
                                    <p className="fs-2 fw-bold text-dark">
                                        $19.95
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
                                            <span>Unlimited Use</span>
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
                                            <span>30 Waypoints per Query</span>
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
                                            <span>Advanced Custom Reporting</span>
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
                                            <span>Priority E-Mail Support</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer bg-transparent border-0 mt-auto">
                                    <a className="btn btn-primary w-100 rounded-pill" href="#">
                                        Choose Professional
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

    )
}

export default HomePage
