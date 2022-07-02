import React, { useState } from "react"
import "./AddAQuestion.css"

function AddAQuestion({ onAddAQuestion }) {
	const [newCategory, setNewCategory] = useState("")
	const [newDifficulty, setNewDifficulty] = useState("")
	const [newQuestion, setNewQuestion] = useState("")
	const [newCorrectAnswer, setNewCorrectAnswer] = useState("")
	const [newIncorrectAnswers1, setNewIncorrectAnswers1] = useState("")
	const [newIncorrectAnswers2, setNewIncorrectAnswers2] = useState("")
	const [newIncorrectAnswers3, setNewIncorrectAnswers3] = useState("")

	function onSubmitForm(e) {
		e.preventDefault()
		document.getElementById("form").reset()
		const newTrivia = {
			category: newCategory,
			difficulty: newDifficulty,
			questions: newQuestion,
			correct_answer: newCorrectAnswer,
			incorrect_answers: [
				newIncorrectAnswers1,
				newIncorrectAnswers2,
				newIncorrectAnswers3,
			],
		}
		console.log("New Question Form: ", newTrivia)
		fetch("https://phase-2-project-backend.herokuapp.com/trivia", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newTrivia),
		})
			.then((r) => r.json())
			.then((newQuestionForm) => onAddAQuestion(newQuestionForm))

			//--------Alert on submit a new question--------------------
			const alertPlaceholder = document.getElementById("liveAlertPlaceholder")
			const wrapper = document.createElement("div")
			wrapper.innerHTML = [
				`<div class="alert alert-success alert-dismissible" role="alert">`,
				`   <div>New Question Submitted</div>`,
				'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
				"</div>",
			].join("")
			alertPlaceholder.append(wrapper)
	}

	function selectCategory(e) {
		setNewCategory(e.target.value)
	}

	function selectDifficulty(e) {
		setNewDifficulty(e.target.value)
	}

	function newQuestionForm(e) {
		setNewQuestion(e.target.value)
	}

	function newCorrectAnswerForm(e) {
		setNewCorrectAnswer(e.target.value)
	}

	function newIncorrectAnswersForm1(e) {
		setNewIncorrectAnswers1(e.target.value)
	}

	function newIncorrectAnswersForm2(e) {
		setNewIncorrectAnswers2(e.target.value)
	}

	function newIncorrectAnswersForm3(e) {
		setNewIncorrectAnswers3(e.target.value)
	}

	return (
		<div className="container">
			<div id="liveAlertPlaceholder"></div>
			<h1 className="display-4">Add a question</h1>
			<form
				id="form"
				className="d-grid gap-3 align-items-center"
				onSubmit={onSubmitForm}
			>
				<div className="md-3">
					<label className="label form-label">Category</label>
					<select
						required
						className="form-select"
						onChange={selectCategory}
					>
						<option value=""></option>
						<option value="General Knowledge">
							General Knowledge
						</option>
						<option value="Animals">Animals</option>
						<option value="Celebrities">Celebrities</option>
						<option value="Entertainment: Cartoon & Animations">
							Entertainment: Cartoon & Animations
						</option>
						<option value="Entertainment: Comics">
							Entertainment: Comics
						</option>
						<option value="Entertainment: Film">
							Entertainment: Film
						</option>
						<option value="Entertainment: Japanese Anime & Manga">
							Entertainment: Japanese Anime & Manga
						</option>
						<option value="Entertainment: Music">
							Entertainment: Music
						</option>
						<option value="Entertainment: Television">
							Entertainment: Television
						</option>
						<option value="Entertainment: Video Games">
							Entertainment: Video Games
						</option>
						<option value="History">History</option>
						<option value="Science: Computers">
							Science: Computers
						</option>
						<option value="Science & Nature">
							Science & Nature
						</option>
						<option value="Sports"> Sports </option>
					</select>
				</div>
				<div className="md-3">
					<label className="label form-label">Difficulty</label>
					<select
						required
						className="form-select"
						onChange={selectDifficulty}
					>
						<option value=""></option>
						<option value="easy">Easy</option>
						<option value="medium">Medium</option>
						<option value="hard">Hard</option>
					</select>
				</div>

				<div className="mb-3">
					<label className="form-label">Question</label>
					<textarea
						required
						className="form-control"
						placeholder="Type Question Here"
						onChange={newQuestionForm}
					/>
				</div>

				<div className="mb-3">
					<label className="form-label">Answers</label>
					<input
						required
						type="text"
						className="form-control"
						placeholder="Correct Answer"
						onChange={newCorrectAnswerForm}
					/>
					<input
						required
						type="text"
						className="form-control"
						placeholder="Incorrect Answer"
						onChange={newIncorrectAnswersForm1}
					/>
					<input
						type="text"
						className="form-control"
						placeholder="Incorrect Answer (optional)"
						onChange={newIncorrectAnswersForm2}
					/>
					<input
						type="text"
						className="form-control"
						placeholder="Incorrect Answer (optional)"
						onChange={newIncorrectAnswersForm3}
					/>
				</div>
				<input
					type="submit"
					value="Submit"
					className="btn btn-primary"
					id="liveAlertBtn"
				/>
			</form>
		</div>
	)
}

export default AddAQuestion
