import React, { Component } from "react";
import { ReactComponent as Github } from "../../assets/github.svg"
import barStock from "../../assets/barstock.png";

export class BarStockProject extends Component {
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
    if((window.scrollY / window.innerHeight) > 1.5 ){
      this.setState({
        class: "project-animation"
      })
    }
  }

  render() {
    return (
      <article className={`barstock ${this.state.class}`} >
        <h4>React Native Application</h4>
        <h3>BarStock</h3>
        <p>BarStock is a native application designed to solve the communication challenges between bar owners and distributors when placing inventory orders. In the bar industry, it is frequently common practice to place weekly inventory orders via text messages/emails. Bar owners are not provided with pricing sheets, nor available inventory, and often receive incorrect shipments. BarStock is intended to alleviate this headache by providing bar owners with user interface to view distributor inventory, analyze profit margins, and automate text message/email ordering.</p>
        <div className="image">
          <img src={barStock} alt="barstock application"/>
        </div>
        <div className="link">
          <a href="https://github.com/MRKrog/barstock-rn"><Github />GitHub</a>
        </div>
      </article>
    )
  }
}