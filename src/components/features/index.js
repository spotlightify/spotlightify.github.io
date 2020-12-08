import React from "react"
import Image from "gatsby-image"
import { Wrap } from "../wrap"

import "./features.scss"

export const Features = ({ children }) => (
  <div className="features">
	  {children}
  </div>
)

export const Feature = ({ title, info, image }) => (
  <Wrap>
	  <div className="feature">
		  <div className="feature-content">
			  <h3>{title}</h3>
			  <p>{info}</p>
		  </div>
		  {image && <Image className="feature-image" fluid={image.childImageSharp.fluid}/>}
	  </div>
  </Wrap>
)
