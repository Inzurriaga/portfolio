import React, { Component } from "react";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Internet } from "../../assets/internet.svg";

export default class PokemonProject extends Component {
  constructor() {
    super();
    this.state = {
      class: ""
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.projectAnimation)
  }

  projectAnimation = () => {
    if((window.scrollY / window.innerHeight) > this.props.placement ){
      this.setState({
        class: "project-animation"
      })
    }
  }

  render() {
    const { title, type, description, imagePath, live, github } = this.props.project
    return (
      <article className={`project-card ${this.state.class}`}>
        <h4>{type}</h4>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="image">
          <img src={ imagePath } alt={title} />
        </div>
        <div className="link">
          {
            github ? <a href={github}><Github />GitHub</a> : null
          }
          {
            live ? <a href={live}><Internet />live</a> : null
          }
        </div>
      </article>
    )
  }
}