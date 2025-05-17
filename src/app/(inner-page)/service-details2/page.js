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
                                    Studies, Projects and Technical Assistance
                                </h3>
                                <p className="disc">
                                  STAC multidisciplinary teams develop studies and project designs of great complexity and
relevance, ensuring functional and sustainable solutions with a focus on accuracy, quality
and customer satisfaction in all phases of the project, from studies to construction
management, including technical assistance during construction works.
                                </p>
                                <p className="disc">
                                  We are specialists in all types of engineering projects, creating innovative and excellent
solutions, ensuring complete coordination of all phases of the project, from design to
technical assistance.
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
                                We use modern technological tools in the development of our projects, participating in
several European innovation projects for the construction industry. <p></p>
                               STAC offer a diverse range of services, related to Studies, Project Design and Technical
Assistance, namely in:
                            </p>
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="service-details-list-check-bullet">
                                        <div className="single">
                                            <p>Engineering</p>
                                        </div>
                                        <div className="single">
                                            <p>Environment</p>
                                        </div>
                                        <div className="single">
                                            <p>Safety</p>
                                        </div>
                                        <div className="single">
                                            <p>Energy</p>
                                        </div>
                                        <div className="single">
                                            <p>Hydrology</p>
                                        </div>
                                        <div className="single">
                                            <p>Architecture</p>
                                        </div>
                                        <div className="single">
                                            <p>Economy</p>
                                        </div>
                                        <div className="single">
                                            <p>Urban Planning</p>
                                        </div>
                                        <div className="single">
                                            <p>Geology and Geotechnics</p>
                                        </div>
                                        <div className="single">
                                            <p>Traffic and Transport</p>
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
