import React, { Component } from "react";
import gears from "../../assets/gears.png"

export class PokemonProject extends Component {
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
    if((window.scrollY / window.innerHeight) > 3.6 ){
      this.setState({
        class: "project-animation"
      })
    }
  }

  render() {
    return (
      <article className={`pokemon ${this.state.class}`}>
        <h4>React Web Application</h4>
        <h3>Pokemon TCG</h3>
        <p>A Web Application that's under construction that will involve the pokemon TCG API.</p>
        <div className="image">
          <img src={gears} alt="gears" />
        </div>
      </article>
    )
  }
}