import React from "react"

const Contact = () => {
	return (
		<form className='w-50 mx-auto my-5'>
			<div class='mb-3'>
				<label
					for='exampleInputEmail1'
					class='form-label'>
					Escríbenos
				</label>
				<input
					type='text'
					class='btn btn-outline-dark'
					style={{
						height: "100px",
						width: "100%",
					}}
					id='exampleInputEmail1'
					aria-describedby='emailHelp'
				/>
			</div>
			<div class='mb-3'>
				<label
					for='exampleInputPassword1'
					class='form-label'>
					Correo
				</label>
				<input
					type='email'
					class='btn btn-outline-dark'
					id='exampleInputPassword1'
					style={{ width: "100%" }}
				/>
				<div id='emailHelp' class='form-text'>
					Nunca compartiremos tu correo con nadie
				</div>
			</div>

			<button
				type='submit'
				class='btn btn-outline-dark'>
				Submit
			</button>
		</form>
	)
}

export default Contact
