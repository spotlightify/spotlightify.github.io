import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Layout } from "../components/layout/layout"
import SEO from "../components/seo"
import { Landing } from "../components/landing"
import { Feature, Features } from "../components/features"

const IndexPage = () => {
	const images = useStaticQuery(graphql`
        query {
            landing: file(relativePath: { eq: "spotlightify_landing_dark.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2560) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            search: file(relativePath: { eq: "feature_search.png" }) {
                childImageSharp {
                    fluid(maxWidth: 610) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            options: file(relativePath: { eq: "feature_options.png" }) {
                childImageSharp {
                    fluid(maxWidth: 610) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            artist: file(relativePath: { eq: "feature_artist.png" }) {
                childImageSharp {
                    fluid(maxWidth: 610) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
            device: file(relativePath: { eq: "feature_device.png" }) {
                childImageSharp {
                    fluid(maxWidth: 610) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
        }
	`)
	return (
	  <Layout>
		  <SEO title="Home"/>
		  <Landing
			fluid={images.landing}
			title="Spotlightify"
			subtitle="Control your Spotify without distractions"
		  />
		  <Features>
			  <Feature
				title="Search"
				info="Effortlessly search for your favourite songs"
				image={images.search}
			  />
			  <Feature
				title="Search"
				info="Effortlessly search for your favourite songs"
				image={images.options}
			  />
			  <Feature
				title="Search"
				info="Effortlessly search for your favourite songs"
				image={images.artist}
			  />
			  <Feature
				title="Search"
				info="Effortlessly search for your favourite songs"
				image={images.device}
			  />
		  </Features>
	  </Layout>
	)
}

export default IndexPage
