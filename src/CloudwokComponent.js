import React from 'react';

const success = {
  title: 'Thank you for multiplying!',
  subtitle: 'Your donation has been multiplied by 10',
  text: 'We\'ll tweet this receipt to at least 10 people who are matching donations. Your donation just increased tenfold!'
};


const cloudWokConfig = {
  "dropzone": {
    "label": " ",
    "button": "MULTIPLY DONATION BY 10"
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
    "popup": true,
    "text": {
      "before": "Before you upload...",
      "agree": "Please agree to the following Terms of Service:",
      "title": "Terms of Service",
      "main": "ENTER TERMS OF SERVICE HERE"
    },
    "checkbox": {
      "text1": "I agree with the ",
      "text2": "Terms of Service",
      "invalid": "Cannot start uploading. Please click on the checkbox first to agree with the Terms of Service."
    }
  }
};

const styles = {
  dropZone: {
    background: '#09758E !important',
    color: '#D9E7FF !important',
    border: 'solid 3px #425BAC !important'
  },

  filePicker: {
    background: '#09758E !important',
    color: '#D9E7FF !important',
    border: 'solid 3px #425BAC !important',
    background: '#5877C1 !important',
    color: '#D9E7FF !important',
    border: 'solid 1px #425BAC !important'
  },

  uploadButton: {
    background: '#09758E !important',
    color: '#D9E7FF !important',
    border: 'solid 3px #425BAC !important',
    background: '#5877C1 !important',
    color: '#D9E7FF !important',
    border: 'solid 1px #425BAC !important',
    background: '#186EAB !important',
    color: '#FFFFFF !important',
    border: 'solid 1px #135A8C !important'
  }
};

const style = `.cloudwok-embed .dropzone {
                  background: red !important;
                  color: #D9E7FF !important;
                  border: solid 3px #dddddd !important;
                }
              .cloudwok-embed .dropzone .filepicker {
                background: white !important;
                color: black !important;
                border: solid 1px black !important;
                font: strong
              }
              .cloudwok-embed .btn-start-upload {
                background: #186EAB !important;
                color: #FFFFFF !important;
                border: solid 1px #135A8C !important;
              }`;



class Cloudwok extends React.Component {
  render() {
    return (
      <div>
        <style>
          {style}
        </style>
        <div className="cloudwok-embed" data-wokid="r3M-">
          <div className="cloudwok-upload-files"></div>
          <form className="cloudwok-upload">
            <div className="cloudwok-dropzone"></div>
          </form>
          <div className="cloudwok-tos-checkbox"></div>
        </div>
      </div>
    )
  }

  componentDidMount() {
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
  }

};

export default Cloudwok;