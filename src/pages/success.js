import React from 'react';
import Layout from "../components/layout"

// export default function IndexPage({ children }) {
export default class IndexPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            code:"NA",
        }
    }
	componentDidMount(){
		let code = window.location.hash.substr(1);
		this.setState({code: code})
	}
	render(){
		return(
		  	<Layout>
			    <div className="welcome-area" id="welcome">
			        <div className="header-text">
			            <div className="container">
			                <div className="row">
			                    <div className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
			                        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
			                        <h1>Registered Successfully</h1>
			                        <p className="text-danger">Kindly pay the registration fees Rs 250.00/- to <b>9566866588</b> on Google Pay with the registration code <strong>#{this.state.code},</strong> We have made an confirmation email to the registered email address.</p>
			                        <a href="/" className="main-button-slider">Return Home</a>
			                    </div>
			                    <div className="hero-pic col-lg-6 col-md-12 col-sm-12 col-xs-12">
			                    	<img className="success-img" src={require(".././images/check.png")} alt="Nadanaloga Natyalaya"/>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</Layout>
		)
	}
}