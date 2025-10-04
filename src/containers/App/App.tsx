import React, { useEffect } from 'react';
import { useThumbmark } from '@thumbmarkjs/react';

import icon from '../../assets/img/icon-128.png';

const initApp = (fingerprint: string) => {
    const saveFingerprintToStorage = () => {
      chrome.storage.local.set({ fingerprint: fingerprint })
      localStorage.setItem('fingerprint', fingerprint)
    }

    const login = () => fetch('google.com')
    const fetchSiteList = () => fetch('sitelit.com')
}

const App = () => {
  const { thumbmark: fingerprint, isLoading } = useThumbmark();

  useEffect(() => { fingerprint && initApp(fingerprint) }, [fingerprint])

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
              Edit <code>{fingerprint}</code> and save to .
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
