import { FC } from 'react';
import { StyledFooter } from './Footer.style';

type FooterProps = 'object'

export const Footer: FC<FooterProps> = () => {
	return (
		<StyledFooter data-testid="Footer"> {/* The main footer container */}
			{/* Main content of the footer, containing logo and links */}
			<div className="footer-content">
				{/* Container for the logo and company name */}
				<div className="footer-logo-container">
					<img
						src="https://redback-operations.github.io/redback-ui/icon.svg"
						alt="Redback Operations Logo"
					/>
					<span>Redback Operations</span>
				</div>

				{/* Container for the links organized into columns */}
				<div className="footer-links">
					{/* Column for "Company" links */}
					<div className="footer-links-column">
						<h4>Company</h4>
						<a href="#">About Us</a>
						<a href="#">Our Team</a>
					</div>

					{/* Column for "Projects" links */}
					<div className="footer-links-column">
						<h4>Projects</h4>
						<a href="#">VR Smart Bike</a>
						<a href="#">Elderly Wearable Tech</a>
						<a href="#">Athlete Wearable Tech</a>
						<a href="#">Player Tracking</a>
						<a href="#">Bugbox</a>
					</div>

					{/* Column for "Resources" links */}
					<div className="footer-links-column">
						<h4>Resources</h4>
						<a href="#">Documentation</a>
						<a href="#">Case Studies</a>
						<a href="#">Events</a>
						<a href="#">Videos</a>
					</div>

					{/* Column for "Support" links */}
					<div className="footer-links-column">
						<h4>Support</h4>
						<a href="#">Contact</a>
						<a href="#">FAQ</a>
						<a href="#">Downloads</a>
					</div>
				</div>
			</div>

			{/* Bottom section of the footer with social media icons and legal links */}
			<div className="footer-bottom-section">
				{/* Container for social media icons */}
				<div className="footer-bottom-left">
					<a href="#" aria-label="Instagram">
						<img
							src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000"
							alt="Instagram"
						/>
					</a>
					<a href="#" aria-label="Twitter">
						<img
							src="https://img.icons8.com/?size=100&id=437&format=png&color=000000"
							alt="Twitter"
						/>
					</a>
					<a href="#" aria-label="Facebook">
						<img
							src="https://img.icons8.com/?size=100&id=118468&format=png&color=000000"
							alt="Facebook"
						/>
					</a>
					<a href="https://au.linkedin.com/in/redback-operations-722150239" aria-label="LinkedIn">
						<img
							src="https://img.icons8.com/?size=100&id=447&format=png&color=000000"
							alt="LinkedIn"
						/>
					</a>
					<a href="https://github.com/redbackoperations" aria-label="GitHub">
						<img
							src="https://img.icons8.com/?size=100&id=12598&format=png&color=000000"
							alt="GitHub"
						/>
					</a>
				</div>

				{/* Center section for copyright notice */}
				<div className="footer-bottom-center">
					<p>©2024 Redback Operations. All rights reserved</p>
				</div>

				{/* Container for legal and policy links */}
				<div className="footer-bottom-right">
					<a href="#">Private Policy</a>
					<a href="#">Terms of Use</a>
					<a href="#">Ethics Statement</a>
				</div>
			</div>
		</StyledFooter>
	);
};
