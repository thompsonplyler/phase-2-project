import React, { useEffect, useState } from "react"
import "./Wall.css"
import Messages from "./Messages"

function Wall() {
	const [name, setName] = useState("")
	const [message, setMessage] = useState("")
	const [messageForm, setMessageForm] = useState([])
	const [timestamp, setTimestamp] = useState("")

	useEffect(() => {
		fetch("http://localhost:3000/messages")
			.then((r) => r.json())
			.then((d) => setMessageForm(d))
	}, [])

	function onSubmitForm(e) {
		e.preventDefault()
        document.getElementById("form").reset()
		const newMessage = {
			name: name,
			message: message,
            timestamp: timestamp,
		}
		console.log(newMessage)
		fetch("http://localhost:3000/messages", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newMessage),
		})
			.then((r) => r.json())
			.then((newMessage) => setMessageForm([...messageForm, newMessage]))
	}

	function onChangeName(e) {
		setName(e.target.value)
	}

	function onChangeMessage(e) {
		setMessage(e.target.value)
	}

    function onClickSubmit(e) {
        const currentTime = new Date();
        setTimestamp(currentTime.toString())
        console.log(typeof currentTime)
    }

	return (
		<div className="container">
			<h1 className="display-4">A Message Wall</h1>
			<form
				id="form"
				className="d-grid gap-2 align-items-center"
				onSubmit={onSubmitForm}
			>
				<div className="col-md-6">
					<label
						className="form-label col-md-4"
					>
						Name
					</label>
					<input
						required
						type="text"
						className="form-control"
						id="formGroupExampleInput"
						placeholder="or nickname"
						onChange={onChangeName}
					/>
				</div>
				<div className="col-md-8">
					<label className="form-label">
						Message
					</label>
					<textarea
						required
						type="text"
						className="form-control"
						id="formGroupExampleInput2"
						placeholder="Say Hi!"
						onChange={onChangeMessage}
					/>
				</div>
				<div>
					<input
						type="submit"
						value="Submit"
						className="btn btn-primary"
						id="liveAlertBtn"
                        onClick={onClickSubmit}
					/>
				</div>
			</form>
			<Messages messages={messageForm} timestamp={timestamp} />
		</div>
	)
}

export default Wall
