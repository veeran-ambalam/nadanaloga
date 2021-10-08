/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./Footer"

import favicon from '../images/favicon.png'
import Helmet from 'react-helmet'

import "./assets/css/bootstrap.min.css"
import "./assets/css/font-awesome.css"
import "./assets/css/templatemo-lava.css"
import "./assets/css/owl-carousel.css"

// import "./assets/js/jquery-2.1.0.min.js"
// import "./assets/js/popper.js"
// import "./assets/js/bootstrap.min.js"
// import "./assets/js/owl-carousel.js"
// import "./assets/js/scrollreveal.min.js"
// import "./assets/js/waypoints.min.js"
// import "./assets/js/jquery.counterup.min.js"
// import "./assets/js/imgfix.min.js"
// import "./assets/js/custom.js"

export default function Layout({ children }) {

  return (
    <>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="TemplateMo" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
        <Helmet>
          <link rel="icon" href={favicon} />
        </Helmet>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

