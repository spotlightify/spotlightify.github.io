import React from "react"
import { Wrap } from "../../wrap"
import { GitHub, WordLogo } from "../../icon"
import { Link } from "gatsby"
import "./header.scss"

export const Header = () => (
  <header className="header">
	  <Wrap>
		  <Link to="/" className="brand">
			  <WordLogo/>
		  </Link>
		  <div className="menu">
			  <MenuItem title="Setup" link="/setup"/>
			  <MenuItemLink icon={<GitHub/>} link="https://github.com/spotlightify/spotlightify"/>
		  </div>
	  </Wrap>
  </header>
)

const MenuItem = ({ title, icon, link }) => {
	return (
	  <Link className="menu-item" to={link}>
		  {icon ? icon : title}
	  </Link>
	)
}

const MenuItemLink = ({ title, icon, link }) => {
	return (
	  <a className="menu-item" href={link} target="_blank" rel="noreferrer">
		  {icon ? icon : title}
	  </a>
	)
}
