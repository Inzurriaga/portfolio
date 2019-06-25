import React, { Component } from "react";
import pictureOne from "../../assests/pictureOne.jpeg";
import pictureTwo from "../../assests/pictureTwo.jpeg";
import pictureThree from "../../assests/pictureThree.jpeg";
import pictureFour from "../../assests/pictureFour.jpeg";

export class About extends Component {
  constructor() {
    super();
    this.state = {
      aboutAnim: "",
      aboutImage: ""
    }
  }

  componentDidMount(){
    window.addEventListener("scroll", this.textAnimation);
  }

  textAnimation = () => {
    if((window.scrollY / window.innerHeight) > 0.5){
      this.setState({
        aboutAnim: "about-animation",
        aboutImage: "about-image"
      });
    }
  }

  render() {
    return (
      <section className="about" id="about">
        <img src={pictureOne} alt="selfie" className={this.state.aboutImage}/>
        <img src={pictureTwo} alt="mountains" className={this.state.aboutImage}/>
        <img src={pictureThree} alt="gaming console" className={this.state.aboutImage}/>
        <img src={pictureFour} alt="mountains" className={this.state.aboutImage}/>
        <article>
          <h2 className={this.state.aboutAnim}>About</h2>
          <p className={this.state.aboutAnim}>I'm a veteran and a Software Developer. <br /> I love to play Video games, Snowboard and learn new things.<br /> I'm always up for a challenge, especially when it involves programming.</p>
        </article>
      </section>
    )
  }
}