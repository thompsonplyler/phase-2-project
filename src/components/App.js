import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Home from "./Pages/Home"
import AddAJoke from "./Pages/AddAJoke"

function App() {
	const [questions, setQuestions] = useState({})
	const [trivia, setTrivia] = useState([])
	const [answerOptions, setAnswerOptions] = useState([])
	console.log("random trivia: ", trivia)
	const randomTrivia = questions[Math.floor(Math.random() * questions.length)]
	const options = []
  options.push(trivia.correct_answer)
  for (const a of Object.entries(trivia)) {
    if (a[0] === "incorrect_answers") {
      options.push(...a[1])
    }
  }

	useEffect(() => {
		fetch("https://phase-2-project-backend.herokuapp.com/trivia")
			.then((r) => r.json())
			.then((d) => setQuestions(d))
	}, [])

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

  const shuffled = shuffleArray(options)

	function onClickButton() {
		setTrivia(randomTrivia)
		setAnswerOptions(shuffled)
	}
  console.log("options ", options)
  console.log("shuffled ", shuffled)
  console.log("options on click: ", answerOptions)

	return (
		<div className="App position-relative">
			<Navbar color="black" title="Random Trivia Questions" />
			<Routes>
				<Route
					exact
					path="/"
					element={
						<Home
							onClickButton={onClickButton}
							trivia={trivia}
							answerOptions={answerOptions}
						/>
					}
				/>
				<Route exact path="/add-a-joke" element={<AddAJoke />} />
			</Routes>
		</div>
	)
}

export default App
