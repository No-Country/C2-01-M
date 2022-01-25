import React from "react"
import {StyleLoader} from "./loader.styles"

function Loader(){
	return (
		<StyleLoader>
			<div className="loader-container">
				
				<div className="lds-grid">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</StyleLoader>
	)
}

export default Loader