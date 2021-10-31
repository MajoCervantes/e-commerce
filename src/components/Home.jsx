import React from "react"

//Assets
import Cover from "../assets/clothes.jpg"

const Home = () => {
	return (
		<div className='hero'>
			<div class='card bg-dark text-white'>
				<img
					src={Cover}
					class='card-img'
					alt='...'
					height='550px'
				/>
				<div class='card-img-overlay d-flex flex-column justify-content-center'>
					<div className='container'>
						<h5 class='card-title display-3 fw-bolder mb-0'>
							New Season Arrivals
						</h5>
						<p class='card-text lead fs-2 '>
							Check out all the trends
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
