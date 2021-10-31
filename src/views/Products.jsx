import React, { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import { Link } from "react-router-dom"

const Products = () => {
	const [data, setData] = useState([])
	const [filter, setFilter] = useState(data)
	const [loader, setLoader] = useState(false)

	let ComponentMounted = true

	useEffect(() => {
		const getProducts = async () => {
			setLoader(true)
			const response = await fetch(
				"https://fakestoreapi.com/products"
			)
			if (ComponentMounted) {
				setData(await response.clone().json())
				setFilter(await response.json())
				setLoader(false)
			}
			return () => {
				ComponentMounted = false
			}
		}
		getProducts()
	}, [])

	const Loader = () => {
		return (
			<>
				<div class='spinner-border' role='status'>
					<span class='visually-hidden'>
						Loading...
					</span>
				</div>
			</>
		)
	}

	const filterProduct = (cat) => {
		const updateList = data.filter(
			(x) => x.category === cat
		)
		setFilter(updateList)
	}

	const ShowProducts = () => {
		return (
			<>
				<div className='buttons d-flex justify-content-center mb-5 pb-5'>
					<button
						className='btn btn-outline-dark me-2'
						onClick={() => setFilter(data)}>
						Todo
					</button>
					<button
						className='btn btn-outline-dark me-2'
						onClick={() =>
							filterProduct("men's clothing")
						}>
						Caballero
					</button>
					<button
						className='btn btn-outline-dark me-2'
						onClick={() =>
							filterProduct("women's clothing")
						}>
						Dama
					</button>
					<button
						className='btn btn-outline-dark me-2'
						onClick={() =>
							filterProduct("jewelery")
						}>
						Joyería
					</button>
					<button
						className='btn btn-outline-dark me-2'
						onClick={() =>
							filterProduct("electronics")
						}>
						Electronicos
					</button>
				</div>
				{filter.map((product) => {
					return (
						<>
							<div className='col-md-3 mb-4'>
								<div
									class='card h-100 text-center p-4'
									key={product.id}>
									<img
										src={product.image}
										class='card-img-top'
										alt={product.title}
										height='250px'
									/>
									<div class='card-body'>
										<h5 class='card-title mb-0'>
											{product.title.substring(
												0,
												12
											)}
											...
										</h5>
										<p class='card-text lead fw-bold'>
											${product.price}
										</p>

										<Link
											to={`/products/${product.id}`}
											class='btn btn-outline-dark w-80'>
											Ver Más
										</Link>
									</div>
								</div>
							</div>
						</>
					)
				})}
			</>
		)
	}

	return (
		<div>
			<div className='container my-5 py-5'>
				<div className='row'>
					<div className='col-12 mb-5'>
						<h1 className='display-6 fw-bolder text-center'>
							Últimos productos
						</h1>
						<hr />
					</div>
				</div>
				<div className='row justify-content-center'>
					{loader ? <Loader /> : <ShowProducts />}
				</div>
			</div>
		</div>
	)
}

export default Products
