import React from "react"

//Assets
import Cover from "../assets/clothes.jpg"

const Home = () => {
	return (
		<div className='hero'>
			<div className='card bg-dark text-white'>
				<img
					src={Cover}
					className='card-img'
					alt='cover'
					height='550px'
				/>
				<div className='card-img-overlay d-flex flex-column justify-content-center'>
					<div className='container'>
						<h5 className='card-title display-3 fw-bolder mb-0'>
							Nueva Temporada
						</h5>
						<p className='card-text lead fs-2 '>
							Mira todas las tendencias
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
