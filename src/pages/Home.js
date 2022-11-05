import React, { Component } from "react";
import { Link } from 'react-router-dom';
import passport from '../assets/passport.jpg';

class Home extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="App-logo-box">
						<img src={passport} className="App-logo" alt="passport" id="profile__img" />
					</div>
					<p id="twitter">
						<span style={{ color: '#444' }}>Twitter @</span>
						<a href="https://twitter.com/onosokwe"
							style={{ color: '#00acee' }}
							target="_blank"
							rel="noreferrer">onosokwe</a>
						<br />
						<span style={{ color: '#444' }}>Slack @</span>
						<a href="https://slack.com/onosokwe"
							style={{ color: '#E01E5A' }}
							id="slack" target="_blank" rel="noreferrer">onosokwe </a></p>
				</header>

				<section className="links-section">
					<div>
						<a href="https://training.zuri.team/" className="link" id="btn__zuri" target="_blank" rel="noreferrer">My Trainings </a>
						<span className="subtext">My Courses and Tasks on HNGi9</span>
					</div>

					<div style={{ marginTop: 15 }}>
						<a href="http://books.zuri.team" className="link purple" id="books" target="_blank" rel="noreferrer">Books </a>
						<span className="subtext">Looking for books on design and coding. Click this button</span>
					</div>

					<div style={{ marginTop: 15 }}>
						<a href="https://books.zuri.team/python-for-beginners?ref_id=onosokwe" className="link yellow" id="book__python"
							target="_blank" rel="noreferrer">Python for Beginners </a>
						<span className="subtext">Featured Book: Python for Beginners </span>
					</div>

					<div style={{ marginTop: 15 }}>
						<a href="https://background.zuri.team/" className="link green" id="pitch" target="_blank"
							rel="noreferrer">Pitch your work here </a>
						<span className="subtext">Pitch your work here </span>
					</div>

					<div style={{ marginTop: 15 }}>
						<a href="https://books.zuri.team/design-rules" className="link red" id="book__design" target="_blank"
							rel="noreferrer">FREE BOOK: Design Rules </a>
						<span className="subtext">Download the free design book by Zuri. </span>
					</div>

					<div style={{ marginTop: 15 }}>
						<Link to='/contact' className="link blue" id="contact__me">Contact Me</Link>
					</div>

				</section>
			</div>
		)
	}
}

export default Home;