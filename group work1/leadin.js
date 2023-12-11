/* global document, setTimeout */
/* eslint-disable no-undef */
"use strict";
var d = document.getElementById('cletter');

setTimeout(function () {
    d.classList.add('loaded');
}, 500);

document.body.addEventListener('click', function () {
    d.classList.toggle('loaded');
});
 
var animateButton = function (e) {
    e.preventDefault();
    
    var target = e.target;
    target.classList.remove('animate');
    target.classList.add('animate');
    setTimeout(function () {
        target.classList.remove('animate');
        var anchor = target.querySelector('a');
        if (anchor) {
            location.href = anchor.href;
        }
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");
var i;
for (i = 0; i < bubblyButtons.length; i += 1) { bubblyButtons[i].addEventListener('click', animateButton, false);
}