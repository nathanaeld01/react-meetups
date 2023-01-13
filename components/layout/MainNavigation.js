import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>React Tourism</div>
			<nav>
				<ul>
					<li>
						<Link href='/'>All Tourist Spots</Link>
					</li>
					<li>
						<Link href='/new-meetup'>Add New Attraction</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
