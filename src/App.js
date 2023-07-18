import { BrowserRouter } from 'react-router-dom';
import Content from './Content';

import './App.css';
import { block } from 'million/react';

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

export default block(App);
