import React from 'react';
import Layout from "../components/layout"

import firebase from "gatsby-plugin-firebase"
import 'firebase/storage';
import 'firebase/functions';
import 'firebase/firestore';
import "firebase/auth"

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

		var dataRef = JSON.parse(localStorage.getItem('paymentObj'));
		alert(dataRef);
		console.log(dataRef.type);
		const db = firebase.firestore();
        db.settings({});
		var docRef = db.collection(dataRef.type).doc(dataRef._id);

		docRef.update({
			paid: 1
		})
		.then(() => {
			console.log("Document successfully updated!");
		})
		.catch((error) => {
			// The document probably doesn't exist.
			console.error("Error updating document: ", error);
		});
		
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
			                        <p className="text-danger">We have made an confirmation email to the registered email address.</p>
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