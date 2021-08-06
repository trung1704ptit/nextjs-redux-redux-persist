// Redux
import { Provider } from 'react-redux';
import store from '../store/configureStore';

// Style
import { BaseCSS } from 'styled-bootstrap-grid';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  
    <Provider store={store}>
      <BaseCSS />
      <Component {...pageProps} />
    </Provider>
  

  );
}

export default MyApp
