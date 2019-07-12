import React, { Component } from "react";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Internet } from "../../assets/internet.svg";
import pokemon from "../../assets/pokemon.png";

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
        <p>An application which allows users to search their favorite Pokémon cards. users can view the card image and information about the card. The application uses the Pokemon TCG API for the data.</p>
        <div className="image">
          <img src={pokemon} alt="pokemon" />
        </div>
        <div className="link">
          <a href="https://github.com/Inzurriaga/pokemon-tcg"><Github />GitHub</a>
          <a href="https://pokemontcg-gabe.herokuapp.com/"><Internet />live</a>
        </div>
      </article>
    )
  }
}