import Head from 'next/head';
import Image from 'next/image';

import Header from '@components/Header';
import Container from '@components/Container';

import styles from '@styles/Home.module.scss';

import products from '@data/products.json';
import Button from '@components/Button';

export default function Home() {
	return (
		<>
			<Header />
			<div>
				<Head>
					<title>Create Next App</title>
					<meta name='description' content='Generated by create next app' />
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<main className={styles.main}>
					<Container>
						<h1>Next eCommerce Test</h1>
						<h2>Products</h2>
						<ul className={styles.products}>
							{products.map((product, index) => {
								return (
									<li key={index}>
										<img src={product.image} alt={product.title} />
										<h3>{product.title}</h3>
										<p>£{product.price}</p>
										<Button>Add to cart</Button>
									</li>
								);
							})}
						</ul>
					</Container>
				</main>

				<footer className={styles.footer}>
					&copy; <a href='www.brendanmccauley.dev'>Brendan McCauley,</a>{' '}
					{new Date().getFullYear()}
				</footer>
			</div>
		</>
	);
}
