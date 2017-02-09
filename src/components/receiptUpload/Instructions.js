import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { bold, backgroundCover, container, white, darkGray, alignLeft, margin0auto, relative, hide,
  inlineBlock, m0, p0, pt0, headingRegular, paragraphRegular, flex, block } from '../../styles/shared';

const s = StyleSheet.create({
  container,
  backgroundCover,
  bold,
  hero: {
    padding: '5px 50px 25px',
    color: '#373e44',
  },
  chevronLi: Object.assign({}, inlineBlock, {
    width: '5%',
    height: '250px',
    '@media (max-width: 740px)': Object.assign({}, hide),
  }),
  chevron: {
    height: '100%',
    width: '100%',
  },
  li: Object.assign({}, darkGray, inlineBlock, m0, paragraphRegular, {
    fontSize: '22px',
    paddingBottom: '20px',
    width: '25%',
    verticalAlign: 'top',
    '@media (max-width: 740px)': Object.assign({}, pt0, {
      width: '100%',
      fontSize: '14px',
      paddingBottom: '15px'
     }),
  }),
  accordionToggle: Object.assign({}, headingRegular, flex, white, {
    background: '#F43D00',
    fontSize: '24px',
    padding: '0.5em 0',
    cursor: 'pointer',
  }),
  accordionText: Object.assign({}, alignLeft, {
    flex: 1,
    marginLeft: '3.2rem'
  }),
  hamburger: Object.assign({}, margin0auto, {
    flex: 1,
    height: '30px',
    width: '30px',
    maxWidth: '30px',
    marginRight: '3.2rem'
  }),
  icon: Object.assign({}, block, relative, {
    height: '60px',
    margin: '6.4rem auto',
    marginBottom: '10px',
    '@media (max-width: 740px)': {
      height: '50px',
      margin: '3.2rem auto',
     }
  }),
  ul: Object.assign({}, p0, {
    listStyleType: 'none'
  }),
  strong: {
    marginTop: '10px',
    fontWeight: 500
  },
  noPersonalInfo: Object.assign({}, headingRegular, {
    fontSize: '2.4rem',
    '@media (max-width: 740px)': {
        marginTop: '4.8rem',
        marginBottom: '2.4rem',
        fontSize: '1.6rem',
    }
  }),
});

const isOnMobile = document.documentElement.clientWidth <= 740;

class Instructions extends React.Component {

  constructor() {
    super();
    this.state = {
      showHowItWorks: true,
      showAccordionToggle: false,
    };
  }

  componentDidMount() {
    if (isOnMobile) {
      this.setState({
        showAccordionToggle: true,
      });
      this.toggleMobile();
    }
  }

  toggleMobile = () => {
    this.setState({
      showHowItWorks: !this.state.showHowItWorks,
    })
  }
  
  render() {
    return (
      <div>
        { this.state.showAccordionToggle && ( 
          <div className={css(s.accordionToggle)} onClick={this.toggleMobile}>
            <div className={css(s.accordionText)}>How it Works</div>
            <svg className={css(s.hamburger)} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" fill={`${white.color}`}/></svg>
          </div>)}

        { this.state.showHowItWorks && (
          <div className={css(s.hero, s.cover, s.bgBlue)}>
            <div className={css(s.container)}>
              <ul className={css(s.ul)}>
                <li className={css(s.li)}>
                  <svg className={css(s.icon)} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z" fill={`${darkGray.color}`}/></svg>
                  Donate to the ACLU
                </li>
                <li className={css(s.chevronLi)}>
                  <img className={css(s.chevron)} src='./chevron.png' role='presentation' />
                </li>
                <li className={css(s.li)}>
                  <svg className={css(s.icon)} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 1l-15 15h9v16h12v-16h9z" fill={`${darkGray.color}`}/></svg>
                  Upload your receipt below
                </li>
                <li className={css(s.chevronLi)}>
                  <img className={css(s.chevron)} src='./chevron.png' role='presentation' />
                </li>
                <li className={css(s.li)}>
                  <svg className={css(s.icon)} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" fill={`${darkGray.color}`}/></svg>
                  We'll find matchers to multiply your donation!
                </li>
              </ul>
            </div>
            <div className={css(s.noPersonalInfo)}>
              Absolutely no personal information required
            </div>
          </div>
        )}
      </div>
  )};
};

export default Instructions;
