/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BadgesList from '../components/BadgesList';
import logo from '../img/badge-header.svg';
import './styles/Badges.css';

const Badges = () => {

	const [data, setData] = useState([])

	setTimeout(() => {
		
		setData([
			{
				id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
				firstName: "Vic",
				lastName: "Flores",
				email: "vicflores2211@gmail.com",
				jobTitle: "Legacy Brand Director",
				instagram: "vic_flores11",
				avatarUrl: "https://es.gravatar.com/userimage/199647714/9410b4bb306a1a20fa57f2e8854838b1?size=200"
			},
			{
				id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
				firstName: "Madeleyne",
				lastName: "Cañada",
				email: "Madeleyne@hotmail.com",
				jobTitle: "Human Research Architect",
				instagram: "Made89",
				avatarUrl: "https://es.gravatar.com/userimage/199647714/9cd3c3de5c4bdafe63e36384e65f91cc.jpg"
			},
			{
				id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
				firstName: "Alicia",
				lastName: "Paz",
				email: "Alicia@hotmail.com",
				jobTitle: "National Markets Officer",
				instagram: "SnFlower34",
				avatarUrl: "https://es.gravatar.com/userimage/199647714/0b3471f4e70eb53f65922402d201688a.jpg"
			}
		])
	}, 3000);

	return (
		<>

		<section className='Badges'>
			<div className="Badges__hero">
				<div className="Badges__container">
					<img className='Badges_conf-logo' src={ logo } alt="Conf logo"/>
				</div>
			</div>
		</section>

		<section className="Badges__container">

			<div className="Badges__buttons">
				<Link to="/Badge/new" className="btn btn-primary">
					New Badge
				</Link>
			</div>

			<div className="Badges__list">
				<div className="Badges__container">
					<BadgesList badges={data} />
				</div>
			</div>

		</section>

		</>
	)
}

export default Badges
