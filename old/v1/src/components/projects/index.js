import React from "react"
import { Collapse } from "react-collapse"
import request from "request"
import Api from "../../services/api"

import "./style.css"
import "./responsive.css"

import ProjectCard from "../../widgets/ProjectCard"
import ProjectsBackup from "../../projects.json"

export default class Projects extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			buttonText: "Show All",
			numberOfProjects: 4,
			showAll: false,
			projects: [],
			buttonEnabled: false,
			counter: 0,
		}
	}

	async componentDidMount() {
		const { data: response } = await Api.get("/project")
		if (response.result) {
			return this.setState({
				buttonEnabled:
					response.data.filter(project => project.active).length > 4,
				projects: response.data
			})
		}

		request.get(
			"https://raw.githubusercontent.com/guilhermebkel/database/master/texts/projects.json",
			(error, response, body) => {
				if (!error) {
					this.setState({
						buttonEnabled:
							JSON.parse(body).filter(project => project.active).length > 4,
						projects: JSON.parse(body)
					})
				} else {
					this.setState({
						buttonEnabled:
							ProjectsBackup.filter(project => project.active).length > 4,
						projects: ProjectsBackup
					})
				}
			}
		)
		
	}

	handleNumberOfProjects = () => {
		if (this.state.showAll) {
			this.setState({
				showAll: false,
				buttonText: "Show All",
				numberOfProjects: 4
			})
		} else {
			this.setState({
				showAll: true,
				buttonText: "Hide",
				numberOfProjects: this.state.projects.length
			})
		}
	}

	render() {
		return (
			<div id="projects" className="projects">
				<div className="projects-container">
					<h1 className="projects-container-title">Projects</h1>
					<Collapse isOpened={true || false}>
						<div className="mockup-grid">
							{this.state.projects.length &&
								this.state.projects
									.filter(project => project.active)
									.slice(0, this.state.numberOfProjects)
									.map(project => (
										<ProjectCard
											key={"project" + project.position}
											{...project}
										/>
									))}
						</div>
					</Collapse>
					<div
						className="blue-button"
						style={{ display: this.state.buttonEnabled ? "flex" : "none" }}
					>
						<h2 onClick={this.handleNumberOfProjects}>
							{this.state.buttonText}
						</h2>
					</div>
				</div>
			</div>
		)
	}
}
