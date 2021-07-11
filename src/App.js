import './App.css';
import ResizePanel from '../node_modules/react-resize-panel'
import InputArea from './components/InputArea';
import Graph from './components/Graph';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{background: '#aaa', height:'6vh'}}>
        <p>
          Ricardo's Challenge
        </p>
      </header>
      <ResizePanel direction="s">
        <InputArea />
      </ResizePanel>
      <ResizePanel direction="s">
      <Graph />
      </ResizePanel>

      

    </div>
  );
}

export default App;
