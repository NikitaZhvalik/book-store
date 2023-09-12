import ReactDOM from 'react-dom/client';
import App from './components/App';

import { Provider } from 'react-redux';
import { store } from './toolkitRedux';

import './assets/styles/index.css';
import './assets/styles/normalize.css';
import './assets/styles/nullstyles.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)