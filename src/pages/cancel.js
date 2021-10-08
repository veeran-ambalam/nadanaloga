import React from 'react';
import Layout from "../components/layout"

// export default function IndexPage({ children }) {
export default class IndexPage extends React.Component {
	render(){
		return(
		  	<Layout>
			    <div className="welcome-area" id="welcome">
			        <div className="header-text">
			            <div className="container">
			                <div className="row">
			                    <div className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
			                        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
			                        <h1>Sorry Something is wrong</h1>
			                        <p>If you're facing any trouble registering please iform us through <a href="#contact-us">contact from</a></p> 
			                        <a href="/" className="main-button-slider">Return Home</a>
			                    </div>
			                    <div className="hero-pic col-lg-6 col-md-12 col-sm-12 col-xs-12">
			                    	<img className="cancel-img" src={require(".././images/cancel.png")} alt="Nadanaloga Natyalaya"/>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</Layout>
		)
	}
}