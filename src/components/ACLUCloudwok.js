import React from 'react';
import {colors} from '../styles/shared';

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
.cloudwok-embed .dropzone {
  position: relative;
  height: 50vh;
  border-radius: 0 !important;
  background: ${colors.offWhite.color} !important;
  color: #D9E7FF !important;
}
.cloudwok-embed .dropzone span.filepicker {
  font-size: 2rem;
  border-style: dashed !important;
  border-radius: 5px;
}
@media(max-width: 640px) {
  .cloudwok-embed .dropzone span.filepicker {
    font-size: 1rem;
  }
}
a[href="https://www.cloudwok.com"] {
  position: absolute;
  bottom: 5px;
  right: 5px;
}
.cloudwok-embed .dropzone .filepicker {
  background: ${colors.white.color} !important;
  color: #000 !important;
  border: solid 1px #000 !important;
  font-weight: strong
}
.cloudwok-embed .btn-start-upload {
  background: #186EAB !important;
  color: #fff !important;
  border: solid 1px #135A8C !important;
}
.cloudwok-embed .spacer-10 {
  height: 0;
}`;

class Cloudwok extends React.Component {
  render() {
    return (
      <div>
        <style>{style}</style>
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
