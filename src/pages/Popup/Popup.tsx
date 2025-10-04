import React from 'react';
import { ThumbmarkProvider } from '@thumbmarkjs/react';

import './Popup.css';
import App from '../../containers/App/App';

const Popup = () => {
  return (
    <ThumbmarkProvider apiKey={process.env.REACT_APP_THUMBMARK_API_KEY}>
      <App />
    </ThumbmarkProvider>
  );
};

export default Popup;
