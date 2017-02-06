import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { font, background, container } from '../../styles/shared';

const styles = StyleSheet.create({
  container,
  cover: background.size.cover,
  bold: font.weight.bold,
  hero: {
    padding: '25px 50px',
    color: '#373e44',
  },
  li: {
    listStyle: 'none',
    fontSize: '22px',
    paddingBottom: '20px',
    display: 'inline-block',
    fontFamily: 'paragraph_regular',
    width: '31%',
    margin: '1%',
    verticalAlign: 'top',
    '@media (max-width: 425px)': {
      width: '100%',
      fontSize: '14px',
      paddingTop: '15px',
      paddingBottom: '15px'
     }
  },
  icon: {
    height: '60px',
    display: 'block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '10px',
    '@media (max-width: 425px)': {
      height: '50px',
     }
  },
  ul: {
    padding: 0
  },
  strong: {
    marginTop: '10px',
    fontWeight: 500
  },
  accordionToggle: {
    background: '#F43D00',
    color: 'white',
    fontSize: '24px',
    padding: '0.5em 0',
    fontFamily: 'heading_regular',
    cursor: 'pointer',
  },
});

const isOnMobile = document.documentElement.clientWidth <= 425;

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
        { this.state.showAccordionToggle && <div className={css(styles.accordionToggle)} onClick={this.toggleMobile}>Tap for Instructions</div> }

        { this.state.showHowItWorks && (
          <div className={css(styles.hero, styles.cover, styles.bgBlue)}>
            <div className={css(styles.container)}>
              <ul className={css(styles.ul)}>
                <li className={css(styles.li)}>
                  <svg className={css(styles.icon)} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z" fill="#0B0C0E"/></svg>
                  Donate to the ACLU
                </li>
                <li className={css(styles.li)}>
                  <svg className={css(styles.icon)} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 1l-15 15h9v16h12v-16h9z" fill="#0B0C0E"/></svg>
                  Upload your receipt below
                </li>
                <li className={css(styles.li)}>
                  <svg className={css(styles.icon)} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" fill="#0B0C0E"/></svg>
                  We'll find matchers to multiply your donation!
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
  )};
};

export default Instructions;
