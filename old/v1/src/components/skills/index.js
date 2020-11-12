import React from 'react';

import './style.css';
import './responsive.css';

import Frontend from '../../resources/icon/frontend.png';
import Backend from '../../resources/icon/backend.png';
import Database from '../../resources/icon/database.png';
import Languages from '../../resources/icon/languages.png';
import Prototyping from '../../resources/icon/prototyping.png';
//import Libraries from '../../resources/icon/libraries.png';

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div id="skills" className="skills">
                <div className="skills-container">
                    <h1 className="skills-container-title">Skills</h1>
                    <div className="box">
                        <div className="box-container">
                            <div className="box-container-left">
                                <div className="skills-box">
                                    <img alt="frontend" src={Frontend} className="skills-box-icon"></img>
                                    <p className="skills-box-text">
                                        <strong>Front-end</strong><br></br><br></br>
                                        React.js<br></br><br></br>
                                        Redux.js<br></br><br></br>
                                        Ionic 4<br></br><br></br>
                                        Angular 8<br></br><br></br>
                                        Next.js<br></br><br></br>
                                        React Native<br></br><br></br>
                                    </p>
                                </div>
                                <div className="skills-box">
                                    <img alt="languages" src={Languages} className="skills-box-icon"></img>
                                    <p className="skills-box-text">
                                        <strong>Languages</strong><br></br><br></br>
                                        C<br></br><br></br>
                                        C++<br></br><br></br>
                                        Javascript<br></br><br></br>
                                        Typescript<br></br><br></br>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="box-container">
                            <div className="box-container-center">
                                <div className="skills-box">
                                    <img alt="backend" src={Backend} className="skills-box-icon"></img>
                                    <p className="skills-box-text">
                                        <strong>Back-end</strong><br></br><br></br>
                                        Node.js<br></br><br></br>
                                        Express.js<br></br><br></br>
                                        Restify.js<br></br><br></br>
                                        Spring<br></br><br></br>
                                    </p>
                                </div>
                                <div className="skills-box">
                                    <img alt="prototyping" src={Prototyping} className="skills-box-icon"></img>
                                    <p className="skills-box-text">
                                        <strong>Prototyping</strong><br></br><br></br>
                                        Adobe XD<br></br><br></br>
                                        Adobe Photoshop<br></br><br></br>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="box-container">
                            <div className="box-container-right">
                                <div className="skills-box">
                                    <img alt="database" src={Database} className="skills-box-icon"></img>
                                    <p className="skills-box-text">
                                        <strong>Database</strong><br></br><br></br>
                                        PostgreSQL<br></br><br></br>
                                        MongoDB<br></br><br></br>
                                        MySQL<br></br><br></br>
                                        Redis<br></br><br></br>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blue-button">
                    <h2 onClick={() => window.open('https://github.com/guilhermebkel/Resume/blob/master/README.md')}>
                        See more
                    </h2>
                </div>
            </div>
        );
    }
}

export default Skills;