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
      "main": `Your receipt will be uploaded to cloud storage and tweeted to donation matchers, following a review by our team. No personal information is required.
               We are verifying receipts before they are posted, but please take care to remove all personal information from receipts before
               submitting to ensure it is not shared with our team or the public internet. Thank you for participating!`
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
  .cloudwok-embed {
    width: 80%;
    borderRadius: 25;
    margin: 0 auto;
    height: auto;
    position: relative;
  }

  .cloudwok-embed .dropzone {
      background: white;
      height: 200px;
      color: #D9E7FF;
      border: dotted 5px #095d96;
      position: relative;
      margin-top: 30px;
    }

  .cloudwok-embed .dropzone .filepicker {
    background: #095d96;
    color: white;
    padding: 10px 10px;
    border: none;
    border-radius: 7px;
    font-family: 'OpenSans';
    margin-top: 15px;
    font-size: 18px;
  }

  .text-right {
    display: none;
  }

  .cloudwok-embed .btn-start-upload {
    background: #186EAB;
    color: #FFFFFF;
    border: solid 1px #135A8C;
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
};

export default Cloudwok;
