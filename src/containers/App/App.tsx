import React from 'react';
import icon from '../../assets/img/icon-128.png';
import { useThumbmark } from '@thumbmarkjs/react';

const App = () => {
  const { thumbmark, isLoading } = useThumbmark();

  return (
    <>
      <div>
        <p>Hello!</p>
        <img src={icon} alt="extension icon" />
      </div>
      {
        !isLoading && (<div className="App">
          <header className="App-header">
            <img src={icon} className="App-logo" alt="logo" />
            <p>
              Edit <code>{thumbmark}</code> and save to .
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React!
            </a>
          </header>
          <a href="https://www.flaticon.com/free-icons/status" title="status icons">Status icons created by Karacis - Flaticon</a>
        </div>)
      }
    </>
)}

export default App;
