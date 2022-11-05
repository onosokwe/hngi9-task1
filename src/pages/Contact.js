import React, { Component } from "react";
import Zuri from '../assets/Zuri.png';
import I4G from '../assets/I4G.png';

class Contact extends Component {
	render() {
		return (
			<div className="contact-page">
				<header style={{ width: '448px', margin: '0 auto' }}>
					<h2>Contact Me</h2>
					<p>Hi there, contact me to ask me about anything you have in mind.</p>
				</header>

				<section className="contact-section" style={{ marginBottom: 55 }}>
					<form>
						<div className="row">
							<div className="col-md-6">
								<label>First Name</label>
								<input type="text"
									className="form-control mb-3"
									placeholder="Enter your first name"
									id='first_name' />
							</div>
							<div className="col-md-6">
								<label>Last Name</label>
								<input
									type="text"
									className="form-control mb-3"
									placeholder="Enter your last name"
									id='last_name' />
							</div>
						</div>
						<div className="col-md-12">
							<label>Email</label>
							<input
								type="email"
								className="form-control mb-3"
								placeholder="yourname@email.com"
								id='email' />
						</div>
						<div className="col-md-12">
							<label>Message</label>
							<textarea
								className="form-control mb-3"
								rows="3"
								cols="33"
								placeholder="Send me a message and I'll reply as soon as possible"
								id="message">
							</textarea>
						</div>
						<div className="col-md-12 mb-3">
							<label>
								<input type="checkbox" value="YES" />
								You agree to providing your data to Andrew who may contact you.
							</label>
						</div>

						<button
							className="btn btn-block btn-success"
							type="submit"
							id="btn_submit">Send message
						</button>

					</form>

				</section>

				<section className="container text-center">
					<div className="row">
						<div className="col-4">
							<img src={Zuri} className="img-fluid" style={{ height: '15px', width: 'auto' }} alt="Zuri" />
						</div>
						<div className="col-4">
							<span style={{ fontSize: '12px' }}>HNG Internship 9 Frontend Task</span>
						</div>
						<div className="col-4">
							<img src={I4G} className="img-fluid" style={{ height: '15px', width: 'auto' }} alt="Zuri" />
						</div>

					</div>
				</section>
			</div>
		)
	}
}

export default Contact;