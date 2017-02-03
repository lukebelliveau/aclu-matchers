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
    color: '#373e44',
    '@media (max-width: 425px)': {
      padding: '20px',
     }
  },
  li: {
    listStyle: 'none',
    fontSize: '22px',
    paddingBottom: '20px',
    fontWeight: 500,
    display: 'inline-block',
    width: '31%',
    margin: '1%',
    verticalAlign: 'top',
    '@media (max-width: 425px)': {
      width: '100%',
     }
  },
  icon: {
    height: '60px',
    display: 'block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '10px'
  },
  ul: {
    padding: 0
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
            <i>
              <svg className={css(style.icon)} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"/></svg>
            </i>
            Drag and drop your receipt below
          </li>
          <li className={css(style.li)}>
            <i>
              <svg className={css(style.icon)} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"/></svg>
            </i>
            Your receipt will be tweeted to 10 donors
          </li>
          <li className={css(style.li)}>
            <i>
              <svg className={css(style.icon)} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"/></svg>
            </i>
            This will multiply your donation by 10
          </li>
        </ul>
        <strong className={css(style.strong)}>Absolutely no personal information is required.</strong>
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
