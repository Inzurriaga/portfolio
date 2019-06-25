import React from "react"
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";

export function Footer() {
  return(
    <section className="footer">
      <div>
        <p>Phone: 720-347-2399</p>
        <p>Email: gabeinzurriaga@yahoo.com</p>
      </div>
      <div>
        <a href="https://github.com/Inzurriaga"><Github /></a>
        <a href="https://www.linkedin.com/in/gabriel-inzurriaga-8b24a3177/"><Linkedin /></a>
      </div>
    </section>
  )
}