/* eslint-disable no-unused-vars */
import React from 'react'

const BadgeFrom = ({ onChange }) => {

	const handleClick = e => {
		console.log('Button was clicked');
	}

	const handleSubmit = e => {
		e.preventDefault(); /* Evita que el botón haga recargar la pagina */
		console.log('Button was submitted');
		console.log(onChange);
	}

	return (
		<>

			<h1>New Attendant</h1>

			<form onSubmit={handleSubmit}>

				<div className="form-group">
					<label>First Name</label>
					<input 
						onChange={onChange} 
						className='form-control' 
						type="text" name="firstName"
						value={onChange.firstName}
					/>
					{/* onChange para leer eventos en el input */}
				</div>
	
				<div className="form-group">
					<label>Last Name</label>
					<input 
						onChange={onChange} 
						className='form-control' 
						type="text" name="lastName"
						value={onChange.lastName}
					/>
					{/* onChange para leer eventos en el input */}
				</div>

				<div className="form-group">
					<label>Job title</label>
					<input 
						onChange={onChange} 
						className='form-control' 
						type="text" name="jobTitle"
						value={onChange.jobTitle}
					/>
					{/* onChange para leer eventos en el input */}
				</div>

				<div className="form-group">
					<label>Email</label>
					<input 
						onChange={onChange} 
						className='form-control' 
						type="email" name="email"
						value={onChange.email}
					/>
					{/* onChange para leer eventos en el input */}
				</div>

				<div className="form-group">
					<label>Instagram</label>
					<input 
						onChange={onChange} 
						className='form-control' 
						type="text" name="instagram"
						value={onChange.instagram}
					/>
					{/* onChange para leer eventos en el input */}
				</div>

				<button 
					/* type='button'	Por defecto es tipo: Submit y hace que la pagina recargue */
					onClick={handleClick} 
					className="btn btn-primary"
				>
					Save
				</button>
			</form>

		</>
	)
}

export default BadgeFrom
