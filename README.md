# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshots
**Desktop**
![](./screenshots/desktop.png)
**Mobile**
![](./screenshots/mobile.png)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

I learned how to work with various different viewports and how to make the accordion work using javascript.

### Javascript code for image in mobile view
```js
if(window.screen.width < 1080){
    new_el = document.createElement("img");
    new_el1 = document.createElement("img");
    new_el.setAttribute("src","./images/bg-pattern-mobile.svg")
    new_el1.setAttribute("src","./images/illustration-woman-online-mobile.svg")
    new_el.classList.add("mobile-bg");
    new_el1.classList.add("mobile-img");
    images.appendChild(new_el);
    images.appendChild(new_el1);

}
```


### Continued development

I want to work on using svgs and images in a much better way in my future project. The approach I used here is not good and does not work that well with all the viewports. Hence, I would like to improve my technique regarding images.


### Useful resources

- [Accordion using HTML, CSS and JS](https://www.w3schools.com/howto/howto_js_accordion.asp) - This is an amazing article which helped me finally understand how accordions work. I'd recommend it to anyone wanting to learn about them.

## Author

- Frontend Mentor - [@Azi-01](https://www.frontendmentor.io/profile/Azi-01)
- Instagram - [@Azi00.00](https://www.instagram.com/azi00.00)

