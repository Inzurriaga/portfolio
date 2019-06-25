import React, { Component } from "react";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Internet } from "../../assets/internet.svg";
import recipe from "../../assets/recipe.png";

export class RecipeProject extends Component {
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
    if((window.scrollY / window.innerHeight) > 3.1 ){
      this.setState({
        class: "project-animation"
      })
    }
  }

  render() {
    return (
      <article className={`recipe ${this.state.class}`}>
        <h4>React Web Application</h4>
        <h3>Recipe</h3>
        <p>A small application where the user can search for recipes. when the user first load in the application will fetch a random recipe for them if the user doesn't like what they see they can search for a new recipe.</p>
        <div className="image">
          <img src={recipe} alt="Recipe Application" />
        </div>
        <div className="link">
          <a href="https://github.com/Inzurriaga/recipe"><Github />GitHub</a>
          <a href="https://gabe-recipe.herokuapp.com/"><Internet />live</a>
        </div>
      </article>
    )
  }
}