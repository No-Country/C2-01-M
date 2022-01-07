import React from "react"
import Style404 from "./error404.styles"

function Error404(){

	return (
		<Style404>
			<div className="404-image-container">
				<img src="/public/page404.svg" alt="error de página" />
			</div>
		</Style404>
	)
}

export default Error404