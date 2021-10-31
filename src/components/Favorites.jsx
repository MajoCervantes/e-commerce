import React from "react"
import {
	useSelector,
	useDispatch,
} from "react-redux"
import { Link } from "react-router-dom"
import { delFavs } from "../redux/actions/actions"

const Favorites = () => {
	const state = useSelector(
		(state) => state.handleFavs
	)
	const dispatch = useDispatch()

	const handleDel = (item) => {
		dispatch(delFavs(item))
	}
	const emptyFavs = () => {
		return (
			<div className='px-4 my-5 bg-light rounded-3 py-5'>
				<div className='container py-4'>
					<div className='row text-center'>
						<h3>Your Favs Are Empty</h3>
					</div>
				</div>
			</div>
		)
	}

	console.log(state)
	const favItems = (product) => {
		return (
			<>
				<div className='px-4 my-5 bg-light roundd-3'>
					<div className='container py-4'>
						<div className='row justify-content-center'>
							<div className='col-md-4'>
								<img
									src={product.image}
									alt={product.title}
									width='180px'
									height='200px'
								/>
							</div>
							<div className='col-md-4'>
								<h3>{product.title}</h3>
								<p className='lead fw-bold'>
									${product.price}
								</p>
								<button
									className='btn btn outline-dark me-4'
									onClick={() =>
										handleDel(product)
									}>
									<i className='fa fa-trash-o'></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}

	return (
		<div>
			<div className='container d-flex justify-content-center'>
				<div className='row'>
					{state.length === 0 && emptyFavs()}
					{state.length !== 0 &&
						state.map(favItems)}

					<Link
						to='/products'
						className='btn btn-outline-dark  w-25 mx-auto'>
						Back
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Favorites
