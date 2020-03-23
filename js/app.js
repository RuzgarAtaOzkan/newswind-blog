// Code written by Ruzgar Ata Ozkan . All rights reserved ©

"use strict";

// edited
const UIController = (() => {

    const nav_nav = document.querySelector('nav');
    const logo_a = document.querySelector('.logo');
    const bannerContent_div = document.querySelector('.banner-content');
    const input_input = document.querySelector('.nav > input')
    const img_input = document.querySelector('.nav > img');
    const privacy_a = document.getElementById('privacy');
    const terms_a = document.getElementById('terms');

    bannerContent_div.style.display = 'none';

    window.onload = () => {
        setTimeout(() => {
            bannerContent_div.style.display = 'block';
            bannerContent_div.style.animation = 'content 1.2s ease';
            bannerContent_div.style.webkitAnimation = 'contentMac 1.2s ease';
        }, 600);
    }

    logo_a.addEventListener('click', () => {
        location.reload();
    });

    img_input.addEventListener('click', (e) => {
        window.find(input_input.value);
    });

    input_input.addEventListener('keydown', (e) => {
        if (e.keyCode === 13 || e.which === 13) {
            window.find(input_input.value);
        }

        console.log(e.keyCode);
    });

    privacy_a.addEventListener('click', () => {
        alert('Coming Soon !!!');
    });

    terms_a.addEventListener('click', () => {
        alert('Coming Soon !!!');
    });
    
    setInterval(() => {
        if (window.pageYOffset === 0) {
            nav_nav.classList.remove('scroll');
        } 
        else {
            nav_nav.classList.add('scroll');
        }
    }, 1000 / 60);
    
})();
