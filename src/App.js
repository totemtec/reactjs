import React from 'react';
import { Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/react-game">三连棋</Link>
        </li>
        <li>
          <Link to="/hook/example">Hook钩子用法</Link>
        </li>
        <li>
          <Link to="/context/dynimac">动态修改Context</Link>
        </li>
        <li>
          <Link to="/context/update">在嵌套组件中更新 Context</Link>
        </li>
        <li>
          <Link to="/context/multi">消费多个 Context</Link>
        </li>
      </ul>
    </nav>
  </div>
  );
}

export default App;
