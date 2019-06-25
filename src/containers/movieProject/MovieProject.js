import React, { Component } from "react";
import { ReactComponent as Github} from "../../assets/github.svg";
import movie from "../../assets/movie.png";

export class MovieProject extends Component {
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
    if((window.scrollY / window.innerHeight) > 2 ){
      this.setState({
        class: "project-animation"
      })
    }
  }

  render() {
    return (
      <article className={`movie ${this.state.class}`}>
        <h4>React Web Application</h4>
        <h3>Movie Tracker</h3>
        <p>This is a Web application that allows the user to view the best movie of every genre and have the ability to save their favorite movies to view the information later. Not only can the user can view the genres but they can see if movies are in theater or movies that are coming out soon. On every movie information page we display the user reviewed score along with a description of the movie and an embedded youtube video of the trailer.</p>
        <div className="image">
          <img src={movie} alt="Movie Tracker Application" />
        </div>
        <div className="link">
          <a href="https://github.com/Inzurriaga/Movie-Tracker"><Github />GitHub</a>
        </div>
      </article>
    )
  }
}