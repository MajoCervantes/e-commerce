import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Navbar = () => {
	const state = useSelector(
		(state) => state.handleCart
	)

	// console.log(state.map((p) => p.qty))

	return (
		<>
			<nav class='navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm bg-white'>
				<div class='container'>
					<Link
						class='navbar-brand fw-bold fs-4'
						to='/'>
						D’Estilo
					</Link>
					<button
						class='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div
						class='collapse navbar-collapse'
						id='navbarSupportedContent'>
						<ul class='navbar-nav mx-auto mb-2 mb-lg-0'>
							<li class='nav-item'>
								<Link
									class='nav-link active'
									aria-current='page'
									to='/'>
									Inicio
								</Link>
							</li>
							<li class='nav-item'>
								<Link
									class='nav-link'
									to='/products'>
									Productos
								</Link>
							</li>
							<li class='nav-item'>
								<Link
									class='nav-link'
									to='/about'>
									Acerca
								</Link>
							</li>
							<li class='nav-item'>
								<Link
									class='nav-link'
									to='/contact'>
									Contacto
								</Link>
							</li>
						</ul>
						<div className='buttons'>
							<Link
								to='/favs'
								className='btn btn-outline-dark mx-2'>
								{" "}
								<i className='fa fa-heart me-1'></i>{" "}
								Favoritos
							</Link>
							<Link
								to='/cart'
								className='btn btn-outline-dark mx-2'>
								{" "}
								<i className='fa fa-shopping-cart ms-2'></i>{" "}
								Carrito ({state.length})
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
