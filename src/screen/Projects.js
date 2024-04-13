import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/projects.css"
const Projects = () => {
    return (
        <>
            <div className="container">
                <section id="projects">
                    <div className="head text-center">
                        <h2 className="heading"><span>Project'</span>s</h2>
                        <h6>Things I’ve built so far</h6>
                    </div>

                    <div className="row d-grid d-sm-flex align-items-center justify-content-between justify-content-sm-start">
                        <div className="col col-sm-6 col-lg-4 col-xxl-3   mb-3 project-item">
                            <div class="card">
                                <img src="https://upcdn.io/12a1yuU/raw/image-project/3.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h4 class="card-title two-lines">e-commerce Book Store website</h4>
                                    <div className="content">

                                        <p class="card-text two-lines">This project is a web-based store built using PHP, JavaScript APIs, HTML, and CSS. The website serves as an online store specifically </p>
                                        <a target="_blank" href="http://demobookstore.rf.gd/login.php" class="btn"><img src="https://upcdn.io/12a1yuU/raw/image-project/Continue%20Icon.svg" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col col-sm-6 col-lg-4 col-xxl-3  mb-3 project-item">
                            <div class="card">
                                <img src="https://upcdn.io/12a1yuU/raw/image-project/1691465286767.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h4 class="card-title two-lines">Card</h4>
                                    <div className="content">

                                        <p class="card-text two-lines">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn"><img src="https://upcdn.io/12a1yuU/raw/image-project/Continue%20Icon.svg" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col col-sm-6 col-lg-4 col-xxl-3  mb-3 project-item">
                            <div class="card">
                                <img src="https://upcdn.io/12a1yuU/raw/image-project/1691465286767.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h4 class="card-title two-lines">Card</h4>
                                    <div className="content">

                                        <p class="card-text two-lines">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn"><img src="https://upcdn.io/12a1yuU/raw/image-project/Continue%20Icon.svg" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col col-sm-6 col-lg-4 col-xxl-3  mb-3 project-item">
                            <div class="card">
                                <img src="https://upcdn.io/12a1yuU/raw/image-project/1691465286767.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h4 class="card-title two-lines">Card</h4>
                                    <div className="content">

                                        <p class="card-text two-lines">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn"><img src="https://upcdn.io/12a1yuU/raw/image-project/Continue%20Icon.svg" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>






                    </div>
                    <div className="btn-showAll">
                        <a href="#" class="btn">Show all<img src="https://upcdn.io/12a1yuU/raw/image-project/Continue%20Icon.svg" /></a>
                    </div>
                </section>
            </div>
            <Outlet />
        </>

    )

}

export default Projects