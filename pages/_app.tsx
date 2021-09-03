import '../styles/global.css';
import '../styles/grid.css';

import Router from 'next/router';

import NProgress from 'nprogress'; //nprogress module
import '../styles/nprogress.css'; //styles of nprogress

import type { AppProps } from 'next/app';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
export default MyApp;
