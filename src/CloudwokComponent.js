import React from 'react';

const cloudwokScript = ((window, document) => {
  const loader = () => {
    var script = document.createElement("script"),
    tag = document.getElementsByTagName("script")[0];
    script.src = "https://www.cloudwok.com/cdn-vassets/javascripts/cw.js";
    tag.parentNode.insertBefore(script, tag);
  };

  window.addEventListener ? window.addEventListener("load", loader, false) :
    window.attachEvent("onload", loader);
  })(window, document);

const Cloudwok = () => {
  return (
    <div>
      <div className="cloudwok-embed" data-wokid="r3M-">
        <div className="cloudwok-upload-files"></div>
        <form className="cloudwok-upload">
          <div className="cloudwok-dropzone"></div>
        </form>
        <div className="cloudwok-tos-checkbox"></div>

        <div className="cloudwok-download-files"></div>
      </div>
    </div>
  )

};

export default Cloudwok;