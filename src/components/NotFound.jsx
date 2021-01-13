import React from 'react';
import error from '../img/404 Error-bro.svg';
import './styles/NotFound.css'

const NotFound = () => {
	return (
		<figure className='notFound'>
			<img src={ error } alt=""/>
		</figure>
	)
}

export default NotFound
