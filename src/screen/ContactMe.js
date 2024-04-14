import Swal from 'sweetalert2';
import "../styles/contactMe.css"
import { Link } from "react-router-dom";



const ContactMe = () => {

    const isValid = (e) => {
        if (e.target.value === "") {
            e.target.classList.add("is-invalid")
        } else {
            e.target.classList.remove("is-invalid")
            e.target.classList.add("is-valid")
        }
    }


    function checkInput(e) {
        e.preventDefault();
        sendMil(e.target[0].value, e.target[1].value, e.target[2].value)
    }

    function sendMil(name, email, message) {
        var data = {
            service_id: "service_v2tgrwd",
            template_id: "template_mdkjdh9",
            user_id: "x8gDEXZLVaNPIm-4a",
            template_params: {
                from_name: name,
                name: name,
                email: email,
                message: message,
            },
        };

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://api.emailjs.com/api/v1.0/email/send");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
            if (xhr.status === 200) {
                alert("Your email has been sent!", "success")
            } else {
                alert("The message was not sent", "error")
            }
        };
        xhr.onerror = function () {
            alert("The message was not sent", "error")
        };
        xhr.send(JSON.stringify(data));
    }


    const alert = (message, status) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 10000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: status,
            title: message
        });
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
                                <i className="bi bi-envelope-at"></i>
                                <h5>adam.tarek.m11@gmail.com</h5>
                            </div>
                            <div className="phone">
                                <i className="bi bi-telephone"></i>
                                <h5>+20 102 4533 952</h5>
                            </div>
                        </div>

                        <div className="social-links d-flex justify-content-center gap-3">
                            <Link target='_blank' to={"https://github.com/Adm-Tariq"} className={"nav-link"} aria-current="page"><i className="bi bi-github"></i></Link>
                            <Link target='_blank' to={"https://www.instagram.com/adamtarek_m/"} className={"nav-link"} aria-current="page"><i className="bi bi-instagram"></i></Link>
                            <Link target='_blank' to={"https://api.whatsapp.com/send/?phone=201228562524"} className={"nav-link"} aria-current="page"><i className="bi bi-whatsapp"></i></Link>
                        </div>

                    </div>

                    <div className="col col-lg-6 mt-5">
                        <form id="form" className="contactForm" onSubmit={(e) => checkInput(e)}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className={"form-control"} id="name" onChange={(e) => isValid(e)} required />
                            </div>

                            <div className="mb-3 ">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control " id="email" onChange={(e) => isValid(e)} required />
                            </div>

                            <div className="mb-3 ">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control " id="message" onChange={(e) => isValid(e)} required />
                            </div>

                            <button type="submit" className="btn">Send</button>
                        </form>


                    </div>
                </div>

            </div >
        </section >

    )

}

export default ContactMe