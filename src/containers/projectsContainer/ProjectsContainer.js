import React from "react";
import { BarStockProject } from "../barstockProject/BarstockProject";
import { MovieProject } from "../movieProject/MovieProject";
import { ThesaurusProject } from "../thesaurusProject/ThesaurusProject";
import { RecipeProject } from "../recipeProject/RecipeProject";
import { PokemonProject } from "../pokemonProject/PokemonProject";

export function ProjectsContainer() {
  return (
    <section className="projects-container" id="projects">
      <h2>Projects</h2>
      <BarStockProject />
      <MovieProject />
      <ThesaurusProject />
      <RecipeProject />
      <PokemonProject />
    </section>
  );
}