import React, { Component } from "react";
import { ReactComponent as SvgBackground } from "../../assets/trianglify.svg"; 
import { ReactComponent as SvgFirstName } from "../../assets/firstName.svg";
import { ReactComponent as SvgLastName } from "../../assets/lastName.svg";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      svgTop: "0px",
      navOpacity: 0
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.headerCss);
    this.setState({
      navOpacity: window.scrollY / window.innerHeight
    });
  }

  headerCss = () => {
    this.parallax();
    this.navOpacity();
  }

  navOpacity = () => {
    if((window.scrollY / window.innerHeight) < 1){
      this.setState({
        navOpacity: window.scrollY / window.innerHeight
      });
    }
  }

  parallax = () => {
    if((window.scrollY / window.innerHeight) < 1){
      const svgTop = (window.scrollY / 4) * -1
      this.setState({
        svgTop: `${svgTop}px`
      });
    }
  }

  render() {
    return (
      <header>
        <SvgBackground style={{top: this.state.svgTop}} className="background-svg"/>
        <SvgFirstName className="name-first"/>
        <SvgLastName className="name-last"/>
        <Arrow className="first-arrow"/>
        <Arrow className="second-arrow"/>
        <nav style={{backgroundColor: `rgba(69, 69, 69, ${this.state.navOpacity})`}}>
          <div>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </div>
        </nav>
      </header>
    );
  }
}