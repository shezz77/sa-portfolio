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

const Home = () => {
    return (
        <Layout>
            <Intro/>
            <About/>
            <Resume/>
            <PortFolio/>
            <Cta/>
            <Services/>
            <Stats/>
            <Contact/>
        </Layout>
    );
};

export default Home;