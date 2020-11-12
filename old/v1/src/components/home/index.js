import React from 'react';
import Fade from 'react-reveal/Fade';

import './style.css';
import './responsive.css';

import Background from '../../resources/background/header.jpg';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Fade ssrFadeout>
                <div id="home" className="home" style={{backgroundImage: `url(${Background})`}}>
                    <div className="home-container">
                        <div className="home-container-text">
                            <p className="presentation">
                                Hello, I'm <strong>Guilherme Bromonschenkel</strong>.<br></br>
                                I can help you as a<br></br>
                                <strong>Full-Stack Web Developer</strong>.<br></br>
                            </p>
                            <p className="summary">
                                Doesn't matter if you have a small or big problem, it will be
                                great to help you solving it.<br></br>
                                Creating Websites, REST APIs and Full-Stack Web Applications are
                                examples of problems I've already been in touch with.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default Home;