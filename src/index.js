import React from 'react';
import ReactDOM from 'react-dom';

import GoogleAnalytics from 'react-ga';

import App from './App';
import './styles/index.css';

import { startCloudwok } from './components/receiptUpload/ACLUCloudwok'

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

/*
  CAUTION: This way, madness lies...
  This waits until CloudWok is loaded, then adds the dropzone label AFTER the title (otherwise label comes first).
  Let's please get rid of CloudWok ASAP.
*/

const insertDropzoneText = () => {
   const dropzoneTitle = document.getElementsByClassName('btn btn-success filepicker')[0];
    const dropzoneWarningLine1 = 'Image files only - no PDFs please.';
    const dropzoneWarningLine2 = 'Confirmation number & amount must be clearly visible.'
    const dropzoneWarning = document.createElement('div');
    dropzoneWarning.innerHTML = `<div>${dropzoneWarningLine1}</div><div>${dropzoneWarningLine2}</div>`;
    dropzoneTitle.insertAdjacentElement('afterend', dropzoneWarning);
};

const cloudwokSection = document.getElementsByClassName('cloudwok-embed')[0];

// more efficient but not supported in older browsers
if ( MutationObserver ) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (!mutation.addedNodes) return;
      for (const i in mutation.addedNodes) {
        const node = mutation.addedNodes[i];
        if (node.className === 'dropzone' ) {
          insertDropzoneText();
          disconnectObserver();
        }
      }
    });
  });

  const disconnectObserver = () => observer.disconnect();

  observer.observe(cloudwokSection, {
      childList: true,
      subtree: true,
      attributes: false,
      characterData: false
  });

} else {
  cloudwokSection.addEventListener("DOMNodeInserted", (e) => {
    if (e.target.className === 'dropzone') insertDropzoneText();
  }, false);
}
