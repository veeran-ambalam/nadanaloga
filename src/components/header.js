import React from 'react'
// import { Link } from "gatsby"

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menu:false,
        }
    }

    nav(){
        this.setState({menu:!this.state.menu});
    }

    render(){
        return (
        <>
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/*<!-- ***** Logo Start ***** -->*/}
                            <a href="index.html" className="logo">
                                <img src={require("../images/logo.png")} />
                            </a>
                            {/*<!-- ***** Logo End ***** -->*/}
                            {/*<!-- ***** Menu Start ***** -->*/}
                            <ul className={this.state.menu === true ? "nav mobileNav":"nav"}>
                                <li className="scroll-to-section"><a href="#competition" className="menu-item">Competitions</a></li>
                                <li className="scroll-to-section"><a href="https://www.youtube.com/channel/UCbgaFaw--RTkahdh9H0X89w" className="menu-item">Youtube</a></li>
                                {/*<li className="scroll-to-section"><a href="#about" className="menu-item">Instagram</a></li>*/}
                                <li className="scroll-to-section"><a href="#about-us" className="menu-item">About Us</a></li>
                                <li className="scroll-to-section"><a href="#contact-us" className="menu-item">Contact Us</a></li>
                            </ul>
                            <a className='menu-trigger' onClick={this.nav.bind(this)}>
                                <span>Menu</span>
                            </a>
                            {/*<!-- ***** Menu End ***** -->*/}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        </>
        )
    }
}
