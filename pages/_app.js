import '../styles/globals.css';
import Heads from '../components/heads';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Heads />
			<Component {...pageProps} />
		</div>
	) 
}

export default MyApp
