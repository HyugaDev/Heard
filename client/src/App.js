import { Provider } from 'react-redux';
import Home from './components/Transactions';
import store from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <Home />
      <ToastContainer />
    </Provider>
  );
}

export default App;
