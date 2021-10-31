import React from "react"

//Assets
import Img from "../assets/clothes1.jpg"

const About = () => {
	return (
		<div className='card my-3'>
			<div className='row g-0'>
				<div className='col-md-4'>
					<img
						src={Img}
						className='img-fluid rounded-start'
						alt='women'
						height='200px'
					/>
				</div>
				<div className='col-md-8'>
					<div className='card-body'>
						<h5 className='card-title'>
							Acerca de D´Estilo
						</h5>
						<p className='card-text'>
							Lorem ipsum dolor sit amet,
							consectetur adipisicing elit. Dicta
							deserunt ea earum error, similique
							suscipit accusamus nesciunt. Eum,
							repellat sapiente? Culpa nulla minus
							itaque expedita exercitationem
							facere, corrupti totam quae! Lorem
							ipsum dolor sit amet, consectetur
							adipisicing elit. Dicta deserunt ea
							earum error, similique suscipit
							accusamus nesciunt. Eum, repellat
							sapiente? Culpa nulla minus itaque
							expedita exercitationem facere,
							corrupti totam quae!
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
