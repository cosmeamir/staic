"use client"
import { useState } from "react";
import HeaderFive from "@/component/header/HeaderFive";
import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import BrandEight from '@/component/brand/BrandEight';
import ProcessTwo from '@/component/workingprocess/ProcessTwo';
import FooterInner from '@/component/footer/FooterFive';
export default function Home() {
    const [activeTab, setActiveTab] = useState("project");


    return (
        <div className="">
            <HeaderFive />
            <Breadcrumb title="What We Do" activeLink="What We Do" />



            {/* service details area start */}
            <div className="service-details-area-start rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 pr--70 pr_md--10 pr_sm--10">
                            {/* service left side bar area start */}
                            <div className="service-left-sidebar-wrapper">
                                {/* service left sidebar single wized */}
                                <div className="service-left-sidebar-wized mb--50">
                                    <div className="topa-rea">
                                        <h4 className="title">All Services</h4>
                                    </div>
                                    <div className="body">
                                        {/* inglle short service */}
                                        <a href="/service-details" className="single-short-service">
                                            <span className="number">01.</span>
                                            <p className="name">Project Management</p>
                                            <i className="fa-light fa-arrow-right" />
                                        </a>
                                        {/* inglle short service end */}
                                        {/* inglle short service */}
                                        <a href="/service-details2" className="single-short-service">
                                            <span className="number">02.</span>
                                            <p className="name">Studies, Projects</p>
                                            <i className="fa-light fa-arrow-right" />
                                        </a>
                                        
                                    </div>
                                </div>
                                {/* service left sidebar single wized end */}
                                {/* service left sidebar single wized */}
                                <div className="service-left-sidebar-wized">
                                    <div className="topa-rea">
                                        <span className="pre">Contact</span>
                                        <h4 className="title">Let's start new project.</h4>
                                    </div>
                                    <div className="body">
                                        {/* form area start */}
                                        <form action="#">
                                            <input type="text" placeholder="Your Name" />
                                            <input type="number" placeholder="Your Number" />
                                            <textarea placeholder="Message" defaultValue={""} />
                                            <button className="rts-btn btn-primary">Start Project</button>
                                        </form>
                                        {/* form area end */}
                                    </div>
                                </div>
                                {/* service left sidebar single wized end */}
                            </div>
                            {/* service left side bar area end */}
                        </div>
                        <div className="col-lg-8 mt_md--50 mt_sm--50">
                            {/* service -details right-content start */}
                            <div className="service-details-content-right">
                                <div className="large-image">
                                    <img src="assets/images/service/10.jpg" alt="service" />
                                </div>
                                <h3 className="title-main-s">
                                    Project Management and Works Supervision 
                                </h3>
                                <p className="disc">
                                   STAIC has developed project management and works supervision methodologies with
guarantees of efficiency, quality and sustainability, safety and environment standards. They
are carried out by experienced multidisciplinary training teams, ensuring that our services
are focused on customer satisfaction, with focus on accuracy, quality, safety and economy.
                                </p>
                                <p className="disc">
                                   We are specialists in the project management and supervision of complex projects, in
several areas, from transport and environmental infrastructures and basic sanitation
networks, to urbanization projects, buildings, energy and industry facilities.
                                </p>
                            </div>
                            {/* service -details right-content end */}
                            <div className="row mt--40 mb--40">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <img
                                        style={{ width: "100%" }}
                                        src="assets/images/service/11.jpg"
                                        alt="services"
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <img
                                        style={{ width: "100%" }}
                                        src="assets/images/service/12.jpg"
                                        alt="services"
                                    />
                                </div>
                            </div>
                            
                            <p className="disc">
                               We participated in major national infrastructure projects, supporting companies and
providing engineering services through cooperation projects.
STAIC offers the following services related to Project Management and Works Supervision:
                            </p>
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="service-details-list-check-bullet">
                                        <div className="single">
                                            <p>Project Management</p>
                                        </div>
                                        <div className="single">
                                            <p>Procurement</p>
                                        </div>
                                        <div className="single">
                                            <p>Coordination and Supervision of Construction Works</p>
                                        </div>
                                        <div className="single">
                                            <p>Technical Assistance to the Works Supervision</p>
                                        </div>
                                        <div className="single">
                                            <p>Technical Testing and Analysis</p>
                                        </div>
                                        <div className="single">
                                            <p>Management and Coordination of Quality, Environment, Safety, Hygiene and Health
Protection at Work</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="slice-iameg-service-detials">
                                        <img src="assets/images/service/13.jpg" alt="service" />
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* service details area end */}




            <FooterInner />
            <BackToTop />
        </div >
    );
}
