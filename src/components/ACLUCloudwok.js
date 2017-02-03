import React from 'react';
import $ from 'jquery';
import validateReceipt from '../validators/OCRValidator';

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
  },
  "form": {
    "button": "Send Receipt(s)",
    "sent": "Receipt(s) have been received. Thanks!"
  }
};

const VALID_RECEIPTS = 'Your receipts seem to be valid. <br> Please, click on the \'Send Receipt(s)\' button to submit them.';
const INVALID_RECEIPTS = 'Some receipts seem to be invalid. <br> Please, review them or click on the \'Send Receipt(s)\' button to submit them anyway.';

const displayFeedback = (message) => document.querySelector('.feedback-holder').innerHTML = message;
const disableSubmit = () => {
  $('.btn-start-upload').attr('disabled',true);
  $('.btn-start-upload').text('Please wait while we process the content of your receipt...');
};
const enableSubmit = () => {
  $('.btn-start-upload').attr('disabled',false);
  $('.btn-start-upload').text(cloudWokConfig.form.button);
};

const insertValidationOnForm = () => {
  $('form').on('change', async (event) => {
    disableSubmit();
    const valid = await validateReceipt(event.target.files[0]);
    enableSubmit();
    valid ? displayFeedback(VALID_RECEIPTS) : displayFeedback(INVALID_RECEIPTS);
  });
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
      if(process.env.NODE_ENV !== 'production') insertValidationOnForm();
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
    }

  .cloudwok-upload-files {
    padding-top: 10px;
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

  .text-right, .form-group {
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
  .feedback-holder {
    font-family: 'OpenSans';
    font-size: 18px;
  }

  .cloudwok-embed .btn-start-upload {
    background: #095d96;
    color: white;
    padding: 10px 10px;
    border: none;
    border-radius: 7px;
    font-family: 'OpenSans';
    margin-top: 15px;
    font-size: 18px;
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
          <strong className="warning-message">Confirmation number & amount must be visible</strong>
          <form className="cloudwok-upload">
            <div className="cloudwok-dropzone"></div>
          </form>
          <strong className="warning-message">Attention: We only support image file upload at this time <br /> (.jpg, jpeg, .img, .png, .gif, etc)</strong>
          <div className="cloudwok-upload-files"></div>
          <div className="feedback-holder"></div>
          <div className="cloudwok-upload-message"></div>
          <div className="cloudwok-tos-checkbox"></div>
        </div>
      </div>
    )
  }
};

export default Cloudwok;
