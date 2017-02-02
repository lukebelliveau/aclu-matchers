import React from 'react';

const success = {
  title: 'Thank you for multiplying!',
  subtitle: 'Your donation has been multiplied by 10',
  text: `We'll tweet this receipt to at least 10 people who are matching donations. Your donation just increased tenfold! 
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
    "show": true,
    "popup": false,
    "text": {
      "before": "Before you upload...",
      "agree": "Please agree to the following Terms of Service:",
      "title": "Terms of Service",
      "main": `Your receipt will be uploaded to cloud storage and AUTOMATICALLY tweeted to donation matchers. No personal information is required.
               Once something is uploaded, the process of tweeting to matchers is AUTOMATIC, and I cannot guarantee that I can prevent an accidental
               submission from being shared on the public internet.`
    },
    "checkbox": {
      "text1": "I agree with the ",
      "text2": "Terms of Service",
      "invalid": "Cannot start uploading. Please click on the checkbox first to agree with the Terms of Service."
    }
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
              .cloudwok-wrapper {
                  flex: 1;
                  display: flex;
                  position: absolute;
                  height: 100%;
                  width: 100%;
              }

              .cloudwok-embed {
                flex: 1;
                height: 100%;
                position: relative;
              }

              .cloudwok-embed .dropzone {
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  background: rgba(0, 0, 0, 0) !important;
                  color: rgba(0, 0, 0, 0) !important;
                  ion: relative;
                }

              .cloudwok-embed .dropzone .filepicker {
                background: rgba(0, 0, 0, 0) !important;
                color: rgba(0, 0, 0, 0) !important;
                font: strong;
              }
              .cloudwok-embed .btn-start-upload {
                background: #186EAB !important;
                color: #FFFFFF !important;
                border: solid 1px #135A8C !important;
              }
              
              .fa-spin, .cloudwok-embed a, .cloudwok-embed a:hover, .text-instructions {
                color: rgba(0, 0, 0, 0);
              }

              .btn.btn-success.filepicker {
                border-color: rgba(0, 0, 0, 0);
              }
              
              .row.row-upload-completed.row-clearfix.success {
                background-color: #2f9e00;
                border-top: 4px solid #1D6100;
                border-bottom: 4px solid #1D6100;
              }
              
              `;

class Cloudwok extends React.Component {
  render() {
    return (
      <span className='cloudwok-wrapper'>
        <style>
          {style}
        </style>
        <span className="cloudwok-embed" data-wokid="r3M-">
          <span className="cloudwok-upload-files"></span>
          <form className="cloudwok-upload">
            <span className="cloudwok-dropzone"></span>
          </form>
        </span>
      </span>
    )
  }
};

export default Cloudwok;
