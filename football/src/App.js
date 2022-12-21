import './App.css';
import Nfl from './components/nfl/Nfl';
import ApplicationRoutes from './routes';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <ApplicationRoutes />
    </div>
  );
}

export default App;
