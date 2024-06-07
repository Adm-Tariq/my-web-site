import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/about.css"

const About = () => {

    return (
        <>
            <div className="container">
                <section id="about">
                    <h2 className="heading">About <span>Me</span></h2>
                    <div className="content">
                        <div className="row d-grid d-md-flex justify-content-md-between align-items-md-center">
                            <div className="col col-md-6 col-lg-3 mb-2 mb-md-0">
                                <h4 className="d-inline ">Experience:</h4>
                                <button type="button" className="btn d-inline ">1 Year<span className="badge"></span></button>
                            </div>
                            <div className="col col-md-6 col-lg-5 mb-2 mb-md-0">
                                <h4 className="d-inline">Specialty:</h4>
                                <button type="button" className="btn d-inline ">Management Information Systems<span className="badge"></span></button>
                            </div>
                            <div className="col col-lg-4 mb-2 mt-md-3">
                                <h4 className="d-inline">Address:</h4>
                                <button type="button" className="btn d-inline ">Girga, Sohag, EG<span className="badge"></span></button>
                            </div>
                        </div>
                    </div>
                    <div className="line">

                    </div>
                    <div className="tech-stack">
                        <div className="heading">
                            <h4>My Tech Stack</h4>
                            <h6>Technologies and programming language I’ve been working with recently</h6>
                        </div>
                        <div className="row d-grid mt-3 " >
                            <div className="col image">
                                <img src="https://upcdn.io/12a1yuU/raw/images/html.svg" className="rounded" alt="..." />
                                <img src="https://files.fm/f/atbb6te4tj" className="rounded" alt="..." />
                                <img src="https://upcdn.io/12a1yuU/raw/images/js.svg" className="rounded" alt="..." />
                                <img src="https://upcdn.io/12a1yuU/raw/images/react.svg" className="rounded" alt="..." />
                                <img src="https://upcdn.io/12a1yuU/raw/images/redux.svg" className="rounded" alt="..." />
                                <img src="https://upcdn.io/12a1yuU/raw/images/bootstrab.svg" className="rounded" alt="..." />
                            </div>
                            <div className="col image">
                                <img src="https://upcdn.io/12a1yuU/raw/images/sass.svg" className="rounded" alt="..." />
                                <img src="https://upcdn.io/12a1yuU/raw/images/jquery.svg" className="rounded" alt="..." />
                                <img src="https://upcdn.io/12a1yuU/raw/images/php.svg" className="rounded" alt="..." />
                                <img src="https://upcdn.io/12a1yuU/raw/images/Node.js.svg" className="rounded" alt="..." />
                                <img src="https://upcdn.io/12a1yuU/raw/images/expressjs.svg" className="rounded" alt="..." />
                            </div>
                            <div className="col image">
                                <img src="https://upcdn.io/12a1yuU/raw/images/firebase-seeklogo.svg" className="rounded" alt="..." />
                                <img src="https://upcdn.io/12a1yuU/raw/images/mysql-seeklogo.svg" className="rounded" alt="..." />
                                <img src="https://upcdn.io/12a1yuU/raw/images/mongos.svg" className="rounded" alt="..." />
                                <img src="https://upcdn.io/12a1yuU/raw/images/git.svg" className="rounded" alt="..." />
                                <img src="https://upcdn.io/12a1yuU/raw/images/githup.svg" className="rounded" alt="..." />
                                <img src="https://upcdn.io/12a1yuU/raw/images/vs.svg" className="rounded" alt="..." />
                            </div>

                        </div>
                    </div>

                </section>
            </div>
            <Outlet />
        </>
    )
}


export default About
