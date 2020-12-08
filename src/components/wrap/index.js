import React from "react"
import PropTypes from "prop-types"
import "./wrap.scss"

export const Wrap = ({ className, children, vertical = false }) => {
	let classNames = ""
	if (vertical)
		classNames += " vertical"
	if (className)
		classNames += ` ${className}`

	return (
	  <div className={`wrap${classNames}`}>{children}</div>
    )
}

Wrap.propTypes = {
	className: PropTypes.string,
	vertical: PropTypes.bool,
	children: PropTypes.node.isRequired
}
