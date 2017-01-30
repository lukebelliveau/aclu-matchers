import React from 'react';

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
        </div>gi
      </div>
    )


  }
};

export default Cloudwok;