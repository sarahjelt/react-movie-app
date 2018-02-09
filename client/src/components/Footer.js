import React from "react";
import Link from "react-router-dom";
import { login, logout, isLoggedin } from '../utils/AuthService';


export const Footer = (props) => (
    <footer className="page-footer" style={Style.footer}>
          <div className="container">
            <div className="row">
              <div className="col l4 s12">
                <h5 className="white-text">The Lit Bayou</h5>
                <p className="grey-text text-lighten-4"></p>
              </div>
              <div className="col l4 s12">
                <h5 className="white-text">Navigation</h5>
                <ul>
                  <li><a href='/home'>Home</a></li>
                  <li><a href='/explore'>Explore</a></li>
                </ul>
              </div>
              <div className="col l4 s12">
                <h5 className="white-text">App made possible by:</h5>
                <img src="https://www.themoviedb.org/static_cache/v4/logos/408x161-powered-by-rectangle-blue-10d3d41d2a0af9ebcb85f7fb62ffb6671c15ae8ea9bc82a2c6941f223143409e.png" alt="The Movie Database" style={Style.img}></img>
              </div>

            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2018 Team Gudetama
            </div>
          </div>
        </footer>
)

const Style = {
  footer: {
    backgroundColor: "green"
  },
  img: {
    height: "80px",
    width: "200px",
    marginLeft: "20px"
  },
  container: {
    textAlign: "center"
  }

}