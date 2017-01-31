import React from 'react';
import ReactDOM from 'react-dom';

import GoogleAnalytics from 'react-ga';

import App from './App';
import './styles/index.css';

import { startCloudwok } from './components/Cloudwok'

GoogleAnalytics.initialize('UA-91151405-1');

function logPageView() {
  GoogleAnalytics.set({ page: window.location.pathname })
  GoogleAnalytics.pageview(window.location.pathname);
}

logPageView();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

startCloudwok();
