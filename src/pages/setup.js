import React from "react"
import { Link } from "gatsby"

import {Layout} from "../components/layout/layout"
import SEO from "../components/seo"

const SetupPage = () => (
  <Layout>
    <SEO title="Setup" />
    <h1>Setup</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SetupPage
