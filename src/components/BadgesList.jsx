import React from 'react';
import './styles/Badge.css';

const BadgesList = ({ badges }) => {
	return (
		<>
			{ badges.map(info => {
					return (
						<div key={ info.id } className='List__position'>

							<img src={ info.avatarUrl } alt="avatarUrl"/>

							<ul className="list-unstyled">
							<li>
								Name: { info.firstName } { info.lastName } <br/>
								Job: { info.jobTitle } <br/>
								Instagram: @{ info.instagram }
							</li>
							</ul>

						</div>
					)
			})}

		</>
	)
}

export default BadgesList
