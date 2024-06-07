import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/projects.css"
const Projects = () => {
    return (
        <>
            <div className={"container"}>
                <section id={"projects"}>
                    <div className={"head text-center"}>
                        <h2 className={"heading"}><span>Project'</span>s</h2>
                        <h6>Things I’ve built so far</h6>
                    </div>

                    <div className={"row d-grid d-sm-flex align-items-center justify-content-center justify-content-sm-start"}>

                        <div className={"col col-sm-6 col-lg-4 col-xxl-3   mb-3 project-item"}>
                            <div className={"card"}>
                                <div className="image">
                                    <img src="https://i.imghippo.com/files/E1DwQ1717776868.png" className={"card-img-top"} alt="..." />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title two-lines">e-commerce Book Store website</h4>
                                    <div className={"content"}>

                                        <p className={"card-text two-lines"}>This project is a web-based store built using PHP, JavaScript APIs, HTML, and CSS. The website serves as an online store specifically </p>
                                        <a target="_blank" href="http://demobookstore.rf.gd/login.php" className={"btn"}><img src="https://i.imghippo.com/files/UMTWz1717777080.svg" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"col col-sm-6 col-lg-4 col-xxl-3  mb-3 project-item"}>
                            <div className={"card"}>
                                <div className="image">
                                    <img src="https://i.imghippo.com/files/zmW5C1717776365.jpg" className={"card-img-top"} alt="..." />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title two-lines">Landing Page App Market</h4>
                                    <div className={"content"}>

                                        <p className={"card-text two-lines"}>This site was built in JavaScript, and the site is responsive to all screens</p>
                                        <a target="_blank" href="http://app-market.rf.gd/" className={"btn"}><img src="https://i.imghippo.com/files/UMTWz1717777080.svg" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"col col-sm-6 col-lg-4 col-xxl-3  mb-3 project-item"}>
                            <div className={"card"}>
                                <div className="image">

                                    <img src="https://i.imghippo.com/files/YHClL1717776463.png" className={"card-img-top"} alt="..." />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title two-lines">Multilingual website</h4>
                                    <div className={"content"}>

                                        <p className={"card-text two-lines"}>This site was built in JavaScript</p>
                                        <a target="_blank" href="http://clone-eset-up-mult-lang.rf.gd/" className={"btn"}><img src="https://i.imghippo.com/files/UMTWz1717777080.svg" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"col col-sm-6 col-lg-4 col-xxl-3  mb-3 project-item"}>
                            <div className={"card"}>
                                <div className="image">
                                    <img src="https://i.imghippo.com/files/t6F9D1717776946.png" className={"card-img-top"} alt="..." />

                                </div>

                                <div className="card-body">
                                    <h4 className="card-title two-lines">market website</h4>
                                    <div className={"content"}>

                                        <p className={"card-text two-lines"}>This site was built in JavaScript and Html,Css</p>
                                        <a target="_blank" href="http://market-page.rf.gd/?i=1" className={"btn"}><img src="https://i.imghippo.com/files/UMTWz1717777080.svg" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"col col-sm-6 col-lg-4 col-xxl-3  mb-3 project-item"}>
                            <div className={"card"}>
                                <div className="image">

                                    <img src="https://i.imghippo.com/files/hMTm11717776995.png" className={"card-img-top"} alt="..." />
                                </div>

                                <div className="card-body">
                                    <h4 className="card-title two-lines">Landing Page Dashboard</h4>
                                    <div className={"content"}>

                                        <p className={"card-text two-lines"}>This site was built in JavaScript and Html,Css</p>
                                        <a target="_blank" href="http://dash-landpage.rf.gd/?i=1" className={"btn"}><img src="https://i.imghippo.com/files/UMTWz1717777080.svg" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className={"col col-sm-6 col-lg-4 col-xxl-3  mb-3 project-item"}>
                            <div className={"card"}>
                                <div className="image">
                                    <img src="https://i.imghippo.com/files/v9QEx1717777051.png" className={"card-img-top"} alt="..." />

                                </div>

                                <div className="card-body">
                                    <h4 className="card-title two-lines">CRUD WITH JS</h4>
                                    <div className={"content"}>

                                        <p className={"card-text two-lines"}>This site was built in JavaScript and Html,Css</p>
                                        <a target="_blank" href="http://demo-crud-simple.rf.gd/" className={"btn"}><img src="https://i.imghippo.com/files/UMTWz1717777080.svg" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className="btn-showAll">
                        <a target="_blank" href="https://github.com/Adm-Tariq" className="btn">Show all<img src="https://i.imghippo.com/files/UMTWz1717777080.svg" /></a>
                    </div>
                </section>
            </div>
            <Outlet />
        </>

    )

}

export default Projects
