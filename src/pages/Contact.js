import React, { Component } from "react";

class Contact extends Component {
	render() {
		return (
			<div className="contact-page">
				<header>
					<h2>Contact Me</h2>
					<p>Hi there, contact me to ask me about anything you have in mind.</p>
				</header>

				<section className="contact-section">
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
			</div>
		)
	}
}

export default Contact;