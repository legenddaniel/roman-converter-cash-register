
# Roman Converter + Cash Register

- [Introduction](#introduction)
    - [General](#general)
    - [Responsive Design](#responsive-design)
    - [Accessibility](#accessibility)
    - [SEO](#seo)
    - [Performance](#performance)
    - [Browser Test](#browser-test)
    - [Tech Stacks](#tech-stacks)
        - HTML5 + CSS3 + Vanilla Javascript (& ES6+)
        - jQuery 3
        - Bootstrap 4
        - Sass
        - Others
- [Features](#features)
    - [Common](#common)
        - Background Animation
        - Progress Bar
        - Responsive Navigation Bar
        - Browser test
    - [Roman Converter](#roman-converter)
    - [Cash Register](#cash-register)

I am a novice with passion of coding and always try to make it better. I am willing to improve myself and show my talent in this industry. If you have any questions or suggestions or anything else please send me email via zuosiyuan001@gmail.com

---

## Introduction
### General

This small demo contains a simple roman converter and a simple cash register based on my [online tutorial](https://www.freecodecamp.org/certification/legenddaniel/javascript-algorithms-and-data-structures), done by the traditional combination of jQuery + Bootstrap.

I am considering this to be a modularized React project which is better for a SPA that requires lots of DOM manipulation.

More information in the following parts.

Visit my [Github](https://github.com/legenddaniel/roman-converter-cash-register "github.com/legenddaniel") to see the codes, or you can scan the QR code below to open it on your phone.

<!-- <img src="img/qr.png" title="github.com/legenddaniel" alt="something wrong happened"></img> -->
![](img/qr.png "github.com/legenddaniel")

### Responsive Design

This page is designed responsively for screens with various size by Bootstrap. Generally, some tiny display differences under different resolutions. 

Users can see a immediate response even as they resize the screen, which is optimized by debouncing.

### Accessibility

Some semantic html tags were used but some were not (e.g. `<article>, <section>`, etc.).

WAI-ARIA is not involved here, either.

### SEO

Some basic works were done for SEO such as Crawl accessibility increase (e.g. `<meta>`tags containing keywords in `<head>`) and performance enhancement (e.g. improve load speed).

### Performance

Even though for small-size app like this, performance is not that serious issue, codes were modified to improve the performance according to the result of the load speed provided by the Console, by:
- ~~Reducing HTTP request~~ <a href="#performance1"><sup>1</sup></a><sup>, </sup><a href="#performance2"><sup>2</sup></a><sup>, </sup><a href="#performance3"><sup>3</sup></a>
- Reducing stack memory usage
- Reducing lookup along the scope chain
- Reducing reflow

<div>
    <sup id="performance1">1</sup><sub>Bundler or task runner is required. Also, for better code display code compressor was not used, either.</sub>
    <br>
    <sup id="performance2">2</sup><sub>Traditional scripts instead of modules.</sub>
    <br>
    <sup id="performance3">3</sup><sub>Sprites were used.</sub>
</div>

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
- EdgeHTML <a href="#browser-test1"><sup>1</sup></a>
    - Edge 44.18362.449.0
- ~~Trident~~ <a href="#browser-test2"><sup>2</sup></a>
   - ~~IE 11.592.18362.0~~

<div>
    <sup id="browser-test1">1</sup><sub>Tested (simple running, not Mocha) on local server (IIS).</sub>
    <br>
    <sup id="browser-test2">2</sup><sub>Since IEs do not support arrow functions without Babel so this page cannot be loaded on IE.</sub>
</div>

### Tech Stacks
#### HTML5 + CSS3 + Vanilla Javascript (& ES6+)

- HTML5
    - Some new tags e.g. `<header>`
    - Some new attributes e.g. `data-*`
    - Some new APIs e.g. `window.localStorage`
    - ...
- CSS3
    - Flexbox, Grid (Bootstrap)
    - Gradient, transform, transition, animation
    - Border radius
    - ...
- Javascript __Please see the codes__

#### jQuery 3

JQuery was used mainly for DOM manipulation and event listening. 

Even though now javascript can do most of the things jQuery could do, also virtual DOM dominates the front-end dev, some APIs as well as chaining of jQuery are still handy. 

Since this page cannot be loaded on IEs, the latest jQuery 3 rather than 1.x was used.

#### Bootstrap 4

The latest sass-based Bootstrap 4 was mainly used for the layout (Grid & Flexbox). Some Bootstrap components like modals or popovers were also involved.

#### Sass 

Please see the codes

#### Others

- Npm for package management
- IIS for a simple local server environment

## Features
### Common

When the page being first loaded you can see the index with some components

- Background Animation

The background is an animation of a recurrently expansion of a radial gradient of 7 colors. You can switch on/off by clicking the eye icon at the top right corner.

- Progress bar

The progress bar progresses at random steps and intervals and 3s after loaded you can go on to the converter or the register.

- Responsive Navigation Bar

As the width of the window becomes less than 576px the navigation bar will be replaced by a hamburger menu which is commonly seen on mobile Apps.

- Browser Test

The text below the progress bar will change according to which browser you are using, and also that if your browser support localStorage.

### Roman Converter

This no-frills roman converter does a mutual conversion between Arabic numerals and Roman numerals. 

For now it support only numbers between 1 - 3999 as well as the corresponding Roman numerals.

There's a collapsible contentbox at the bottom providing a simple introduction about Roman numerals which is implemented by Bootstrap.

You can also check your i/o, which is stored in the localStorage, in the history modal by clicing the blue button. Your record will be kept until you delete it.

### Cash Register

This cash register system was design as a game mode, more details about this game were provided in the [index.html](https://github.com/legenddaniel/roman-converter-cash-register/blob/master/index.html). You can clone it and open it locally.

The money received is the cash whose face value is just greater than the total (e.g. total 19 received 20) for a purpose of simplification. Also we used the depreciated 1¢ for the same reason.

you can check your score, which is stored in the localStorage, in the score modal by clicing the blue button. Your record will be kept until you delete it.

This cash register system is based on greedy algorithm which is more efficient than DP when the face values of cash are regular ones (e.g. 1, 5, 10 as most types of currencies are). Also the quantity of the cash in the cash register is limited which makes it a little bit complicated.


