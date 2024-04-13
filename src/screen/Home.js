import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/home.css"

const Home = () => {
    return (
        <>
            <div className="container ">
                <section id="home" className=" row flex-column flex-md-row-reverse justify-content-between align-items-center">

                    <div className="photo col slide-in-blurred-top">
                        <div className="image">
                            <img src="https://upcdn.io/W142hJk/thumbnail/demo/4khLrEtBAy.svg" class="img-fluid" alt="Home Photo" />
                        </div>
                    </div>

                    <div className="content col text-center text-md-start mt-5">
                        <h2 className="tracking-in-expand ">
                            <span >Hi 👋,</span>
                            <span>My name is</span>
                            <span className="text-shadow-pop-top">Adam Tarek</span>
                            <span>I web developer</span>
                        </h2>
                    </div>

                </section>
            </div>
            <Outlet />

        </>

    )

}

export default Home