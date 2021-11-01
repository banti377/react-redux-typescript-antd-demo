import { Provider } from 'react-redux';
import { store } from '../state';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search a Package</h1>
      </div>
    </Provider>
  );
};

export default App;
