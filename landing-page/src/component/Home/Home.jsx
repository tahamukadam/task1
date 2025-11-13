import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import Footer from "../Footer/Footer";
export default function Home() {
    return (
        <div className="hero-container">
            <Header />
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to Our Page</h1>
                    <p>This is the page where we help you solve your problems</p>
                    <button className="bn" onClick={() => alert('Help is on the way!')}>Get Help</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}
