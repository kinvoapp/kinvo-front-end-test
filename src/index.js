import React from "react"
import { render } from "react-dom"

import "./assets/css/reset.css"
import "./assets/css/index.scss"

import App from './app.js'

render (
	<App />,
	document.querySelector('[data-js="app"]')
)
