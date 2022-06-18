import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigator from './Layouts/Navigator';

//Context
import {AppProvider} from './Context/AppContext'

function App() {
  return (
    <AppProvider>
      <Navigator/>
    </AppProvider>
  );
}

export default App;
