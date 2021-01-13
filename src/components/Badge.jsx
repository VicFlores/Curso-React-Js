import React from 'react';
import logoConf from '../img/badge-header.svg'

import './styles/Badge.css';

const Badge = ({ firstName, lastName, jobTitle, email, instagram, avatar }) => {

	return (
		<div className='Badge'>
			
			<header className='Badge__header'>
				<img src={ logoConf } alt="Logo de conferencia"/>
			</header>

			<section className='Badge__section-name'>
				<img 
					className='Badge__avatar' 
					src= { avatar } 
					alt="Avatar de usuario"/>
				<h1> { firstName } { lastName } </h1>
			</section>

			<section className='Badge__section-info'>
				<h3> { jobTitle } </h3>
				<p>Email: { email } </p>
				<p>	Instagram: @{ instagram } </p>
			</section>

			<footer className='Badge__footer'>
				<p> #PlatziConf </p>
			</footer>

		</div>
	)
}

export default Badge
