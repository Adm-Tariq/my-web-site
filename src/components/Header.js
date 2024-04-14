import React, { useEffect, useState } from "react";
import "../styles/header.css"
import { Link as LinkScroll } from 'react-scroll';
import { Link } from "react-router-dom";



const Header = () => {

    const [active, setActive] = useState(0);

    useEffect(() => {
        const links = document.querySelectorAll(".in-page")

        for (let i = 0; i < links.length; i++) {
            if (i === active) {
                links[active].classList.add("active")

                let section = document.getElementById("home");
                section.scrollIntoView({ behavior: 'smooth' });
            } else {
                links[i].classList.remove("active")
            }
        }


    }, [active])

    return (
        <header className="position-relative">
            <nav className="navbar navbar-expand-lg  position-fixed  pt-4" >
                <div className="container ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">

                                <LinkScroll onClick={() => { setActive(0); }} link-id="home" to="home" smooth={true} duration={500} className={"nav-link in-page"} aria-current="page"> <i className="bi bi-house"></i> Home</LinkScroll>
                            </li>

                            <li className="nav-item">

                                <LinkScroll onClick={() => { setActive(1) }} link-id="about" to="about" smooth={true} duration={500} className={"nav-link in-page"} aria-current="page"><i className="bi bi-person"></i> About</LinkScroll>
                            </li>

                            <li className="nav-item">

                                <LinkScroll onClick={() => { setActive(2) }} link-id="projects" to="projects" smooth={true} duration={500} className={"nav-link in-page"} aria-current="page"><i className="bi bi-columns-gap"></i> Project's</LinkScroll>
                            </li>

                            <li className="nav-item">
                                <LinkScroll onClick={() => { setActive(3) }} link-id="contact" to="contact" smooth={true} duration={500} className={"nav-link in-page"} aria-current="page"><i className="bi bi-person-lines-fill"></i> Contact</LinkScroll>
                            </li>


                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"https://upcdn.io/12a1yuU/raw/cv/Adam-cv.pdf"} target="_blank" rel="noreferrer" className={"nav-link cv"}><i className="bi bi-file-earmark-person"></i>CV</Link>
                        </li></ul>
                </div>
            </nav>
        </header>
    )
}

export default Header