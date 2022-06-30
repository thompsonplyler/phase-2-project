import React from "react"

function AddAQuestion() {
	return (
		<div className="container">
			<h1 className="display-4">Add a question</h1>
			<form className="container row g-3 align-items-center">
				<div className="md-3">
					<label className="label form-label">Category</label>
					<select required
						className="form-select"
						// onChange={selectCategory}
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
					<select required
						className="form-select"
						// onChange={selectDifficulty}
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
						className="form-control"
						placeholder="Type Question Here"
						// onChange={newQuestion}
					/>
				</div>

				<div className="mb-3">
					<label className="form-label">Answers</label>
					<input
						type="email"
						className="form-control"
						placeholder="Correct Answer"
						// onChange={newCorrectAnswer}
					/>
					<input
						type="email"
						className="form-control"
						placeholder="Incorrect Answer"
						// onChange={newIncorrectAnswer}
					/>
					<input
						type="email"
						className="form-control"
						placeholder="Incorrect Answer (optional)"
						// onChange={newIncorrectAnswer}
					/>
					<input
						type="email"
						className="form-control"
						placeholder="Incorrect Answer (optional)"
						// onChange={newIncorrectAnswer}
					/>
				</div>
			</form>
		</div>
	)
}

export default AddAQuestion
