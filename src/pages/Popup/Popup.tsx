import React from 'react';
import logo from '../../assets/img/logo.svg';
import { ThumbmarkProvider, useThumbmark } from '@thumbmarkjs/react';
import './Popup.css';

const Popup = () => {
  const { thumbmark, visitorId, isLoading } = useThumbmark();

  return (
    <ThumbmarkProvider apiKey={process.env.REACT_APP_THUMBMARK_API_KEY}>
      {!isLoading && <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>{visitorId}</code> and save to {thumbmark}.
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
      </div>}
    </ThumbmarkProvider>
  );
};

export default Popup;
