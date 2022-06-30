import React, { useState } from "react"
import "./home.css"
import Filter from "./Filter/Filter"
import Button from "react-bootstrap/Button"
// import { Card } from "react-bootstrap"

function Home({
	onClickButton,
	trivia,
	answerOptions,
	changeCategory,
	changeDifficulty,
}) {
	return (
		<div>
			<Filter
				changeCategory={changeCategory}
				changeDifficulty={changeDifficulty}
			/>
			<div className="container">
				<div className="card">
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
						<div className="row row-cols-1 row-cols-md-1">
							<div className="col">
								<h5>Select Answer</h5>
								{answerOptions.map((answer) => (
									<Button
										variant="info"
										size="lg"
										className="answer"
                                        key={answer.id}
									>
										{answer}
									</Button>
								))}
							</div>
						</div>
					</div>
				</div>
				<a className="btn btn-primary" onClick={onClickButton}>
					New Question
				</a>
			</div>
		</div>
	)
}

export default Home
