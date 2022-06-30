import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Home from "./Pages/Home"
import AddAJoke from "./Pages/AddAJoke"

function App() {
	//useState: initial FETCH from db.json's entire data
	const [questions, setQuestions] = useState([])
	//useState: random trivia pulled from questions useState
	const [trivia, setTrivia] = useState([])
	//answer options pulled from trivia useState
	const [answerOptions, setAnswerOptions] = useState([])
	console.log("random trivia: ", trivia)
	console.log("answerOptions: ", answerOptions)

	//======================================================================================
	useEffect(() => {
		fetch("https://phase-2-project-backend.herokuapp.com/trivia")
			.then((r) => r.json())
			.then((d) => {
				const randomTrivia = d[Math.floor(Math.random() * d.length)]
				setTrivia(randomTrivia)
				const options = []
				options.push(randomTrivia.correct_answer)
				for (const a of Object.entries(randomTrivia)) {
					if (a[0] === "incorrect_answers") {
						options.push(...a[1])
					}
				}
				setAnswerOptions(shuffleArray(options))
				setQuestions(d)
			})
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

	//======================================================================================
	function onClickButton() {
		const randomTrivia =
			questions[Math.floor(Math.random() * questions.length)]
		setTrivia(randomTrivia)
    
    const options = []
    options.push(randomTrivia.correct_answer)
    for (const a of Object.entries(randomTrivia)) {
      if (a[0] === "incorrect_answers") {
        options.push(...a[1])
      }
    }
    
    setAnswerOptions(shuffleArray(options))
	}

  function changeCategory(e){
    console.log("category ", e.target.value)
  }

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
              changeCategory={changeCategory}
						/>
					}
				/>
				<Route exact path="/add-a-joke" element={<AddAJoke />} />
			</Routes>
		</div>
	)
}

export default App
