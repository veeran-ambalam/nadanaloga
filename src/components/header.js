import React from 'react'
// import { Link } from "gatsby"

export default class Header extends React.Component {

    render(){
        return (
        <>
        <div id="preloader">
            <div class="jumper">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

        <header class="header-area header-sticky">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav class="main-nav">
                            {/*<!-- ***** Logo Start ***** -->*/}
                            <a href="index.html" class="logo">
                                Lava
                            </a>
                            {/*<!-- ***** Logo End ***** -->*/}
                            {/*<!-- ***** Menu Start ***** -->*/}
                            <ul class="nav">
                                <li class="scroll-to-section"><a href="#welcome" class="menu-item">Home</a></li>
                                <li class="scroll-to-section"><a href="#about" class="menu-item">About</a></li>
                                <li class="scroll-to-section"><a href="#testimonials" class="menu-item">Testimonials</a>
                                </li>
                                <li class="submenu">
                                    <a href="javascript:;">Drop Down</a>
                                    <ul>
                                        <li><a href="" class="menu-item">About Us</a></li>
                                        <li><a href="" class="menu-item">Features</a></li>
                                        <li><a href="" class="menu-item">FAQ's</a></li>
                                        <li><a href="" class="menu-item">Blog</a></li>
                                    </ul>
                                </li>
                                <li class="scroll-to-section"><a href="#contact-us" class="menu-item">Contact Us</a></li>
                            </ul>
                            <a class='menu-trigger'>
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
