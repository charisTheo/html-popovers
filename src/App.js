import { BrowserRouter } from 'react-router-dom';
import Content from './Content';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Content />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
