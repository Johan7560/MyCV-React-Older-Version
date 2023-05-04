import React, { Component } from 'react';
import {
	Tabs,
	Tab,
	Grid,
	Cell,
	Card,
	CardTitle,
	CardText,
	CardActions,
	Button,
	CardMenu,
	IconButton
} from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}

	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<div className='projects-grid'>
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '196px',
								background:
									'url(https://images.unsplash.com/photo-1620336655071-6b2ea4272b15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80) center / cover'
							}}
						>
							Yu-Gi-Oh | Website
						</CardTitle>
						<CardText>
							Worked on making Agora’s Web Based SDK more accessible through video
							tutorials, articles, demo projects and event based training. Also building
							out React UI components & leading a team to re-design Agora’s documentation
							and api reference.
						</CardText>
						<CardActions border>
							<Button style={{ marginLeft: '110px' }} colored>
								<a
									href='http://yu-gi-oh-website.vercel.app/'
									rel='noopener noreferrer'
									target='_blank'
								>
									View
								</a>
							</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '196px',
								background:
									'url(https://images.unsplash.com/photo-1519162721257-18cd195350c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80) center / cover'
							}}
						>
							SignUp_V1 | Application
						</CardTitle>
						<CardText>
							My own personal project where I designed a basic SignUp application with a
							NoSQL database.
						</CardText>
						<CardActions border>
							<Button style={{ marginLeft: '110px' }} colored>
								<a
									href='https://web-production-bb5c.up.railway.app/'
									rel='noopener noreferrer'
									target='_blank'
								>
									View
								</a>
							</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '196px',
								background:
									'url(https://images.unsplash.com/photo-1583248483203-555f3d850303?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80) center / cover'
							}}
						>
							BIC | Website
						</CardTitle>
						<CardText>
							Worked on making Agora’s Web Based SDK more accessible through video
							tutorials, articles, demo projects and event based training. Also building
							out React UI components & leading a team to re-design Agora’s documentation
							and api reference.
						</CardText>
						<CardActions border>
							<Button style={{ marginLeft: '110px' }} colored>
								<a
									href='https://1st-web-design-client-v1.vercel.app/'
									rel='noopener noreferrer'
									target='_blank'
								>
									View
								</a>
							</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 1) {
			return (
				<div className='projects-grid'>
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '196px',
								background:
									'url(https://images.unsplash.com/photo-1593693846836-86921cc9fd08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1439&q=80) center / cover'
							}}
						>
							PokeDexV2 | App
						</CardTitle>
						<CardText>
							PokeDex App App is best viewed only in desktop mode. Was one of my first
							designs and did not make it for mobile device responsiveness as my focus was
							just to start very basic and raw and see how I can develop this Pokedex.
						</CardText>
						<CardActions border>
							<Button style={{ marginLeft: '110px' }} colored>
								<a
									href='http://pokedex-v2-eight.vercel.app/'
									rel='noopener noreferrer'
									target='_blank'
								>
									View
								</a>
							</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '196px',
								background:
									'url(https://images.unsplash.com/photo-1570912355338-cdb934b76b12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=737&q=80) center / cover'
							}}
						>
							Firewall Breach | App
						</CardTitle>
						<CardText>
							Just a simple HTML & CSS where I played around using three.js, gimp for
							image manipulation and designed this basic alert app.
						</CardText>
						<CardActions border>
							<Button style={{ marginLeft: '110px' }} colored>
								<a
									href='https://firewall-breach-alert.vercel.app/'
									rel='noopener noreferrer'
									target='_blank'
								>
									View
								</a>
							</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '196px',
								background:
									'url(https://images.unsplash.com/photo-1634224143538-ce0221abf732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80) center / cover'
							}}
						>
							Password-Gen | App
						</CardTitle>
						<CardText>
							Personal project. App that generates a password for a user and you can also
							define the password to your liking. I'm a self-taught developer.
						</CardText>
						<CardActions border>
							<Button style={{ marginLeft: '110px' }} colored>
								<a
									href='http://password-generator-johan7560.vercel.app/'
									rel='noopener noreferrer'
									target='_blank'
								>
									View
								</a>
							</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 2) {
			return (
				<div className='projects-grid'>
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'
							}}
						>
							React Project #1
						</CardTitle>
						<CardText>Showing of my skills using React.</CardText>
						<CardActions border>
							<Button style={{ marginLeft: '110px' }} colored>
								<a
									href='https://github.com/Johan7560/React-.git'
									rel='noopener noreferrer'
									target='_blank'
								>
									GitHub
								</a>
							</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'
							}}
						>
							React Project #2
						</CardTitle>
						<CardText>Another React task to show what I am made of.</CardText>
						<CardActions border>
							<Button style={{ marginLeft: '110px' }} colored>
								<a
									href='https://github.com/Johan7560/React2.git'
									rel='noopener noreferrer'
									target='_blank'
								>
									GitHub
								</a>
							</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'
							}}
						>
							React Project #3
						</CardTitle>
						<CardText>React task to give you a taste of my work.</CardText>
						<CardActions border>
							<Button style={{ marginLeft: '110px' }} colored>
								<a
									href='https://github.com/Johan7560/React-3.git'
									rel='noopener noreferrer'
									target='_blank'
								>
									GitHub
								</a>
							</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name='share' />
						</CardMenu>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 3) {
			return (
				<div>
					<h1>This is MongoDB</h1>
				</div>
			);
		}
	}

	render() {
		return (
			<div className='category-tabs'>
				<Tabs
					activeTab={this.state.activeTab}
					onChange={(tabId) => this.setState({ activeTab: tabId })}
					ripple
				>
					<Tab>HTML/CSS</Tab>
					<Tab>JavaScript</Tab>
					<Tab>React</Tab>
				</Tabs>
				<Grid>
					<Cell col={12}>
						<div className='content'>{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Projects;
