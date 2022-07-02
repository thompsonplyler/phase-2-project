import React from "react"
import "./Filter.css"

function Filter({ changeCategory, changeDifficulty }) {
	return (
		<div className="filter container">
            <div className="col-10 mx-auto">
			<label className="h4">Filter Questions</label>
			<select
			 	id="category"
				className="col-6 "
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
                id="difficulty"
				className="col-2"
				aria-label="Default select example"
                onChange={changeDifficulty}
			>
				<option value="all">Difficulty</option>
				<option value="easy">Easy</option>
				<option value="medium">Medium</option>
				<option value="hard">Hard</option>
			</select>
            </div>
		</div>
	)
}

export default Filter
