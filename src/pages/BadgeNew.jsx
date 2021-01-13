import React, { useState } from 'react';
import './styles/BadgeNew.css'
import logo from '../img/badge-header.svg';
import Badge from '../components/Badge';
import BadgeFrom from '../components/BadgeFrom'

const BadgeNew = () => {

	const [infoUser, setInfoUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		jobTitle: '',
		instagram: '',
	})

	const handleChange = ({ target }) => {
		setInfoUser({
			...infoUser,
			[target.name]: target.value
		})
	}

	return (
		<>

			<section className='BadgeNew__hero'>
				<img className='img-fluid' src={ logo } alt="Logo de héroe"/>
			</section>

			<section className='container'>
				<div className="row">

					<div className="col-6">
						<Badge
							firstName= { infoUser.firstName }
							lastName= { infoUser.lastName }
							jobTitle= { infoUser.jobTitle }
							email= { infoUser.email }
							instagram= { infoUser.instagram }
							avatar="https://es.gravatar.com/userimage/199647714/9410b4bb306a1a20fa57f2e8854838b1?size=200"
						/>
					</div>

					<div className="col-6">
						<BadgeFrom onChange= { handleChange } />
					</div>

				</div>
			</section>

		</>
	)
}

export default BadgeNew
