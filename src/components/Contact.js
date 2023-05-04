import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
	render() {
		return (
			<div className='contact-body'>
				<Grid className='contact-grid'>
					<Cell col={6}>
						<h2>Johan Swart</h2>
						<img
							src='images/6.jpg'
							alt='avatar'
							style={{ height: '350px', width: '250px', borderRadius: '30%' }}
						/>
						<p
							style={{
								width: '75%',
								margin: 'auto',
								paddingTop: '1em',
								fontSize: '30px'
							}}
						>
							YOU ARE <br />
							YOUR ONLY
							<br /> LIMIT.
						</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr />
						<h5>Address:</h5>
						<p>Brand Crescent 35, Bracken Heights, Brackenfell</p>
						<h5>Phone:</h5>
						<p>083 589 2078</p>
						<h5>Email:</h5>
						<p>swartjohannes13@gmail.com</p>
						<div className='contact-list'>
							<List>
								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
										<i className='fa fa-phone-square' aria-hidden='true' />
										083 589 2078
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
										<i className='fa fa-envelope' aria-hidden='true' />
										swartjohannes13@gmail.com
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
										<i className='fa fa-github' aria-hidden='true' />
										johan.swart13
									</ListItemContent>
								</ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Contact;
