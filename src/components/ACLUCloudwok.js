import React from 'react';

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
      background: #186EAB;
      height: 200px;
      color: #D9E7FF;
      position: relative;
    }

  .cloudwok-embed .dropzone .filepicker {
    background: transparent;
    color: #fff;
    padding: 20px 10px;
    border: none;
    border-radius: 7px;
    margin-top: 15px;
    font-size: 18px;
    font-weight: bold;
  }

  .btn.filepicker:active {
    box-shadow: 0 0 0 transparent;
  }

  .text-right {
    display: none;
  }

  .warning-message {
    margin: 15px 0;
    display: block;
    font-size: 20px;
    color: #D50000;
  }

  @media (max-width: 425px) {
    .warning-message {
      font-size: 14px;
    }
  }

  .cloudwok-embed .btn-start-upload {
    background: #fff;
    color: #186EAB;
    border: solid 1px #135A8C;
  }`;

const cloudWokId = process.env.NODE_ENV === 'production' ? 'r3M-' : 'GEKm';

class Cloudwok extends React.Component {
  render() {
    return (
      <div>
        <style>
          {style}
        </style>
        <div className="cloudwok-embed" data-wokid={ cloudWokId }>
          <div className="cloudwok-upload-files"></div>
          <strong className="warning-message">Confirmation number & amount must be visible</strong>
          <form className="cloudwok-upload">
            <div className="cloudwok-dropzone"></div>
          </form>
          <strong className="warning-message">Attention: We only support image file upload at this time <br /> (.jpg, jpeg, .img, .png, .gif, etc)</strong>
          <div className="cloudwok-tos-checkbox"></div>
        </div>
      </div>
    )
  }
};

export default Cloudwok;
