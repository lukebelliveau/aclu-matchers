import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import Cloudwok from './ACLUCloudwok';


const styles = {
  boxWrapper: {
    marginTop: '2rem',
    marginBottom: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    position: 'relative'
  },
  step: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    height: '10%',
    backgroundColor: 'white',
  },
  boxContent: {
    width: '90%',
    margin: '0 auto',
    wordWrap: 'normal',
    flex: 1,
    fontSize: '3em',
    color: 'white',
  },
  boxPadding: {
    flex: 1,
  }
}

const box = {
    backgroundImage: `url('http://i.imgur.com/sAxC5zT.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center', 
    flex: 1,
    margin: '0 2% 2% 2%',
    border: '2px solid black',
    height: '100%',
    display: 'flex',
    flexDirection: "column",
    overflow: 'hidden',
    minWidth: '300px',
    minHeight: '300px'
};

const cloudwokStretch = {  
  display: 'flex',  
  alignItems: 'stretch',
  flexDirection: 'column',
  position: 'relative'
};

const clickBox = Object.assign({ cursor: 'pointer' }, box);

const donate = () => {
  document.location = "https://action.aclu.org/secure/donate-to-aclu";
}

const s = StyleSheet.create(styles)

const Instructions = () => (
  <div className={ css(s.boxWrapper) }>

    <div style={ clickBox } className='instructions-box' onClick={ donate }>
      <div className={css(s.step)}>STEP 1</div>
        <div className={css(s.boxPadding)}></div>
        <div className={css(s.boxContent)}>
          <div>Click to donate to the ACLU</div>
        </div>
        <div className={css(s.boxPadding)}></div>
    </div>
    
    <div style={ box } className='instructions-box'>
        <div className={css(s.step)}>STEP 2</div>
        <div style={ cloudwokStretch } className={css(s.boxContent)}>
          <div style={{ marginTop: '3.5rem', marginBottom: '1rem' }}>Drop your receipt here</div>
          <div style={{ fontStyle: 'italic', fontSize: '1rem' }} >Or click to upload a file</div>
          <Cloudwok />
        </div>
    </div>

    <div style={ box } className='instructions-box'>
        <div className={css(s.step)}>STEP 3</div>
        <div className={css(s.boxPadding)}></div>
        <div className={css(s.boxContent)}>
          <div>We'll tweet it to match it!</div>
        </div>
        <div className={css(s.boxPadding)}></div>
    </div>

  </div>
);

// const Instructions = () => (
//   <div>
//     <div className={css(s.hero, s.pb8, s.cover, s.textShadowTwo)}>
//       <div className={css(s.container)}>
//         <h2 className={css(s.mt0)}>Drag and drop your receipt below, and I will automatically tweet your receipt to at least ten matching donors.</h2>
//         <h3>This will multiply your donation by 10.</h3>
//         <h3><strong>Absolutely no personal information is required.</strong></h3>
//         <p>Just make sure your screenshot shows your confirmation number and amount donated.</p>
//       </div>      
//     </div>
    
//     <Cloudwok />

//     <h2>and if you haven't donated yet...</h2>
//     <div className={css(s.bold)}>
//       <h2>
//         <a className={css(s.a)} href="https://action.aclu.org/secure/donate-to-aclu">Click here to donate to the <br /> American Civil Liberties Union</a>
//       </h2>
//     </div>
//     <h2>...then drop your receipt on the blue box to multiply it!</h2>

//   </div>
// );

export default Instructions;
