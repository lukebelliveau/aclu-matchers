import React from 'react';
import {darkGray} from '../../styles/shared';

const success = {
  title: 'Thank you for multiplying!',
  subtitle: 'Your donation has been multiplied!',
  text: `We'll tweet this receipt to all of our people who are matching donations.
        If you found this useful, please share with your network.  The more money matched, the more money given to protect our Constitution.
        Every dollar counts!`
};

const cloudWokConfig = {
  "dropzone": {
    "label": " ",
    "button": "DROP RECEIPT HERE"
  },
  "success": {
    "message": {
      "title": success.title,
      "subtitle": success.subtitle,
      "text": success.text,
      "button": "OK",
      "noButtonOwnCW": false,
      "dontpopup": false,
      "dontslideup": true,
      "dontfadeout": true
    },
    "redirect": ""
  },
  "terms": {
    "show": false,
  }
};

export const startCloudwok = () => {
  document.querySelector(".cloudwok-embed").setAttribute("data-config",
    JSON.stringify(cloudWokConfig));
  (function(window, document) {
    var loader = function() {
      var script = document.createElement("script"),
      tag = document.getElementsByTagName("script")[0];
      script.src = "https://www.cloudwok.com/cdn-vassets/javascripts/cw.js";
      tag.parentNode.insertBefore(script, tag);
    };
    window.addEventListener ? window.addEventListener("load", loader, false) :
      window.attachEvent("onload", loader);
  })(window, document);
};

const style = `
  .cloudwok-embed {
    margin: 0 auto;
    height: auto;
    position: relative;
    overflow: hidden;
    background: #EAEAEA;
    padding: 2.4rem 0;
  }

  .cloudwok-loading-screen {
    padding-top: 6.4rem;
    font-family: 'heading_regular', sans-serif !important;
    font-size: 2.4rem;
    height: 300px;
  }

  .cloudwok-embed .dropzone {
      background: #EAEAEA;
      height: 300px;
      font-size: 2.4rem !important;
      color: #F43D00;
      position: relative;
    }

  .cloudwok-embed .dropzone .filepicker {
    background: transparent;
    color: ${darkGray.color};
    padding: 20px 10px;
    border: none;
    margin-top: 15px;
    font-size: 4.8rem;
    font-weight: bold;
    margin-top: 5.6rem;
  }

  .dropzone {
    width: 80% !important;
    margin: 0 auto !important;
    background: white !important;
  }

  @media (max-width: 740px) {
    .cloudwok-embed .dropzone .filepicker {
      font-size: 2.4rem;
      margin-top: 1.6rem;
    }
    .cloudwok-embed .dropzone, .cloudwok-loading-screen {
      height: 250px;
    }
    .dropzone-text {
      font-size: 1.6rem !important;
    }
  }

  .dropzone {
    border-radius: 0 !important;
  }

  .btn.filepicker:active {
    box-shadow: 0 0 0 transparent;
  }

  .btn.btn-success.filepicker {
    padding: 20px 0 !important;
  }

  .text-instruction, .btn.btn-success.filepicker {
    display: block !important;
  }

  .dropzone-text {
    font-family: 'paragraph_light' !important;
    font-size: 2.4rem !important;
  }

  .text-right, .fa-fw, .text-instruction strong, .spacer-50 {
    display: none;
  }

  .fa-asterisk {
    display: none !important;
  }

  .cloudwok-embed .btn-start-upload {
    background: #fff;
    color: #186EAB;
    border: solid 1px #135A8C;
  }`;

const cloudWokId = process.env.NODE_ENV === 'production' ? 'r3M-' : 'GEKm';


class Cloudwok extends React.Component {
  componentDidMount(){
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
    dropzoneWarning.className += ' dropzone-text';
    dropzoneWarning.innerHTML = `<div>${dropzoneWarningLine1}</div><div>${dropzoneWarningLine2}</div>`;
    dropzoneTitle.insertAdjacentElement('afterend', dropzoneWarning);
};

const cloudwokSection = document.getElementsByClassName('cloudwok-embed')[0];

let disconnectObserver;

// more efficient but not supported in older browsers
if ( MutationObserver ) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (!mutation.addedNodes) return;
      for (const i in mutation.addedNodes) {
        if(mutation.addedNodes.hasOwnProperty(i)) {
          const node = mutation.addedNodes[i];
          if (node.className === 'dropzone' ) {
            insertDropzoneText();
            disconnectObserver();
          }          
        }
      }
    });
  });

  disconnectObserver = () => observer.disconnect();

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
  }

  render() {
    return (
      <div>
        <style>
          {style}
        </style>
        <div className="cloudwok-embed" data-wokid={ cloudWokId }>
          <div className="cloudwok-upload-files"></div>
          <form className="cloudwok-upload">
            <div className="cloudwok-dropzone">
              <div className="cloudwok-loading-screen">Loading, please wait...</div>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

export default Cloudwok;
