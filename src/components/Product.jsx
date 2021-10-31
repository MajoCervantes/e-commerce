import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { addCart } from "../redux/actions/actions"
import { addFavs } from "../redux/actions/actions"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import Skeleton from "react-loading-skeleton"

const Product = () => {
	const { id } = useParams()
	const [product, setProduct] = useState([])
	const [loader, setLoader] = useState(false)

	const dispatch = useDispatch()

	const addProduct = (product) => {
		dispatch(addCart(product))
	}

	const addFavorites = (product) => {
		dispatch(addFavs(product))
	}

	useEffect(() => {
		const getProduct = async () => {
			setLoader(true)
			const response = await fetch(
				`https://fakestoreapi.com/products/${id}`
			)
			const result = await response.json()
			setProduct(result)
			setLoader(false)
		}
		getProduct()
	}, [id])

	const Loader = () => {
		return (
			<>
				<div className='col-md-5'>
					<Skeleton height={400} />
				</div>
				<div
					className='col-md-6'
					style={{ lineHeight: 2 }}>
					<Skeleton height={50} width={300} />
					<Skeleton height={75} />
					<Skeleton height={25} width={150} />
					<Skeleton height={50} />
					<Skeleton height={150} />
					<Skeleton height={50} width={100} />
					<Skeleton
						height={50}
						width={100}
						style={{ marginLeft: 6 }}
					/>
				</div>
			</>
		)
	}

	const ShowProduct = () => {
		return (
			<>
				<div className='col-md-6'>
					<img
						src={product.image}
						alt={product.title}
						height='400px'
						width='400px'
					/>
				</div>
				<div className='col-md-6'>
					<h4 className='text.uppercase text-black-50'>
						{product.category}
					</h4>
					<h1 className='display-5'>
						{product.title}
					</h1>
					<p className='lead fw-bolder'>
						Rating{" "}
						{product.rating &&
							product.rating.rate}
						<i className='fa fa-star'></i>
					</p>
					<h3 className='display-6 fw-bold my-4 '>
						$ {product.price}
					</h3>
					<p className='lead'>
						{product.description}
					</p>
					<button
						className='btn btn-outline-dark px-4 py-2'
						onClick={() => addProduct(product)}>
						Add to Cart
					</button>
					<Link
						to='/cart'
						className='btn btn-dark ms-2 px-3 py-2'>
						Go to Cart
					</Link>
					<button
						className='btn btn-outline-dark px-4 py-2 ms-2'
						onClick={() => addFavorites(product)}>
						<i className='fa fa-heart '></i>
					</button>
				</div>
			</>
		)
	}

	return (
		<div>
			<div className='container py-5'>
				<div className='row py-4'>
					{loader ? <Loader /> : <ShowProduct />}
				</div>
			</div>
		</div>
	)
}

export default Product
