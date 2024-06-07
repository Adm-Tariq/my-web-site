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
                                <img src="https://i.imghippo.com/files/SeVz81717774904.svg" className="rounded" alt="HTML" />
                                <img src="https://i.imghippo.com/files/bUk0C1717775707.svg" className="rounded" alt="CSS" />
                                <img src="https://i.imghippo.com/files/URfua1717775674.svg" className="rounded" alt="JS" />
                                <img src="https://i.imghippo.com/files/SdtBR1717775742.svg" className="rounded" alt="REACT" />
                                <img src="https://i.imghippo.com/files/loVtN1717775795.svg" className="rounded" alt="REDUX" />
                                <img src="https://i.imghippo.com/files/Q5Iko1717775825.svg" className="rounded" alt="BOOTSTRAP" />
                            </div>
                            <div className="col image">
                                <img src="https://i.imghippo.com/files/TLdDG1717775949.svg" className="rounded" alt="SASS" />
                                <img src="https://i.imghippo.com/files/E2P5Q1717775984.svg" className="rounded" alt="JQYERY" />
                                <img src="https://i.imghippo.com/files/83J3C1717776020.svg" className="rounded" alt="PHP" />
                                <img src="https://i.imghippo.com/files/zRBtg1717776049.svg" className="rounded" alt="NODEJS" />
                                <img src="https://i.imghippo.com/files/bNQ0D1717776071.svg" className="rounded" alt="EXPRESS" />
                            </div>
                            <div className="col image">
                                <img src="https://i.imghippo.com/files/MnQHS1717776095.svg" className="rounded" alt="FIREBASE" />
                                <img src="https://i.imghippo.com/files/BDOr11717776118.svg" className="rounded" alt="MYSQL" />
                                <img src="https://i.imghippo.com/files/tQAT81717776144.svg" className="rounded" alt="MONGOS" />
                                <img src="https://i.imghippo.com/files/ryZhV1717776168.svg" className="rounded" alt="GIT" />
                                <img src="https://i.imghippo.com/files/B4Bjk1717776189.svg" className="rounded" alt="GITHUP" />
                                <img src="https://i.imghippo.com/files/5yOFF1717776209.svg" className="rounded" alt="VS" />
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
