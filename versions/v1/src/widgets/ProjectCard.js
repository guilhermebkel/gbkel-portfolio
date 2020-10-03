import React, { Component } from 'react'
import { Icon } from 'antd'

export default class ProjectCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            image: this.props.image_url
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this))
        this.resize()
    }
    
    resize() {
        if(window.innerWidth < 500){
            this.setState({ image: this.props.resized_image_url });
        }
        else{
            this.setState({ image: this.props.image_url })
        }
    }

    render(){
        return (
            <div className="card">
                <div 
                    loading="lazy" 
                    className="mockup-image" 
                    style={{ backgroundImage: `url(${this.state.image})` }}
                    onClick={() => window.open(this.props.live_url)} 
                />
                <div className="mockup-description">
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.technologies}</h2>
                    <p>{this.props.description}</p>
                    <a href={this.props.github_url} target="_blank" rel="noopener noreferrer">
                        <span>View code</span>
                        <Icon type="github" style={{ fontSize: "25px", margin: "auto 0" }} />
                    </a>
                </div>
            </div>
        )
    }
}