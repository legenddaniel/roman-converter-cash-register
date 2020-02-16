# Roman Converter Cash Register
This small demo contains a simple roman converter and a simple cash register based on my online tutorial, done by the traditional combination of jQuery + Bootstrap.

Cash register system is based on greedy algorithm which is more efficient than DP when the face values of cash are regular ones (e.g. 1, 5, 10 as most types of currencies are). Also the quantity of the cash in the cash register is limited which makes it a little bit complicated.

I am considering this to be a React project since React is more friendly to SPA which requires lots of DOM manipulation.

Visit my [Github](https://github.com/legenddaniel/roman-converter-cash-register "github.com/legenddaniel") to see the codes, or you can scan the QR code below to open it on your phone.

<img src="img/qr.png" title="github.com/legenddaniel" alt="Maybe you cannot use this shortcut somehow..." style="width: 20%">

---

<h2>Table of Contents</h2>

[toc]
1. Introduction
    1. General
        1. Single-page Application
        1. Responsive Design
        1. Basic Modularization
    1. Roman Converter
    1. Cash Register
    1. Tech Stacks
        1. HTML5 + CSS3 + Vanilla Javascript (& ES6+)
        1. jQuery 3
        1. Bootstrap 4
        1. Dart Sass
1. Features
    1. Common
        1. Background
        1. Progress Bar
        1. History
        1. Responsive Nav
    1. Roman Converter
    1. Cash Register

---
### Browser test

Tested on these browsers: _(Oldest versions only)_

- Chromium
    - Chrome 70.0.3538.25
    - Opera 66.0.3515.72
    - Android 5.0 (Chrome Dev tools)
- Gecko
    - Firefox 72.0.2
- Webkit
    - Safari 10.0 (Chrome Dev tools)
- EdgeHTML <a href="#note1"><sup>1</sup></a>
    - Edge 44.18362.449.0
- ~~Trident~~ <a href="#note2"><sup>2</sup></a>
   - ~~IE 11.592.18362.0~~

<div style="font-size: 12px; line-height: 12px;">
    <sup id="note1">1</sup> Tested (simple running, not Mocha) on local server (IIS).
    <br>
    <sup id="note2">2</sup> Since IEs do not support arrow functions without Babel so this page cannot be loaded on IE.
</div>

---