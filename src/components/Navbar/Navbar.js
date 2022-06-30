import React from "react"
import { NavLink } from "react-router-dom"

function Navbar({ title }) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container-fluid">
				<NavLink to="/" className="navbar-brand" href="#">
					{title}
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<div className="navbar-nav">
						<NavLink
							to="/"
							exact
							className="nav-link active"
							aria-current="page"
							href="#"
						>
							Home
						</NavLink>
					</div>
					<div className="navbar-nav">
						<NavLink
							to="/add-a-question"
							exact
							className="nav-link active"
							aria-current="page"
							href="#"
						>
							Add A Question
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
