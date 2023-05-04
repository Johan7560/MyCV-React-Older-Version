import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
	render() {
		return (
			<div style={{ background: 'black' }}>
				<Grid>
					<Cell col={4}>
						<div style={{ textAlign: 'center' }}>
							<img
								src='./images/4.jpg'
								alt='avatar'
								style={{
									height: '300px',
									width: '200px',
									marginTop: '40px',
									boxShadow: '10px 10px 5px white'
								}}
							/>
						</div>
						<h2 style={{ paddingTop: '0.3em', textAlign: 'center', color: 'cyan' }}>
							Johan Swart
						</h2>
						<h3 style={{ color: '#7FFFD4', paddingTop: '20px' }}>
							Aspiring Software Developer
						</h3>
						<hr style={{ borderTop: '3px solid #e22947', width: '100%' }} />
						<p style={{ fontSize: '16px', color: 'grey' }}>
							I learned to develop on my own. My experience thus far has come through
							reading, studying, troubleshooting, and comprehending what the code block is
							supposed to accomplish. <br />
							Due to my work as a freelance web developer for businesses, I also have
							experience in that area. I learned a lot about design principles and
							methodologies through this, and I also learned that if I encountered a flaw
							or difficulty, I had to do some research to figure out what was wrong.{' '}
							<br />
							Highly motivated and experienced professional with a passion for problem
							solving and creative solutions. Experience in database design and
							development, and have a solid deep understanding of web technologies and is
							proficient in HTML, CSS, JavaScript. <br />
							Team player who is always willing to go the extra mile to ensure that
							projects are completed on time and within budget. Great communicator. Avid
							learner and is constantly striving to stay up-to-date with the latest
							technologies and trends. Always looking for new challenges.
						</p>
						<hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
					</Cell>
					<Cell className='resume-right-col' col={8}>
						<h3>Education</h3>
						<Education
							startYear={2012}
							endYear={2014}
							schoolName='Centurion Academy'
							schoolDescription='I studied Sport Management NQF 6 at Centurion Academy and also done numerous coaching courses in different sport codes and achieved my Diploma in Sport Management after my three years at Centurion.'
						/>
						<Education
							startYear={2015}
							endYear={2016}
							schoolName='HFPA'
							schoolDescription='I studied at HFPA after my 3 years at Centurion Academy and did my diploma in Exercise Science.'
						/>
						<Education
							startYear={2019}
							endYear={2020}
							schoolName='Hyperiondev'
							schoolDescription='I have done a Full Stack Web Development Bootcamp Course at Hyperion Dev.'
						/>
						<hr style={{ borderTop: '3px solid #e22947' }} />
						<h3>Experience</h3>
						<Experience
							startYear={2015}
							endYear={2016}
							jobName='Fitness Instructor (Virgin Active)'
							jobDescription='I worked at Virgin Active as a fitness instructor while completing my studies at HFPA.'
						/>
						<Experience
							startYear={2016}
							endYear={2017}
							jobName='Fitness Consultant (GOHealth)'
							jobDescription='I worked as a fitness instructor for GO Health and also helped in sales as well as helping with reception work.'
						/>

						<Experience
							startYear={2019}
							endYear={'2022'}
							jobName='Phys Ed (Goodwood Park Primary)'
							jobDescription='Working as a physical educator at GoodWood Park primary where I do the development of the junior phase children.'
						/>
						<hr style={{ borderTop: '3px solid #e22947' }} />
						<h3>Skills</h3>
						<Skills skill='HTML/CSS' progress={85} />
						<Skills skill='Javascript' progress={80} />
						<Skills skill='React' progress={50} />
						<Skills skill='NodeJS' progress={10} />
						<Skills skill='Express' progress={10} />
						<Skills skill='MongoDB' progress={10} />
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
