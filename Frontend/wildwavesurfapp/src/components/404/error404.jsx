import React from "react"
import {Style404} from "./error404.styles"
import image404 from "../../assets/page404.svg"

function Error404(){
	return (
		<Style404>
			<div className="404-image-container">
				<img src={image404} alt="error de página" />
			</div>
		</Style404>
	)
}

export default Error404