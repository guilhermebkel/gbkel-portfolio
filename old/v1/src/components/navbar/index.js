import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Collapse } from 'react-collapse';
import Rotate from 'react-reveal/Rotate'
import Fade from 'react-reveal/Fade';
import { Icon } from 'antd';

import './style.css';
import './responsive.css';

import LogoDesktop from '../../resources/logo/white-logo.png';
import LogoMobile from '../../resources/logo/blue-logo.png';
import MenuButton from '../../resources/icon/menu-button.png';
import CloseButton from '../../resources/icon/close-button.png';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseNavbarIcon: MenuButton,
            collapseNavbarState: true,
            display: "none",
            goHomeButtonState: "none",
        }

        this.collapseNavbar = this.collapseNavbar.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        window.addEventListener("scroll", this.handleScroll.bind(this));
        this.resize();
    }

    handleScroll() {
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            this.setState({goHomeButtonState: "flex"})
          } else {
            this.setState({goHomeButtonState: "none"})
        }
    }
    
    resize() {
        if(window.innerWidth > 500){
            this.setState({
                display: "none",
                collapseNavbarIcon: MenuButton
            });
        } 
    }

    collapseNavbar(){
        this.setState({
            collapseNavbarState: !this.state.collapseNavbarState
        });
        if(this.state.collapseNavbarState){
            this.setState({
                display: "block",
                collapseNavbarIcon: CloseButton,
            });
        }
        else{
            this.setState({
                display: "none",
                collapseNavbarIcon: MenuButton,
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Fade ssrFadeout>
                    <a href="#home" className="home-button" style={{display: this.state.goHomeButtonState}}>
                        <Icon type="up" className="home-button-icon" />
                    </a>
                    <div id="home" className="navbar">
                        <div className="navbar-container">
                            <a className="logo-desktop" href="/"><img alt="logo" className="logo-desktop" src={LogoDesktop} /></a>
                            <Rotate><a className="logo-mobile" href="/"><img alt="logo" className="logo-mobile" src={LogoMobile} /></a></Rotate>
                            <div className="links-container">
                                <a href="#home"><h2>Home</h2></a>
                                <a href="#skills"><h2>Skills</h2></a>
                                <a href="#projects"><h2>Projects</h2></a>
                            </div>
                            <a href="#contact" className="button">
                                <h2>Send Inquery</h2>
                            </a>
                            <Rotate ssrFadeout><img alt="menu" className="menu" src={this.state.collapseNavbarIcon} onClick={this.collapseNavbar} /></Rotate>
                        </div>
                    </div>
                </Fade>
                <Collapse isOpened={true || false}>
                    <Zoom ssrFadeout>
                        <div className="navbar-collapse" style={{display: this.state.display}}>
                            <a href="#home"><h1>Home</h1></a>
                            <hr></hr>
                            <a href="#skills"><h1>Skills</h1></a>
                            <hr></hr>
                            <a href="#projects"><h1>Projects</h1></a>
                            <hr></hr>
                            <a href="#contact"><h1>Send Inquery</h1></a>
                        </div>
                        <div style={{width: "100%", height:"20px", display: this.state.display}}></div>
                    </Zoom>
                </Collapse>
            </React.Fragment>
        );
    }
}

export default Navbar;