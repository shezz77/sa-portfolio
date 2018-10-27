import React from 'react';
import Layout from "../hoc/Layout";
// import Intro from "../components/home/Intro";
import About from "../components/home/About";
import Resume from "../components/home/Resume";
import PortFolio from "../components/home/PortFolio";
import Cta from "../components/home/CTA";
import Services from "../components/home/Services";
import Stats from "../components/home/Stats";
import Contact from "../components/home/Contact";
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import IntroV2 from "../components/home/Intro-v2";
import {AppGlobals} from "../utils/Globals";

configureAnchors({scrollDuration: 1500});

class Home extends React.Component {
    state = {
        user: AppGlobals,
        bookmark: 'intro-sec'
    };

    componentDidMount() {
        let react = this;
        window.$(window).scroll(function(){
            let location = window.location.href;
            location = location.split('#');
            let bookmark = '';
            if (location.length > 1){
                bookmark = location[1];
            }

            if (bookmark !== react.state.bookmark){
                react.setState({bookmark});
            }
        });
    }


    render() {
        return (
            <Layout {...this.state}>
                <ScrollableAnchor id={'intro-sec'}>
                    <div>
                        <IntroV2 {...this.state}/>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'about-sec'}>
                    <div>
                        <About {...this.state}/>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'resume-sec'}>
                    <div>
                        <Resume {...this.state}/>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'portfolio-sec'}>
                    <div>
                        <PortFolio {...this.state}/>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'cta-sec'}>
                    <div>
                        <Cta {...this.state}/>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'services-sec'}>
                    <div>
                        <Services {...this.state}/>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'stats-sec'}>
                    <div>
                        <Stats {...this.state}/>
                    </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'contact-sec'}>
                    <div>
                        <Contact {...this.state}/>
                    </div>
                </ScrollableAnchor>
            </Layout>
        );
    }
}

export default Home;