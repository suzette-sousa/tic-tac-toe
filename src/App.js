import Game from './components/Game';
import './App.css';

const style = {
  textAlign: 'center'
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={style}>TicTacToe</h1>
      </header>
      <Game />
    </div>
  );
}

export default App;
