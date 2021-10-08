import React from 'react';
import ReactModal from 'react-modal'
import { navigate } from 'gatsby'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import firebase from "gatsby-plugin-firebase"
import 'firebase/storage';
import 'firebase/functions';
import 'firebase/firestore';
import "firebase/auth"

import Layout from "../components/layout"
import SEO from "../components/seo"

// export default function IndexPage({ children }) {
export default class IndexPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isModalOpen: false,
			loading:false,
			competition: "",
		}
		this.contest = this.contest.bind(this);
	}

	handleModalOpen = event => {
		// console.log('handleModalOpen: ', event);
		this.setState({ isModalOpen: true })
	}

	handleModalClose = event => {
		// console.log('handleModalOpen: ', event);
		this.setState({ isModalOpen: false })
	}

	async contest(event){
		event.preventDefault();
		this.setState({loading: true});

		if(!this.state.video){
			toast.error("Please upload your video and submit", "Error");
			this.setState({loading: false});
			return false;
		}

		let name = document.getElementById('fullname').value;
		let pname = document.getElementById('pname').value;
		let dob = document.getElementById('dob').value;
		let mobile = document.getElementById('fullmobile').value;
		let sname = document.getElementById('sname').value;
		let grade = document.getElementById('grade').value;
		let address = document.getElementById('address').value;
		let email = document.getElementById('email').value;
		let competition = document.getElementById('competition-val').value;
		// let video = this.state.video;

		let adownloadURL;
		const auploadTask = await firebase.storage().ref('videos/'+this.state.video.name).put(this.state.video);
        adownloadURL = await auploadTask.ref.getDownloadURL();
        console.log(adownloadURL);
        let code = Math.floor((Math.random() * 10000) + 1);
        let form = {
        	name: name,
        	pname: pname,
        	dob: dob,
        	mobile: mobile,
        	sname: sname,
        	grade: grade,
        	address: address,
        	email: email,
        	video: adownloadURL,
        	competition: competition,
        	paid: "0",
        	code: code,
        }
        console.log(form);

        const db = firebase.firestore();
        db.settings({});
        const userRef = await db.collection('danceLeads').add(form);
        navigate('/success/#'+code) ;
	}

    handleFile = (e) => {
    	console.log(e.target)
        if(e.target.files !== undefined){
            let image = e.target.files[0];
            // console.log(image.type);
            // console.log(image.size);
            
            if(image.type.match('video.*') && image.size < "800000000"){
                    this.setState({video: image})
            }
            else{
            	this.setState({video: ''})
            	toast.error("Please upload video files and max size is 800mb", "Error");
            	document.getElementById('addressProofFile').value = '';
            	return false
            }
        }
        else{
        	toast.error("Please upload video files and max size is 800mb", "Error");
        	document.getElementById('addressProofFile').value = '';
        	return false
        }
    };
	render(){
		return(
		  	<Layout>
			    <SEO title={"Nadanaloga"} />
			    <div className="welcome-area" id="welcome">
			        <div className="header-text">
			            <div className="container">
			                <div className="row">
			                    <div className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
			                        data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
			                        <h1>A School of <em>Classical Reform</em></h1>
			                        <p>An attempt to embody the divine beauty, charms, rhythm and symbols that exists in headven.</p> 
			                        <a href="#about-us" className="main-button-slider">KNOW US BETTER</a>
			                    </div>
			                    <div className="hero-pic col-lg-6 col-md-12 col-sm-12 col-xs-12">
			                    	<img src={require(".././images/a3.png")} alt="Nadanaloga Natyalaya"/>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>

			    <section className="section" id="competition">
			        <div className="container">
			            <div className="row">
			            	<div className="right-content col-lg-12 col-md-6 col-sm-12 col-xs-12">
			            		<h2 className="head">Vijayadashami <em>2020</em></h2>
			            		<p className="sub-head">Vijayadashami, the day celebrates the good over the evil, light over daskness and knowledge over ignorance, its the day of <em>vidyarambam</em>, when students are introduced to the world of learning. Competition is one of the way of learning, come lets compete with the world.</p>
		            		</div>
		            		<div className="right-content col-lg-6 align-items-center d-flex flex-column justify-content-center">
		            			<h2 className="head">subscribe our <a href="https://www.youtube.com/channel/UCbgaFaw--RTkahdh9H0X89w"><i class="fa fa-youtube"></i><em>Youtube</em></a> channel.</h2>
		            			<p className="sub-head"><strong>Contestants Kindly subscribe our <a href="https://www.youtube.com/channel/UCbgaFaw--RTkahdh9H0X89w"><i className="fa fa-youtube"></i><em>Youtube</em></a> channel and press the bell icon to get the notifications regarding the results.</strong></p>
		            			<p className="sub-head"><strong>Results will be announced within October and Winners, Best performers video will be posted on our Youtube channel.</strong></p>
		            		</div>
		            		<div className="col-lg-6 text-center" >
		            			<img className="img-fluid" src={require(".././images/unnamed.png")} alt="Nadanaloga Natyalaya"/>
		            		</div>
		            		
		            		{/*
			                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
			                    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
			                    <div className="features-item">
			                        <div className="features-icon">
			                            <img src={require(".././images/lotus-flower.svg")} alt=""/>
			                            <h4>Bharathanatyam</h4>
			                            <p className="mb-4">Share us your significant performance with 3 minutes videos and win the gold coins and cash prizes of Vijayadashami 2020.</p>
			                            
			                            <div className="condtions" id="cond1">
			                            	<h5>Event Details</h5>
			                            	<p><span>Age:</span> Age Categories: 6 to 12 years and 13 to 18 years</p>
			                            	<p><span>Duration:</span>&nbsp;&nbsp; 3 minutes</p>
			                            	<p><span>songs:</span>&nbsp;&nbsp;Any classical and cine classical songs</p>
			                            	<p><span>Fees:</span>&nbsp;&nbsp;Rs 250.00/-</p>
			                            	<p><span>Last Date:</span>&nbsp;&nbsp;23, October 2020</p>
			                            	<p><span>Result On:</span>&nbsp;&nbsp;25, October 2020 (Vijayadashami)</p>
			                            	<p><span>Note:</span>&nbsp;&nbsp;Costumes will not be considered for scoring and edited videos will not be accepted</p>
			                            	<p><span>Registration Fees:</span> On registering with your videos, you will receive a unique ID number, Kindly pay your entry fees Rs 250/- on Google Pay(9566866588), and text the unique ID number in Google Pay.</p>
			                            </div>
			                            <a href="#" id="Bharathanatyam" className="main-button" onClick={()=>{this.handleModalOpen(); this.setState({competition:"Bharathanatyam"});}}>
			                                Join
			                            </a>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
			                    data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s">
			                    <div className="features-item">
			                        <div className="features-icon">
			                            <img src={require(".././images/music-note.svg")} alt=""/>
			                            <h4>Vocal Music</h4>
			                            <p>Share us your significant performance with 3 minutes videos and win the gold coins and cash prizes of Vijayadashami 2020.</p>
			                            <div className="condtions" id="cond1">
			                            	<h5>Event Details</h5>
			                            	<p><span>Age:</span> Age Categories: 6 to 12 years and 13 to 18 years</p>
			                            	<p><span>Duration:</span>&nbsp;&nbsp; 3 minutes</p>
			                            	<p><span>songs:</span>&nbsp;&nbsp;Any classical and cine classical songs</p>
			                            	<p><span>Fees:</span>&nbsp;&nbsp;Rs 250.00/-</p>
			                            	<p><span>Last Date:</span>&nbsp;&nbsp;23, October 2020</p>
			                            	<p><span>Result On:</span>&nbsp;&nbsp;25, October 2020 (Vijayadashami)</p>
			                            	<p><span>Note:</span>&nbsp;&nbsp;Avoid karaoke, can have shruti box during the song</p>
			                            	<p><span>Registration Fees:</span> On registering with your videos, you will receive a unique ID number, Kindly pay your entry fees Rs 250/- on Google Pay(9566866588), and text the unique ID number in Google Pay.</p>
			                            </div>
			                            <a href="#" className="main-button" id="Vocal-voice" onClick={()=>{this.handleModalOpen(); this.setState({competition:"Vocal Music"});}}>
			                                Join
			                            </a>
			                        </div>
			                    </div>
			                </div>*/}
			            </div>
			            <div className="row">
			            	<div className="mt-5 text-center col-lg-12 col-md-12 col-sm-12 col-xs-12">
			            		<img src={require(".././images/posture-01.jpg")} alt="App" className="auto-img"/>
			            	</div>
		            	</div>
			        </div>
			    </section>

			    {/*<div className="left-image-decor"></div>*/}

			    <section className="section about" id="about-us">
			        <div className="container">
			            <div className="row">
			                <div className="about-image col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix-big"
			                    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
			                    <img src={require(".././images/about.png")} alt="App"/>
			                </div>
			                <div className="right-text col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
			                	<h2 className="head">About <em>Nadanaloga</em></h2>
			                    <ul>
			                        <li>
			                            <div className="text">
			                                <p>Nadanaloga School of classical dance was instituted to impart Bharathanatyam skills and faithfully nurture our classical Bharathanatyam traditions.</p>
			                            </div>
			                        </li>
			                        <li>
			                            <div className="text">
			                                <p>Our school trains students of various age groups from age 5 and ladies of all ages through multiple levels of training.</p>
			                            </div>
			                        </li>
			                        <li>
			                            <div className="text">
			                                <p>Nadanaloga was instituted by Mr.G.Palanisamy in 2001 is being succesfully cherished by Mrs.Laskhmi Priya and Mrs. Tamil Thendral.</p>
			                            </div>
			                        </li>
			                        <li>
			                            <div className="text">
			                                <p>Nadanaloga always feels proud in training kids in a firendly and skillful manner. Our kids have excelled in many stage and national level competitions have added the jewel in the crown</p>
			                            </div>
			                        </li>
			                        <li>
			                            <div className="text">
			                                <p>Online classes are giving fruitful results throughout our nations, our classes are being conducted for international students in a properly syllabized manner</p>
			                            </div>
			                        </li>
			                        <li>
			                            <div className="text">
			                            	<br/>
			                                <p className="mb-3 ml-2"><q><em>Where the hand goes eyes follows <br/>Where the eyes go mind follows<br/>Where the mind goes emotions are nurtured<br/>And Inspiring Creativity.</em></q></p>
			                            </div>
			                        </li>
			                    </ul>
			                </div>
			                <div className="offset-lg-3 col-lg-6 col-md-12 col-sm-12">
			                	<Carousel>
					                <div>
					                    <img src={require(".././images/car8.jpeg")} />
					                </div>
					                <div>
					                    <img src={require(".././images/car6.jpeg")} />
					                </div>
					                <div>
					                    <img src={require(".././images/car7.jpeg")} />
					                </div>
					                <div>
					                    <img src={require(".././images/car4.jpg")} />
					                </div>
					                <div>
					                    <img src={require(".././images/car9.jpeg")} />
					                </div>
					                <div>
					                    <img src={require(".././images/car10.jpeg")} />
					                </div>
					            </Carousel>
			                </div>
			            </div>
			        </div>
			    </section>

			    {/*<div className="right-image-decor"></div>
			    <section className="section" id="testimonials">
			        <div className="container">
			            <div className="row">
			                <div className="col-lg-8 offset-lg-2">
			                    <div className="center-heading">
			                        <h2>What They Think <em>About Us</em></h2>
			                        <p>Suspendisse vitae laoreet mauris. Fusce a nisi dapibus, euismod purus non, convallis odio.
			                            Donec vitae magna ornare, pellentesque ex vitae, aliquet urna.</p>
			                    </div>
			                </div>
			                <div className="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big"
			                    data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
			                    <div className="owl-carousel owl-theme">
			                        <div className="item service-item">
			                            <div className="author">
			                                <i><img src="assets/images/testimonial-author-1.png" alt="Author One" /></i>
			                            </div>
			                            <div className="testimonial-content">
			                                <ul className="stars">
			                                    <li><i className="fa fa-star"></i></li>
			                                    <li><i className="fa fa-star"></i></li>
			                                    <li><i className="fa fa-star"></i></li>
			                                    <li><i className="fa fa-star"></i></li>
			                                    <li><i className="fa fa-star"></i></li>
			                                </ul>
			                                <h4>Jonathan Smart</h4>
			                                <p>“Nullam hendrerit, elit a semper pharetra, ipsum nibh tristique tortor, in tempus
			                                    urna elit in mauris.”</p>
			                                <span>Besta CTO</span>
			                            </div>
			                        </div>
			                        <div className="item service-item">
			                            <div className="author">
			                                <i><img src="assets/images/testimonial-author-1.png" alt="Second Author" /></i>
			                            </div>
			                            <div className="testimonial-content">
			                                <ul className="stars">
			                                    <li><i className="fa fa-star"></i></li>
			                                    <li><i className="fa fa-star"></i></li>
			                                    <li><i className="fa fa-star"></i></li>
			                                    <li><i className="fa fa-star"></i></li>
			                                    <li><i className="fa fa-star"></i></li>
			                                </ul>
			                                <h4>Martino Tino</h4>
			                                <p>“Morbi non mi luctus felis molestie scelerisque. In ac libero viverra, placerat est
			                                    interdum, rhoncus leo.”</p>
			                                <span>Web Analyst</span>
			                            </div>
			                        </div>
			                        <div className="item service-item">
			                            <div className="author">
			                                <i><img src="assets/images/testimonial-author-1.png" alt="Author Third" /></i>
			                            </div>
			                            <div className="testimonial-content">
			                                <ul className="stars">
			                                    <li><i className="fa fa-star"></i></li>
			                                    <li><i className="fa fa-star"></i></li>
			                                    <li><i className="fa fa-star"></i></li>
			                                </ul>
			                                <h4>George Tasa</h4>
			                                <p>“Fusce rutrum in dolor sit amet lobortis. Ut at vehicula justo. Donec quam dolor,
			                                    congue a fringilla sed, maximus et urna.”</p>
			                                <span>System Admin</span>
			                            </div>
			                        </div>
			                        <div className="item service-item">
			                            <div className="author">
			                                <i><img src="assets/images/testimonial-author-1.png" alt="Fourth Author" /></i>
			                            </div>
			                            <div className="testimonial-content">
			                                <ul className="stars">
			                                    <li><i className="fa fa-star"></i></li>
			                                    <li><i className="fa fa-star"></i></li>
			                                    <li><i className="fa fa-star"></i></li>
			                                    <li><i className="fa fa-star"></i></li>
			                                </ul>
			                                <h4>Sir James</h4>
			                                <p>"Fusce rutrum in dolor sit amet lobortis. Ut at vehicula justo. Donec quam dolor,
			                                    congue a fringilla sed, maximus et urna."</p>
			                                <span>New Villager</span>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>
			*/}
				<ReactModal
					isOpen={this.state.isModalOpen}
					onRequestClose={this.handleModalClose}
					contentLabel="Example Modal In Gatsby"
				>
				
					<div className="rm-header"><h2>Join Vijayadashami 2020</h2> <span onClick={this.handleModalClose}>x</span></div>
					<form method="post" onSubmit={this.contest}>
						<div className="row">
                            <div className="col-md-6 col-sm-12">
                                <fieldset>
                                    <input ref="name" name="name" type="text" id="fullname" placeholder="Full Name" required="true" 
                                        style={{background:"rgba(250,250,250,0.3);"}} />
                                </fieldset>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <fieldset>
                                    <input ref="pname" name="pname" type="text" id="pname" placeholder="Parent Name"
                                        required="true" style={{background:"rgba(250,250,250,0.3);"}} />
                                </fieldset>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <fieldset>
                                	<p className="text-left"><small>Date of Birth</small></p>
                                    <input ref="dob" name="dob" type="date" id="dob" placeholder="DOB" required="true"
                                        style={{background:"rgba(250,250,250,0.3);"}} />
                                </fieldset>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <fieldset>
                                	<p className="text-left"><small> </small></p>
                                    <input ref="mobile" name="mobile" type="text" id="fullmobile" placeholder="Contact Number"
                                        required="true" pattern="[0-9]*" style={{background:"rgba(250,250,250,0.3);"}} />
                                </fieldset>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <fieldset>
                                    <input ref="sname" name="sname" type="text" id="sname" placeholder="School Name" required="true"
                                        style={{background:"rgba(250,250,250,0.3);"}} />
                                </fieldset>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <fieldset>
                                    <input ref="grade" name="grade" type="text" id="grade" placeholder="Grade"
                                        required="true" style={{background:"rgba(250,250,250,0.3);"}} />
                                </fieldset>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <fieldset>
                                    <input ref="email" name="email" type="email" id="email" placeholder="Email"
                                        required="true" style={{background:"rgba(250,250,250,0.3);"}} />
                                </fieldset>
                            </div>
                            <div className="col-lg-12">
	                            <fieldset>
	                                <textarea ref="address" name="address" rows="6" id="address" placeholder="Address"
	                                    required="true" style={{background:"rgba(250,250,250,0.3);"}}></textarea>
	                            </fieldset>
	                        </div>
	                        <div className="col-lg-12">
	                            <fieldset>
	                            	<p className="text-left">Upload your video</p>
	                                <input type="file" className="custom-file-inputa" id="addressProofFile" aria-label="addressProofFileAddon01" onChange={this.handleFile.bind(this)}/>
	                            </fieldset>
	                        </div>
                            <div className="col-lg-12">
                                <fieldset>
                                	<p>On registering with your videos, you will receive a unique ID number, Kindly pay your entry fees Rs 250/- on Google Pay(9566866588), and text the unique ID number in Google Pay.</p>
                                    <button type="submit" id="form-submit" className="main-button" disabled={this.state.loading}>{this.state.loading === true ?<div className="spinner-border"></div>:null}Register</button>
                                    <input type="hidden" id="competition-val" value={this.state.competition} />
                                </fieldset>
                            </div>
                        </div>
					</form>
					{/*<button onClick={this.handleModalClose}>Close Modal</button>*/}
				</ReactModal>
				<ToastContainer
					position="bottom-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					/>
			</Layout>
		)
	}
}