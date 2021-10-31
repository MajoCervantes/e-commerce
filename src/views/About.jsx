import React from "react"

//Assets
import Img from "../assets/clothes1.jpg"

const About = () => {
	return (
		<div class='card my-3'>
			<div class='row g-0'>
				<div class='col-md-4'>
					<img
						src={Img}
						class='img-fluid rounded-start'
						alt='women'
						height='200px'
					/>
				</div>
				<div class='col-md-8'>
					<div class='card-body'>
						<h5 class='card-title'>
							Acerca de D´Estilo
						</h5>
						<p class='card-text'>
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
