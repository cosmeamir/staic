"use client"
import { useEffect } from 'react';
import HeaderFive from "@/component/header/HeaderFive";


import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import AOS from 'aos';
import TeamFive from '@/component/team/TeamFive';
import ProcessTwo from '@/component/workingprocess/ProcessTwo';
import TestimonialsFive from '@/component/testimonials/TestimonialsFive';
import ContactTwo from '@/component/contact/ContactTwo';
import FooterInner from '@/component/footer/FooterFive';

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1500,  // Animation duration in ms
            once: true,
            offset: 0, // Whether animation should happen only once
        });
    }, []);
    return (
        <div className="">

            <HeaderFive />
            <Breadcrumb title="About Us" activeLink="About Us" />

            {/* about  page top histoory information  */}
            <div className="about-top-history-information rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="title-style-left">
                                <div className="pre-title-area">
                                    <img src="assets/images/about/02.png" alt="about" />
                                    
                                </div>
                                <h2 className="title">About us</h2>
                            </div>
                            <div className="about-left-history pl--50 pt--30">
                                <img src="assets/images/about/12.png" alt="about" />
                            </div>
                            <div className="history-image-left mt--55">
                                <img data-aos="move-left"
                                    src="assets/images/about/13.jpg"
                                    alt="about"
                                />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 mt_sm--50">
                            <div className="history-right-area-inner">
                                <p className="disc rts-slide-up">
With this presence and an extensive and diversified customer base, STAIC can offer in-depth experience
in various markets and a robust set of references in Consulting, Studies and Projects, Project
Management and Works Supervision, Management and Coordination of Safety, Quality,
                                    </p>
                                <p className="disc rts-slide-up">
                                    The national and international skills experience of its technical and management team allow it to provide
a wide range of services at all project stages in combination with its clients’ own skills. STAIC believes
trust is essential, in acting with transparency and integrity, in loyalty to its clients and total respect in all
its relationships.
                                </p>
                                <p className="disc rts-slide-up">
                                    Its vision is to be the hub and driving force of a relevant engineering service provider group with wide
deployment at an international level, guided by high quality standards and with the purpose of adding
value to the client.
                                </p>
                                <p className="disc rts-slide-up">
                                   STAIC mission is to fully satisfy its clients’ needs and to have a sustainable commercial and corporate
success with a high level of social responsibility.
                                </p>
                                <div className="history-right-img mt--80">
                                    <img data-aos="move-left"
                                        className=""
                                        src="assets/images/about/14.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about  page top histoory information end */}

            {/* rts counter up area start */}
            <div className="rts-counterup-area-start rts_jump_counter__animation">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="counter-main-wrapper-two counter_animation pt--0">
                                {/* ingle counter up */}
                                <div className="counter-single counter__anim">
                                    <div className="inner">
                                        <h2 className="title">
                                            <span className="counter">362</span>k
                                        </h2>
                                        <p>Award Winning</p>
                                    </div>
                                </div>
                                {/* ingle counter up end */}
                                {/* ingle counter up */}
                                <div className="counter-single counter__anim">
                                    <div className="inner">
                                        <h2 className="title">
                                            <span className="counter">106</span>+
                                        </h2>
                                        <p>Project Done</p>
                                    </div>
                                </div>
                                {/* ingle counter up end */}
                                {/* ingle counter up */}
                                <div className="counter-single counter__anim">
                                    <div className="inner">
                                        <h2 className="title">
                                            <span className="counter">120</span>+
                                        </h2>
                                        <p>Award Winning</p>
                                    </div>
                                </div>
                                {/* ingle counter up end */}
                                {/* ingle counter up */}
                                <div className="counter-single counter__anim">
                                    <div className="inner">
                                        <h2 className="title">
                                            <span className="counter">101</span>k
                                        </h2>
                                        <p>Year Experience</p>
                                    </div>
                                </div>
                                {/* ingle counter up end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rts counter up area end */}

            <TeamFive />

         
            <TestimonialsFive />
            <ContactTwo />
            <FooterInner />



            <BackToTop />
        </div>
    );
}
