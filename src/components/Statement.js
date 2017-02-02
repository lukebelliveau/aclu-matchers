import React from 'react';

const signature = {
  fontSize: '0.8em',
  marginBottom: '2rem'
};

const body = {
  align: 'float left',
  margin: '0 auto',
  marginBottom: '3rem',
  width: '90%',
  textAlign: 'left'
};

const wrapper = {
  width: '100%',
  position: 'relative'
};

const hr = {
    marginTop: '1.3rem',
    marginBottom: '3rem',
}

const Statement = () => (
  
  <div style={ wrapper }>

    <hr style={ hr } />

    <div id='statement-wrapper' style={ body }>
      <h2>Why donate?</h2>

      <span style={{ fontSize: '1.3rem'}}>
        “<strong>Extreme vetting</strong> is just a euphemism for discrimination against Muslims. Identifying specific countries with Muslim majorities and carving out exceptions for minority religions flies in the face of the constitutional principle that bans the government from either favoring or discriminating against particular religions. Any effort to discriminate against Muslims and favor other religions runs afoul of the First Amendment.”
      </span>

      <p style={signature}>
        <i>Anthony D. Romero, Executive Director, American Civil Liberties Union</i>
      </p>
      
      <p>
        People around the nation have offered to match our donations to the ACLU; all they need from us is a tweet with the donation receipt. Drag and drop your receipt above, and I will automatically tweet your receipt to at least ten matching donors. Multiply your donation by 10!
      </p>
    </div>

      <hr style={ hr } />
  </div>
);

export default Statement;