import React from "react"
import PropTypes from "prop-types"
import { Header } from "./header"
import { Footer } from "./footer"

import "./layout.scss"

export const Layout = ({ children }) => (
  <>
	  <Header/>
	  {children}
	  <Footer/>
  </>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired
}
