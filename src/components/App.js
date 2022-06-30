import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Home from "./Pages/Home"
import AddAQuestion from "./Pages/Form/AddAQuestion"

function App() {
	//useState: initial FETCH from db.json's entire data
	const [questions, setQuestions] = useState([])
	//useState: random trivia pulled from questions useState
	const [trivia, setTrivia] = useState([])
	console.log("random trivia: ", trivia)
	//answer options pulled from trivia useState
	const [answerOptions, setAnswerOptions] = useState([])
	// console.log("answerOptions: ", answerOptions)
	const [filterCategory, setFilterCategory] = useState("all")
	// console.log("filterCat: ", filterCategory)
	const [qDifficulty, setQDifficulty] = useState("all")
	//======================================================================================
	useEffect(() => {
		fetch("https://phase-2-project-backend.herokuapp.com/trivia")
			.then((r) => r.json())
			.then((data) => {
        console.log("filterCategoryUseEffect: ", filterCategory)
				const filterCat = data.filter((question) => {
					if (filterCategory === "all") {
						return question
					} else {
						return question.category === filterCategory
					}
				})

        const filterDiff = filterCat.filter((question) => {
          if (qDifficulty === "all") {
            return question
          } else {
            return question.difficulty === qDifficulty
          }
        })

				const randomTrivia =
        filterDiff[Math.floor(Math.random() * filterDiff.length)]
				setTrivia(randomTrivia)


				const options = []
				options.push(randomTrivia.correct_answer)
				for (const a of Object.entries(randomTrivia)) {
					if (a[0] === "incorrect_answers") {
						options.push(...a[1])
					}
				}
				setAnswerOptions(shuffleArray(options))
				setQuestions(filterDiff)
			})
	}, [filterCategory, qDifficulty])

	//"The Fisher-Yates algorithm" - Shuffling elements in array. Copied from the web
	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			const temp = array[i]
			array[i] = array[j]
			array[j] = temp
		}
		return array
	}

	// On click New Question ===============================================================
	function onClickButton() {
		const randomTrivia =
			questions[Math.floor(Math.random() * questions.length)]
		setTrivia(randomTrivia)

		const options = []
		options.push(randomTrivia.correct_answer)
		for (const a of Object.entries(randomTrivia)) {
			if (a[0] === "incorrect_answers") {
				options.push(...a[1])
			}}
		setAnswerOptions(shuffleArray(options))
	}

	function changeCategory(e) {
		setFilterCategory(e.target.value)
	}

  function changeDifficulty(e) {
    setQDifficulty(e.target.value)
  }

	return (
		<div className="App position-relative">
			<Navbar color="black" title="Random Trivia Questions" />
			<Routes>
				<Route
					exact path="/" element={
						<Home
							onClickButton={onClickButton}
							trivia={trivia}
							answerOptions={answerOptions}
							changeCategory={changeCategory}
              changeDifficulty={changeDifficulty}
						/>
					} />
				<Route exact path="/add-a-question" element={<AddAQuestion />} />
			</Routes>
		</div>
	)
}

export default App
