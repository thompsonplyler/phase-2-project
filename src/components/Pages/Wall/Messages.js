import React from "react"

function Messages({ messages }) {
	return (
		<div className="messages col-sm-8 g-4">
      <div class="col">
			{messages.map((data) => (
				<div className="card" key={data.id}>
					<div className="card-body">
						<h5 className="card-title">{data.name}</h5>
						<h6 className="card-subtitle mb-2 text timestamp">
							{data.timestamp}
						</h6>
						<p className="card-text">{data.message}</p>
					</div>
				</div>
			))}
      </div>
		</div>
	)
}

export default Messages
