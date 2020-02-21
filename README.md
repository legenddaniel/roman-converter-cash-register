<style>
    .footnote {
        font-size: 12px;
        line-height: 12px;
    }
</style>

# Roman Converter + Cash Register

- [Introduction](#introduction)
    - [General](#general)
    - [Responsive Design](#responsive-design)
    - [Accessibility](#accessibility)
    - [SEO](#seo)
    - [Performance](#performance)
    - Roman Converter
    - Cash Register
    - Browser Test
    - Tech Stacks
        - HTML5 + CSS3 + Vanilla Javascript (& ES6+)
        - jQuery 3
        - Bootstrap 4
        - Dart Sass
        - Others
- Features
    - Common
    - Background
    - Progress Bar
    - History
    - Responsive Nav Bar
- Roman Converter
- Cash Register

---

## Introduction
### General

This small demo contains a simple roman converter and a simple cash register based on my online tutorial, done by the traditional combination of jQuery + Bootstrap.

Cash register system is based on greedy algorithm which is more efficient than DP when the face values of cash are regular ones (e.g. 1, 5, 10 as most types of currencies are). Also the quantity of the cash in the cash register is limited which makes it a little bit complicated.

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
- ~~Reducing HTTP request~~ <a href="#performance1"><sup>1</sup></a><sup>, </sup><a href="#performance2"><sup>2</sup></a>
- Reducing stack usage
- Reducing reflow

<div class="footnote">
    <sup id="performance1">1</sup> Bundler or task runner is required. Also, for better code display code compressor was not used, either. 
    <br>
    <sup id="performance2">2</sup> Traditional scripts instead of modules.
</div>

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
- EdgeHTML <a href="#browser-test1"><sup>1</sup></a>
    - Edge 44.18362.449.0
- ~~Trident~~ <a href="#browser-test2"><sup>2</sup></a>
   - ~~IE 11.592.18362.0~~

<div style="font-size: 12px; line-height: 12px;">
    <sup id="browser-test1">1</sup> Tested (simple running, not Mocha) on local server (IIS).
    <br>
    <sup id="browser-test2">2</sup> Since IEs do not support arrow functions without Babel so this page cannot be loaded on IE.
</div>

---