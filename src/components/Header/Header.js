import { FaShoppingCart } from 'react-icons/fa';

import Container from '@components/Container';

import styles from './Header.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<Container className={styles.headerContainer}>
				<p className={styles.headerTitle}>Next eCommerce Test</p>
				<p className={styles.headerCart}>
					<FaShoppingCart />
					£3.99
				</p>
			</Container>
		</header>
	);
}

export default Header;
