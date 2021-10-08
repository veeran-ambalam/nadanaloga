import React from 'react'
import firebase from "gatsby-plugin-firebase"
import 'firebase/storage';
import 'firebase/functions';
import 'firebase/firestore';

// import { Link } from "gatsby"
// import * as Icon from 'react-feather'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // isModalOpen: false,
        }
        this.contact = this.contact.bind(this);
    }

    async contact(event){
        event.preventDefault();

        let name = this.refs.fname.value;
        let mobile = this.refs.mobile.value;
        let message = this.refs.message.value;

        let form = {
            name:name,
            mobile:mobile,
            message: message
        }

        const db = firebase.firestore();
        db.settings({});
        const userRef = await db.collection('nadanalogaContacts').add(form);
        document.getElementById("contact").reset();

    }
    render() {
        return (
            <footer id="contact-us">
                <div className="container">
                    <div className="footer-content">
                        <div className="row">
                            {/*<!-- ***** Contact Form Start ***** -->*/}
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="contact-form">
                                    <form id="contact" action="" method="post" onSubmit={this.contact.bind(this)}>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <fieldset>
                                                    <input ref="fname" name="name" type="text" id="name" placeholder="Full Name" required=""
                                                        style={{background:"rgba(250,250,250,0.3);"}} />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <fieldset>
                                                    <input ref="mobile" name="mobile" type="text" id="mobile" placeholder="Mobile Number"
                                                        required="" style={{background:"rgba(250,250,250,0.3);"}} />
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-12">
                                                <fieldset>
                                                    <textarea ref="message" name="message" rows="6" id="message" placeholder="Your Message"
                                                        required="" style={{background:"rgba(250,250,250,0.3);"}}></textarea>
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-12">
                                                <fieldset>
                                                    <button type="submit" id="form-submit" className="main-button">Send Message
                                                        Now</button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/*<!-- ***** Contact Form End ***** -->*/}
                            <div className="right-content col-lg-6 col-md-12 col-sm-12 ">
                                <h2>Contact <em>Nadanaloga</em></h2>
                                <p>We are taking online classes through zoom, Skype and Google Meet for foreign as well as nearby students.Feel free to contact us on your queries and we will get back to you as soon as possible.</p>
                                <br/>
                                <br/>
                                <p>
                                    <i className="fa fa-map-marker"></i>&nbsp;&nbsp;Nadanaloga Natyalaya,
                                    Bhavananthiyar street, Sembakkam,
                                    Chennai, Tamil Nadu 600073,<br/>
                                    <i className="fa fa-phone"></i>&nbsp;&nbsp;+91 9566866588&nbsp;&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-envelope"></i>&nbsp;&nbsp;info@nadanaloga.com
                                </p>
                                <br/>
                                <p>
                                    <i className="fa fa-map-marker"></i>&nbsp;&nbsp;Nadanaloga,
                                    7-80/1/202, Swarna Palace,
                                    Thirumala Enclave, Phase-2, Tammaiaguta
                                    Hyderabad, Telangana 500083<br/>
                                    <i className="fa fa-phone"></i>&nbsp;&nbsp;+91 08801842212&nbsp;&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-envelope"></i>&nbsp;&nbsp;info@nadanaloga.com
                                </p>
                                <ul className="social">
                                    <li><a href="https://www.facebook.com/Nadanalogachennai"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCbgaFaw--RTkahdh9H0X89w"><i className="fa fa-youtube"></i></a></li>
                                    {/*<li><a href="https://fb.com/templatemo"><i className="fa fa-instagram"></i></a></li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sub-footer">
                                <p>Copyright &copy; 2020 Nadanaloga.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
