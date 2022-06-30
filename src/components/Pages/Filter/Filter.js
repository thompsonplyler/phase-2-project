import React from "react"

function Filter({ changeCategory }) {
	return (
		<div className="container">
			<h5>Filter Questions</h5>
			<select
				className="g-col-6 g-col-md-4 form-select-sm"
				aria-label="Default select example"
                onChange={changeCategory}
			>
				<option value="all">Category</option>
				<option value="general">General</option>
				<option value="animals">Animals</option>
				<option value="celebrities">Celebrities</option>
				<option value="cartoon">
					Entertainment: Cartoon & Animation
				</option>
				<option value="comics">Entertainment: Comics</option>
				<option value="film">Entertainment: Film</option>
				<option value="anime">
					Entertainment: Japanese Anime & Manga
				</option>
				<option value="music">Entertainment: Music</option>
				<option value="television">Entertainment: Television</option>
				<option value="games">Entertainment: Video Games</option>
				<option value="history">History</option>
				<option value="science">Science & Nature</option>
				<option value="computers">Science & Computers</option>
				<option value="sports">Sports</option>
			</select>
			<select
				className="g-col-6 g-col-md-4 form-select-sm"
				aria-label="Default select example"
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
