import logo from './logo.svg';
import './App.css';
import './javascript/welcome';
import './javascript/letvsconst';
import './javascript/restandspread';
import './javascript/arrowfunction';
import './javascript/mapex';
import './javascript/filterex';
import './javascript/stringfunction';
import './javascript/importex';
import './javascript/ChildClass';
import './javascript/staticmethodex';
import './javascript/prototypeex';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <script src='./javascript/welcome.js'/>
        <script src='./javascript/letvsconst.js'/>
        <script src='./javascript/restandspread.js'/>
        <script src='./javascript/arrowfunction.js'/>
        <script src='./javascript/mapex.js'/>
        <script src='./javascript/filterex.js'/>
        <script src='./javascript/stringfunction.js'/>
        <script src='./javascript/importex.js'/>
        <script src='./javascript/ChildClass.js'/>
        <script src='./javascript/staticmethodex.js'/>
        <script src='./javascript/prototypeex.js'/>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
