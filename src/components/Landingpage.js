import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto' }}>
				<Grid className='landing-grid'>
					<Cell col={12}>
						<img src='images/4.jpg' alt='avatar' className='avatar-img' />
						<div className='banner-text'>
							<h1>Aspiring Software Developer</h1>
							<hr />
							<p>
								HTML/CSS | Bootstrap | JS | React | NodeJS | Express | MongoDB | Wordpress
							</p>
							<div className='social-links'>
								{/* LinkedIn */}
								<a
									href='https://www.linkedin.com/in/johan-swart-8575401a0/.com'
									rel='noopener noreferrer'
									target='_blank'
								>
									<i className='fa fa-linkedin-square' aria-hidden='true' />
								</a>
								{/* GitHub */}
								<a
									href='https://github.com/Johan7560'
									rel='noopener noreferrer'
									target='_blank'
								>
									<i className='fa fa-github-square' aria-hidden='true' />
								</a>
								{/* online portfolio */}
								<a
									href='https://my-portfolio-johan7560.vercel.app/'
									rel='noopener noreferrer'
									target='_blank'
								>
									<i className='fa fa-link' aria-hidden='true' />
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Landing;
