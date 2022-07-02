import React from "react"
import "./Home.css"
import Filter from "./Filter/Filter"
import Button from "react-bootstrap/Button"

function Home({
	onClickButton,
	trivia,
	answerOptions,
	changeCategory,
	changeDifficulty,
}) {
	function onClickAnswer(e) {
		const answer = e.target.textContent
		console.log("Answer is? ", answer)

		const alertPlaceholder = document.getElementById("liveAlertPlaceholder")

		if (answer !== trivia.correct_answer) {
			console.log("WRONG")

			const wrapper = document.createElement("div")
			wrapper.innerHTML = [
				`<div class="alert alert-danger alert-dismissible" role="alert">`,
				`   <div>Incorrect Answer</div>`,
				'   <button type="button" class="btn-close" data-bs-dismiss="alert" 	aria-label="Close"></button>',
				"</div>",
			].join("")
			alertPlaceholder.append(wrapper)
		} else {
			console.log("CORRECT!")
			const wrapper = document.createElement("div")
			wrapper.innerHTML = [
				`<div class="alert alert-success alert-dismissible" role="alert">`,
				`   <div>CORRECT!</div>`,
				'   <button type="button" class="btn-close" data-bs-dismiss="alert" 	aria-label="Close"></button>',
				"</div>",
			].join("")
			alertPlaceholder.append(wrapper)
		}
	}

	return (
		<div>
			<Filter
				changeCategory={changeCategory}
				changeDifficulty={changeDifficulty}
			/>
			<div className="container">
				<div className="card col-10 mx-auto">
					<h1 className="card-header display-3">Question</h1>
					<div className="card-body">
						<h6 className="card-text display-6">
							{trivia.question}
						</h6>
						<div className="title">
							<p className="card-title">
								<em>Category: {trivia.category}</em>
							</p>
							<p className="card-title">|</p>
							<p className="card-title">
								<em>Difficulty: {trivia.difficulty}</em>
							</p>
						</div>
					</div>
					<div className="card-footer">
						<div id="liveAlertPlaceholder"></div>
						<div className="row row-cols-1 row-cols-md-1">
							<div className="col">
								<h5>Select An Answer</h5>
								<div className="d-grid col-6 mx-auto">
									{answerOptions.map((answer) => (
										<Button
											variant="info"
											size="lg"
											className="answer"
											id="answerButton"
											key={answer.index}
											onClick={onClickAnswer}
										>
											{answer}
										</Button>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="d-grid col-6 mx-auto">
					<a className="btn btn-primary" onClick={onClickButton}>
						New Question
					</a>
				</div>
			</div>
		</div>
	)
}

export default Home
