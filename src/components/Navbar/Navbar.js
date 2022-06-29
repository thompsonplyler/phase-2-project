import React from "react"

function Navbar({ title }) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					{title}
				</a>
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
						<a
							className="nav-link active"
							aria-current="page"
							href="#"
						>
							Home
						</a>
					</div>
					<div className="navbar-nav">
						<a
							className="nav-link active"
							aria-current="page"
							href="#"
						>
							Add A Question
						</a>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
