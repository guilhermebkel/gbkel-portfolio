import React, { Component } from 'react';

import Navbar from '../components/navbar'
import Home from '../components/home'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'

export default class Main extends Component {
  render() {
    return [
        <Navbar />,
        <Home />,
        <Skills />,
        <Projects />,
        <Contact />,  
    ]
  }
}