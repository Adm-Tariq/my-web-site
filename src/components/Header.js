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
            <nav class="navbar navbar-expand-lg  position-fixed  pt-4" >
                <div class="container ">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">

                            <li class="nav-item">

                                <LinkScroll onClick={() => { setActive(0); }} link-id="home" to="home" smooth={true} duration={500} className={"nav-link in-page"} aria-current="page"> <i class="bi bi-house"></i> Home</LinkScroll>
                            </li>

                            <li class="nav-item">

                                <LinkScroll onClick={() => { setActive(1) }} link-id="about" to="about" smooth={true} duration={500} className={"nav-link in-page"} aria-current="page"><i class="bi bi-person"></i> About</LinkScroll>
                            </li>

                            <li class="nav-item">

                                <LinkScroll onClick={() => { setActive(2) }} link-id="projects" to="projects" smooth={true} duration={500} className={"nav-link in-page"} aria-current="page"><i class="bi bi-columns-gap"></i> Project's</LinkScroll>
                            </li>

                            <li class="nav-item">
                                <LinkScroll onClick={() => { setActive(3) }} link-id="contact" to="contact" smooth={true} duration={500} className={"nav-link in-page"} aria-current="page"><i class="bi bi-person-lines-fill"></i> Contact</LinkScroll>
                            </li>


                        </ul>
                    </div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to={"https://upcdn.io/12a1yuU/raw/cv/Adam-cv.pdf"} target="_blank" className={"nav-link cv"}><i class="bi bi-file-earmark-person"></i>CV</Link>
                        </li></ul>
                </div>
            </nav>
        </header>
    )
}

export default Header