import { Provider } from 'react-redux';
import Home from './Transactions';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
