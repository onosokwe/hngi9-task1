import React, { Component } from "react";
import { Link } from 'react-router-dom';
import passport from '../assets/passport.jpg';

class Contact extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="App-logo-box">
						<img src={passport} className="App-logo" alt="passport" id="profile__img" />
					</div>
					<Link to='/'>Home</Link>
				</header>

				<section className="links-section">
					<form>
						<input className="form-control" placeholder="First Name" id='first__name' />
					</form>

				</section>
			</div>
		)
	}
}

export default Contact;