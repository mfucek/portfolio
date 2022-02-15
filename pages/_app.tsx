import { AppProps } from 'next/app';
import '../styles/global.css';
import '../styles/grid.css';

import Router from 'next/router';

import NProgress from 'nprogress'; //nprogress module
import '../styles/nprogress.css'; //styles of nprogress
import Head from 'next/head';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<script async src="https://cdn.splitbee.io/sb.js"></script>
			</Head>
			<Component {...pageProps} />;
		</>
	);
}
export default MyApp;
