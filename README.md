# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop preview of the site](./desktop_preview.png)

### Links

- Solution URL: [Available on github pages](#)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- JavaScript

### What I learned

I learnt a few new tricks with CSS, like how to make a gradient and also how to make a gradient shadow, for example:

```html
<button onclick="validateInput()" id="subscribe">Subscribe to monthly newsletter</button>
<div class="display-on-hover" id="sign-up"></div> <!-- used to make the gradient shadow for button hover state -->
```
The div with the class `display-on-hover` is used to display the gradient background which can then be blurred and used as a button shadow.

```css
/* Styling of the shadow */
.display-on-hover {
    position: absolute;
    background-image: linear-gradient(to right, #fe5378, hsl(4, 100%, 67%));
    height: 50px;
    width: 100%;
    border-radius: 7px;
    filter: blur(20px);
    opacity: 0.8;
    display: none; /* It won't be displayed initially */
}

/* gradient shadow appears when button is hovered over */
button#subscribe:hover + #sign-up {
    display: block;
}
```

For reference, I set both the button and button shadow positioning to `absolute` so that I could play with the `z-index` and be certain that the shadow would appear BEHIND the button (during testing it appeared over the button rather than behind)

### Useful resources

- [W3schools](https://www.w3schools.com/css/) - Helped me with styling certain elements
- [MDN web docs](https://developer.mozilla.org/en-US/) - Helped me a lot with the fetch API and a great general reference

## Author

- Frontend Mentor - [@SushiOnToast](https://www.frontendmentor.io/profile/SushiOnToast)
- CodePen - [@SushiOnToast](https://codepen.io/SushiOnToast)
- CodeWars - [@SushiOnToast](https://www.codewars.com/users/SushiOnToast)
