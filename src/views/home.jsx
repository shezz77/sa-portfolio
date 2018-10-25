import React from 'react';
import Layout from "../hoc/Layout";
import Intro from "../components/home/Intro";
import About from "../components/home/About";

const Home = () => {
    return (
        <Layout>
            <Intro/>
            <About/>
        </Layout>
    );
};

export default Home;