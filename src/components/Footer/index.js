import React from 'react'
import { Link } from 'gatsby'

import FixedContainer from '../FixedContainer'
import Logo from '../Logo'

import * as styles from './style.module.css'



const Footer = ({ children }) => {

	const navItems = [
		{
			link: '/genres',
			text: 'Genres',
		},
		{
			link: '/about',
			text: 'About',
		}
	]


	return (
		<footer className={styles.footer}>
			<FixedContainer>
				<div className={styles.content}>
					<Link to="/" className={styles.logoContainer}>
						<Logo width={117} height={52} />
					</Link>
					<nav className={styles.nav}>
						{navItems.map( navItem => (
							<Link
								key={navItem.link}
								to={navItem.link}
								className={styles.navItem}
							>{navItem.text}</Link>
						) )}
					</nav>
					<a
						className={styles.githubLink}
						href="https://github.com/RobRotell/synflix"
						target="_blank"
						title="Go to repo"
					>
						<svg className={styles.githubLinkIcon} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M20.0165 0C8.94791 0 0 9.16663 0 20.507C0 29.572 5.73324 37.2453 13.6868 39.9611C14.6812 40.1653 15.0454 39.5198 15.0454 38.9769C15.0454 38.5015 15.0126 36.8719 15.0126 35.174C9.4445 36.3965 8.28498 32.7295 8.28498 32.7295C7.39015 30.3528 6.06429 29.742 6.06429 29.742C4.24185 28.4857 6.19704 28.4857 6.19704 28.4857C8.21861 28.6215 9.27938 30.5907 9.27938 30.5907C11.0686 33.714 13.9518 32.8315 15.1118 32.2882C15.2773 30.964 15.8079 30.0474 16.3713 29.5382C11.9303 29.0628 7.25781 27.2974 7.25781 19.4203C7.25781 17.1795 8.05267 15.3462 9.31216 13.9204C9.11344 13.4112 8.41732 11.3058 9.51128 8.48788C9.51128 8.48788 11.2014 7.94455 15.0122 10.5929C16.6438 10.144 18.3263 9.91563 20.0165 9.91371C21.7067 9.91371 23.4295 10.1516 25.0205 10.5929C28.8317 7.94455 30.5218 8.48788 30.5218 8.48788C31.6158 11.3058 30.9192 13.4112 30.7205 13.9204C32.0132 15.3462 32.7753 17.1795 32.7753 19.4203C32.7753 27.2974 28.1028 29.0286 23.6287 29.5382C24.358 30.1832 24.9873 31.4053 24.9873 33.3407C24.9873 36.0907 24.9545 38.2978 24.9545 38.9765C24.9545 39.5198 25.3192 40.1653 26.3132 39.9615C34.2667 37.2448 39.9999 29.572 39.9999 20.507C40.0327 9.16663 31.052 0 20.0165 0Z" fill="white"/>
						</svg>
					</a>
				</div>
			</FixedContainer>
		</footer>
	)
}


export default Footer
