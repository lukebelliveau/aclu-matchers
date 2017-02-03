import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import Cloudwok from './ACLUCloudwok';
import {font, background, whitespace, container, colors} from '../styles/shared';

const styles = {
  container,
  cover: background.size.cover,
  mt0: whitespace.margins.mt0,
  bold: font.weight.bold,
  hero: {
    padding: '50px',
    paddingBottom: 0,
    color: '#373e44',
    '@media (max-width: 425px)': {
      padding: '20px',
     }
  },
  li: {
    listStyle: 'none',
    fontSize: '22px',
    paddingBottom: '20px',
    display: 'inline-block',
    fontFamily: 'open_sansregular',
    width: '31%',
    margin: '1%',
    verticalAlign: 'top',
    '@media (max-width: 425px)': {
      width: '100%',
      fontSize: '14px'
     }
  },
  icon: {
    height: '60px',
    display: 'block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '10px',
    '@media (max-width: 425px)': {
      height: '40px',
     }
  },
  ul: {
    padding: 0
  },
  number: {
    background: '#095D96',
    borderRadius: '50%',
    padding: '10px 20px',
    marginBottom: '30px',
    color: 'white',
    '@media (max-width: 425px)': {
      padding: '5px 11px',
      marginBottom: '10px'
    }
  },
  a: {
    color: 'white',
    textDecoration: 'none',
    borderRadius: '7px',
    padding: '15px 30px',
    background: '#ff8a00',
    fontSize: '22px',
    marginBottom: '15px',
    display: 'inline-block',
    '@media (max-width: 425px)': {
      margin: '10px 15px',
     }
  },
  strong: {
    marginTop: '10px',
    fontWeight: 500
  }
}

const style = StyleSheet.create(styles)

const Instructions = () => (
  <div>
    <div className={css(style.hero, style.cover, style.bgBlue)}>
      <div className={css(style.container)}>
        <h2 className={css(style.mt0)}>How it works</h2>
        <ul className={css(style.ul)}>
          <li className={css(style.li)}>
            <number className={css(style.number)}>1</number>
            <svg className={css(style.icon)} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"/></svg>
            Donate to ACLU
          </li>
          <li className={css(style.li)}>
            <number className={css(style.number)}>2</number>
            <svg className={css(style.icon)} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"/></svg>
            Drag & drop your receipt below
          </li>
          <li className={css(style.li)}>
            <number className={css(style.number)}>3</number>
            <svg className={css(style.icon)} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"/></svg>
            we'll find more matchers!
          </li>
        </ul>
      </div>
    </div>
    <Cloudwok />
    <h2>Haven't donated yet?</h2>
    <div className={css(style.bold)}>
      <h2>
        <a className={css(style.a)} href="https://action.aclu.org/secure/donate-to-aclu">Donate to the American Civil Liberties Union</a>
      </h2>
    </div>
  </div>
);

export default Instructions;
