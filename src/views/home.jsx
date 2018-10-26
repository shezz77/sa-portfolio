import React from 'react';
import Layout from "../hoc/Layout";
import Intro from "../components/home/Intro";
import About from "../components/home/About";
import Resume from "../components/home/Resume";
import PortFolio from "../components/home/PortFolio";
import Cta from "../components/home/CTA";
import Services from "../components/home/Services";
import Stats from "../components/home/Stats";
import Contact from "../components/home/Contact";
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({scrollDuration: 1500});

const Home = () => {
    return (
        <Layout>
            <ScrollableAnchor id={'intro-sec'}>
                <div>
                    <Intro/>
                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'about-sec'}>
                <div>
                    <About/>
                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'resume-sec'}>
                <div>
                    <Resume/>
                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'portfolio-sec'}>
                <div>
                    <PortFolio/>
                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'cta-sec'}>
                <div>
                    <Cta/>
                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'services-sec'}>
                <div>
                    <Services/>
                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'stats-sec'}>
                <div>
                    <Stats/>
                </div>
            </ScrollableAnchor>
            <ScrollableAnchor id={'contact-sec'}>
                <div>
                    <Contact/>
                </div>
            </ScrollableAnchor>
        </Layout>
    );
};

export default Home;