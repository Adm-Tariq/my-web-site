import React, { useEffect } from "react";
import "../styles/contactMe.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const ContactMe = () => {

    const form = document.querySelector("#form")


    const isValid = (e) => {
        if (e.target.value === "") {
            e.target.classList.add("is-invalid")
        } else {
            e.target.classList.remove("is-invalid")
            e.target.classList.add("is-valid")
        }
    }

    return (


        <section id="contact">
            <div className="container">
                <div className="head">
                    <h4>For any questions please</h4>
                    <h2 className="heading"><span>Contact</span> Me</h2>
                </div>

                <div className="row d-grid d-lg-flex justify-content-lg-between align-items-lg-center">
                    <div className="col col-lg-3">
                        <div className="contact-info">
                            <div className="email mb-3">
                                <i class="bi bi-envelope-at"></i>
                                <h5>adam.tarek.m11@gmail.com</h5>
                            </div>
                            <div className="phone">
                                <i class="bi bi-telephone"></i>
                                <h5>+20 102 4533 952</h5>
                            </div>
                        </div>

                        <div className="social-links d-flex justify-content-center gap-3">
                            <Link to={"#"} className={"nav-link"} aria-current="page"><i class="bi bi-github"></i></Link>
                            <Link to={"#"} className={"nav-link"} aria-current="page"><i class="bi bi-instagram"></i></Link>
                            <Link to={"#"} className={"nav-link"} aria-current="page"><i class="bi bi-whatsapp"></i></Link>
                        </div>

                    </div>

                    <div className="col col-lg-6 mt-5">
                        <form id="form">
                            <div class="mb-3">
                                <label for="name" className="form-label">Name</label>
                                <input type="text" className={"form-control"} id="name" onChange={(e) => isValid(e)} required />
                            </div>

                            <div class="mb-3 ">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control " id="email" onChange={(e) => isValid(e)} required />
                            </div>

                            <div class="mb-3 ">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control " id="message" onChange={(e) => isValid(e)} required />
                            </div>

                            <button type="submit" class="btn">Send</button>
                        </form>


                    </div>
                </div>

            </div >
        </section >

    )

}

export default ContactMe