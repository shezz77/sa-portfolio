import React from 'react';

import {connect} from 'react-redux';
import {getUser} from "../actions";
import {setBookMark} from "../actions/app";
import {getBookMark} from "../actions/app";
import {bindActionCreators} from 'redux';

import Layout from "../hoc/Layout";
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

configureAnchors({scrollDuration: 1500});

class HomeContainer extends React.Component {

    componentWillMount() {
        this.props.getUser();
        this.props.getBookMark();
    }

    componentDidMount() {
        let react = this;

        window.$(window).scroll(function(){
            let location = window.location.href;
            location = location.split('#');
            let bookmark = '';
            if (location.length > 1){
                bookmark = location[1];
            }

            if (bookmark !== react.props.bookmark){
                react.props.setBookMark(bookmark);
            }
        });
    }


    render() {
        return (
            <Layout {...this.props} bookmark={this.props.bookmark}>
                <ScrollableAnchor id={'intro-sec'}>
                    <div>
                        {this.props.user ?
                            <IntroV2 {...this.props}/> : null
                        }
                    </div>
                </ScrollableAnchor>

                {this.props.user ?
                    <ScrollableAnchor id={'about-sec'}>
                        <div>
                            <About {...this.props}/>
                        </div>
                    </ScrollableAnchor> : null
                }

                {this.props.user ?
                    <ScrollableAnchor id={'resume-sec'}>
                        <div>
                            <Resume {...this.props}/>
                        </div>
                    </ScrollableAnchor> : null
                }

                {this.props.user ?
                    <ScrollableAnchor id={'portfolio-sec'}>
                        <div>
                            <PortFolio {...this.props}/>
                        </div>
                    </ScrollableAnchor> : null
                }

                {this.props.user ?
                    <ScrollableAnchor id={'cta-sec'}>
                        <div>
                            <Cta {...this.props}/>
                        </div>
                    </ScrollableAnchor> : null
                }

                {this.props.user ?
                    <ScrollableAnchor id={'services-sec'}>
                        <div>
                            <Services {...this.props}/>
                        </div>
                    </ScrollableAnchor> : null
                }

                {this.props.user ?
                    <ScrollableAnchor id={'stats-sec'}>
                        <div>
                            <Stats {...this.props}/>
                        </div>
                    </ScrollableAnchor> : null
                }

                {this.props.user ?
                    <ScrollableAnchor id={'contact-sec'}>
                        <div>
                            <Contact {...this.props}/>
                        </div>
                    </ScrollableAnchor> : null
                }
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.user, ...state.app
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {getUser, setBookMark, getBookMark},
        dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)