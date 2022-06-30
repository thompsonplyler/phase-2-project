import React from "react"

function Filter({ changeCategory, changeDifficulty }) {
	return (
		<div className="container">
			<h5>Filter Questions</h5>
			<select
				className="g-col-6 g-col-md-4 form-select-sm"
				aria-label="Default select example"
                onChange={changeCategory}
			>
				<option value="all">Category</option>
				<option value="General Knowledge">General Knowledge</option>
				<option value="Animals">Animals</option>
				<option value="Celebrities">Celebrities</option>
				<option value="Entertainment: Cartoon & Animations">
					Entertainment: Cartoon & Animations
				</option>
				<option value="Entertainment: Comics">Entertainment: Comics</option>
				<option value="Entertainment: Film">Entertainment: Film</option>
				<option value="Entertainment: Japanese Anime & Manga">
					Entertainment: Japanese Anime & Manga
				</option>
				<option value="Entertainment: Music">Entertainment: Music</option>
				<option value="Entertainment: Television">Entertainment: Television</option>
				<option value="Entertainment: Video Games">Entertainment: Video Games</option>
				<option value="History">History</option>
				<option value="Science: Computers">Science: Computers</option>
				<option value="Science & Nature">Science & Nature</option>
				<option value="Sports">Sports</option>
			</select>
			<select
				className="g-col-6 g-col-md-4 form-select-sm"
				aria-label="Default select example"
                onChange={changeDifficulty}
			>
				<option value="all">Difficulty</option>
				<option value="easy">Easy</option>
				<option value="medium">Medium</option>
				<option value="hard">Hard</option>
			</select>
		</div>
	)
}

export default Filter
