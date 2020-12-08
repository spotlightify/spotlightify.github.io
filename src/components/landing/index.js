import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Wrap } from "../wrap"
import "./landing.scss"

export const Landing = ({ fluid, title, subtitle }) => (
  <div className="landing">
	  <BackgroundImage Tag={`section`} fluid={fluid.childImageSharp.fluid} className="landing-background-image">
		  <Wrap>
			  <h1>{title}</h1>
			  <h2>{subtitle}</h2>
		  </Wrap>
	  </BackgroundImage>
  </div>
)
