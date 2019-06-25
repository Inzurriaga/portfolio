import React, { Component } from "react";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Internet } from "../../assets/internet.svg"
import thesaurus from "../../assets/thesaurus.png";

export class ThesaurusProject extends Component {
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
    if((window.scrollY / window.innerHeight) > 2.6 ){
      this.setState({
        class: "project-animation"
      })
    }
  }

  render() {
    return (
      <article className={`thesaurus ${this.state.class}`}>
        <h4>Vue Web Application</h4>
        <h3>Thesaurus</h3>
        <p>A take home challenge to learn a new frameWork and create an application with it. The application allows the user to search a word and view the defintion and synonyms. The user can also click any of the synonyms to search on that word.</p>
        <div className="image">
          <img src={thesaurus} alt="" />
        </div>
        <div className="link">
          <a href="https://github.com/Inzurriaga/vue_thesaurus"><Github />GitHub</a>
          <a href="https://gabe-thesaurus.herokuapp.com/"><Internet />live</a>
        </div>
      </article>
    )
  }
}