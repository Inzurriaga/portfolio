import React, { Component } from "react";
import ProjectCard from "../projectCard/ProjectCard";

export default class ProjectsContainer extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: "BarStock",
          type: "React Native Application",
          description: "BarStock is a native application designed to solve the communication challenges between bar owners and distributors when placing inventory orders. BarStock is intended to alleviate this headache by providing bar owners with user interface to view distributor inventory, analyze profit margins, and automate text message/email ordering.",
          imagePath: require("../../assets/barstock.png"),
          live: null,
          github: "https://github.com/MRKrog/barstock-rn"
        },
        {
          title: "Pokemon TCG",
          type: "React Web Application",
          description: "An application which allows users to search their favorite Pokémon cards. users can view the card image and information about the card. The application uses the Pokemon TCG API for the data.",
          imagePath: require("../../assets/pokemon.png"),
          live: "https://pokemontcg-gabe.herokuapp.com",
          github: "https://github.com/Inzurriaga/pokemon-tcg"
        },
        {
          title: "Thesaurus",
          type: "Vue Web Application",
          description: "A take home challenge to learn a new frameWork and create an application with it. The application allows the user to search a word and view the defintion and synonyms. The user can also click any of the synonyms to search on that word.",
          imagePath: require("../../assets/thesaurus.png"),
          live: "https://gabe-thesaurus.herokuapp.com",
          github: "https://github.com/Inzurriaga/vue_thesaurus"
        },
        {
          title: "Movie Tracker",
          type: "React Web Application",
          description: "This is a Web application that allows the user to view the best movie of every genre and have the ability to save their favorite movies to view the information later. Not only can the user can view the genres but they can see if movies are in theater or movies that are coming out soon. On every movie information page we display the user reviewed score along with a description of the movie and an embedded youtube video of the trailer.",
          imagePath: require("../../assets/movie.png"),
          live: null,
          github: "https://github.com/Inzurriaga/Movie-Tracker"
        },
        {
          title: "Recipe",
          type: "React Web Application",
          description: "A small application where the user can search for recipes. when the user first load in the application will fetch a random recipe for them if the user doesn't like what they see they can search for a new recipe.",
          imagePath: require("../../assets/recipe.png"),
          live: "https://gabe-recipe.herokuapp.com",
          github: "https://github.com/Inzurriaga/recipe"
        }
      ]
    }
  }

  render() {
    return (
      <section className="projects-container" id="projects">
        <h2>Projects</h2>
        {
          this.state.projects.map((project, index) => {
            return <ProjectCard project={project} placement={ 1 + (.6 * (index + 1))}/>
          })
        }
      </section>
    );
  }
}