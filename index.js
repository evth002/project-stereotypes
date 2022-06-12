//https://www.figma.com/file/FfmRGQ6FTpnq3gP95jBGed/%D1%81%D1%82%D0%B5%D1%80%D0%B5%D1%82%D0%BE%D1%82%D0%B8%D0%BF%D1%8B-fixed?node-id=0%3A1

let entrance = document.querySelector('#entrance');
let registraion = document.querySelector('#registraion');
let openEntranceButton = document.querySelector('#open_entrance_button');
let userButton = document.querySelector('.user_profile_icon');
let windowCloser = document.querySelector('#window_closer');
let windowCloser2 = document.querySelector('#window_closer2');

userButton.addEventListener('click', function(event){
    event.preventDefault();
    registraion.classList.remove('registraion_closed');
})
openEntranceButton.addEventListener('click', function(event){
    event.preventDefault();
    registraion.classList.add('registraion_closed');
    entrance.classList.remove('entrance_closed');
})
windowCloser.addEventListener('click', function(event){
    event.preventDefault();
    registraion.classList.add('registraion_closed');
    entrance.classList.add('entrance_closed');
})
windowCloser2.addEventListener('click', function(event){
    event.preventDefault();
    registraion.classList.add('registraion_closed');
    entrance.classList.add('entrance_closed');
})

let passwordInput = document.querySelector('#password_input');
let iEye = document.querySelector('.fa-eye');
let iEyeSlash = document.querySelector('.fa-eye-slash');

iEye.addEventListener('click', function(event){
    event.preventDefault();
    passwordInput.type = 'text';

    iEye.style.visibility = 'hidden';
    iEye.style.opacity = 0;
    iEyeSlash.style.visibility = 'visible';
    iEyeSlash.style.opacity = 1;
})
iEyeSlash.addEventListener('click', function(event){
    event.preventDefault();
    passwordInput.type = 'password';

    iEye.style.visibility = 'visible';
    iEye.style.opacity = 1;
    iEyeSlash.style.visibility = 'hidden';
    iEyeSlash.style.opacity = 0;
})






