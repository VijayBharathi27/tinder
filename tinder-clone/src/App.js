import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    //BEM CLASS NAMING CONVENTION
    <div className="app">
      <h1>lets build the mern tinder clone !</h1>
      <Header/>
      <TinderCards/>
      <SwipeButtons/>
    </div>
  );
}

export default App;
