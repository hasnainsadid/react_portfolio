import React, { useState } from 'react'
import image from '../Images/pic.jpg'
import '../Css/Developer.css'
import Skill from "./Skills";

const Developer = () => {
    const [item] = useState(Skill)
    return (
        <div className="developer">
            <div className="text-center">
                <h1 className="mt-5 pt-4" style={{"fontFamily": "'Roboto Slab', serif",}}>Resume</h1>
                <hr className="hr1"/>
                <p className="mx-2">Web design is difficult, only then it is fun to do. You just have to set your standards.</p>
            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <img className="img-fluid img mx-auto mb-3" src={image} alt="image1" />
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <h2 className="text-start text-info">Web Designer</h2>
                                <p className="mt-lg-4"><i>Designing a website is not just a job, it is a dream which is come to light through code.</i></p>
                                
                                <div className="row mt-4 ms-lg-5">
                                    <div className="col-lg-6">
                                        <h6 className="mt-4"><b>Name:</b> Hasnain Sadid</h6>
                                        <h6 className="mt-4"><b>Phone:</b> +880 1991 638 639</h6>
                                        <h6 className="mt-4"><b>Email:</b> hasnainsadid@gmail.com</h6>
                                        <h6 className="mt-4"><b>City:</b> Mymensingh, Bangladesh.</h6>
                                    </div>

                                    <div className="col-lg-6 mt-lg-3">
                                        <h6 className="mt-4"><b>Degree:</b> BBA</h6>
                                        <h6 className="mt-4"><b>Github:</b><a className="link" href="https://github.com/hasnainsadid" target="_blank"> hasnainsadid</a></h6>
                                        <h6 className="mt-4"><b>LinkedIn:</b> <a className="link" href="https://linkedin.com/in/hasnain-sadid-738463217/" target="_blank"> Hasnain Sadid</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="mb-lg-4">
                            <h3 className="text-center text-info mt-lg-4 mb-3">Objective</h3>
                            <p className="about">I am an unflappable, honest, and flexible person who has developed a mature and responsible identity to undertake task that I take or any situation that I am presented with. I work hard. I care about writing clean code and I genuinely love to learn. I work well both individually and, in a team, setting under challenging environment. I'm currently looking for the right opportunity to work in an environment that will help me progress into a full-strack role.</p>
                        </div>
                        <hr />
                        <div className="row mt-4"> {/*Education section*/}
                            <div className="col-lg-6 mt-lg-4">
                                <h3 className="text-info">Education</h3>
                                <br />
                                <ul>
                                    <h5>BBA in Management</h5>
                                    <li>2016-2021</li>
                                    <p>National University of Bangladesh</p>
                                </ul>
                                <br />
                                <ul>
                                    <h5>Higher Secondary</h5>
                                    <li >2015</li>
                                    <p>Jamuna Sar Karkhana Collage</p>
                                </ul>
                                <br />
                                <ul>
                                    <h5>Secondary</h5>
                                    <li>2013</li>
                                    <p>Jamuna Sar Karkhana Higher Secondary School</p>
                                </ul>
                            </div>
                            <div className="col-lg-6 mb-3 mt-lg-4">
                                <h3 className="text-info">Online Learning</h3>
                                <br />
                                <ul>
                                    <h5>Project - Build Responsive Website using HTML5, CSS3, JS And Bootstrap</h5>
                                    <li><b>Organization:</b> EDUCBA</li>
                                    <li><b>Certificate:</b> <a className="link" href="https://www.educba.com/certificate/?c=7P3WUDIFN" target="_blank">Click Here</a></li>
                                    <br />
                                    <h5>Responsive Website Basics: Code with HTML, CSS, and JavaScript</h5>
                                    <li><b>Organization:</b> Coursera</li>
                                    <li>University of London & Goldsmiths, University of London</li>
                                    <li><b>Certificate:</b> <a className="link" href="https://coursera.org/share/ea0837b9c7a81883f63a5e6653e73624" target="_blank">Click Here</a></li>
                                    <br />
                                    <h5>Introduction to HTML5</h5>
                                    <li><b>Organization:</b> Coursera</li>
                                    <li>University of Michigan</li>
                                    <li><b>Certificate:</b> <a className="link" href="https://www.coursera.org/account/accomplishments/verify/DF78JPDDTRNW" target="_blank">Click Here</a></li>
                                    <br />
                                    <h5>Animation with JavaScript and jQuery</h5>
                                    <li><b>Organization:</b> Coursera</li>
                                    <li>University of California, Davis</li>
                                    <li><b>Certificate:</b> <a className="link" href="https://www.coursera.org/account/accomplishments/verify/WEVSJC7K4TES" target="_blank">Click Here</a></li>
                                </ul>
                            </div><hr />
                        </div>

                            {/* skills section  */}

                        <h3 className="text-info text-center mt-lg-4">Skills</h3>
                        <hr className="hr1" />
                        <p className="text-center my-3" data-aos="fade-in"><i><b>The number of skills will be added with you when a lot of hours you do practice.</b></i></p>
                        <div className="row my-4">

                        {
                            item.map((e, index)=>{
                                const {id, name, percent} = e;
                                return(
                            <div key={id} className="col-lg-6 col-md-12" data-aos="fade-down" data-aos-delay="500">
                                <h6><span className="left ms-2">{name}</span> <span className="right me-2">{percent}</span></h6>
                                <div className="progress">
                                    <div className="progress-bar" style={{width: `${percent}`, background:"#51cdbe", color:"#000"}} ></div>
                                </div>
                            </div>
                                )
                            })
                        }
                            


                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Developer