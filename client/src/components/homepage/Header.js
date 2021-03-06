import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li key="1">
            <a href="#features">Food Delivery</a>
          </li>,
          <li key="2">
            <a href="#works">How it works</a>
          </li>,
          <li key="3">
            <a href="#cities">Our cities</a>
          </li>,
          <li key="4">
            <a href="/auth/google">Login</a>
          </li>,
        ];
      default:
        return [
          <li key="1">
            <a href="#features">Food Delivery</a>
          </li>,
          <li key="2">
            <a href="#works">How it works</a>
          </li>,
          <li key="3">
            <a href="#cities">Our cities</a>
          </li>,
          <li key="4">
            <a href="#signup">Sign up</a>
          </li>,
          <li key="5">
            <a href="/account">My Account</a>
          </li>,
        ];
    }
  }

  render() {
    const plans = document.querySelector('#signup');
    const features = document.querySelector('#features');
    return (
      <div className="nav">
        <div className="navbar">
          <div className="row">
            <Link to={'/'} className="link">
              <img
                src="./images/megabytes-white.png"
                alt="Megabytes Logo"
                className="logo"
              />
              <img
                src="./images/megabytes.png"
                alt="Megabytes Logo"
                className="logo-black"
              />
            </Link>
            <ul className="main-nav js--main-nav">{this.renderContent()}</ul>
            <a className="mobile-nav-icon js--nav-icon">
              <i className="ion-navicon-round" />
            </a>
          </div>
        </div>
        <div className="hero-text-box">
          <h1>
            Goodbye unhealthy food.
            <br />
            Hello healthy meals.
          </h1>
          <button
            className="btn btn-full js--scroll-to-plans"
            onClick={() =>
              plans.scrollIntoView({ block: 'start', behavior: 'smooth' })
            }
          >
            I'm hungry
          </button>
          <button
            className="btn btn-ghost js--scroll-to-start"
            onClick={() =>
              features.scrollIntoView({ block: 'start', behavior: 'smooth' })
            }
          >
            Show me more
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
