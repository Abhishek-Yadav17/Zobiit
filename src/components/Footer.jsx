import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <h2 className="footer-logo">ZOBIIT</h2>
                <div className="footer-contact">
                    <div>
                        <p className="footer-label">Email</p>
                        <p>zobiit@gmail.com</p>
                    </div>
                    <div>
                        <p className="footer-label">Call</p>
                        <p>+123456789</p>
                    </div>
                    <div>
                        <p className="footer-label">Social</p>
                        <p>Instagram, X</p>
                    </div>
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-middle">
                <div className="footer-links">
                    <div>
                        <p className="footer-label">Pages</p>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <p className="footer-label">Pages (CMS)</p>
                        <ul>
                            <li>All Projects</li>
                            <li>Single Project</li>
                            <li>Blog</li>
                            <li>Blog Post</li>
                            <li>Team</li>
                            <li>Team Members</li>
                        </ul>
                    </div>
                    <div>
                        <p className="footer-label">Resources</p>
                        <ul>
                            <li>Style guide</li>
                            <li>Licenses</li>
                            <li>Change log</li>
                            <li>Instructions</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
                <p>
                    Designed by <span>Abhishek Yadav</span> Powered by <span>React</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
