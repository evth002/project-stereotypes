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

let passwordInput1 = document.querySelector('.password_input1');
let passwordInput2 = document.querySelector('.password_input2');
let iEye1 = document.querySelector('.fa-eye1');
let iEyeSlash1 = document.querySelector('.fa-eye-slash1');
let iEye2 = document.querySelector('.fa-eye2');
let iEyeSlash2 = document.querySelector('.fa-eye-slash2');


iEye1.addEventListener('click', function(event){
    event.preventDefault();
    passwordInput1.type = 'text';

    iEye1.style.visibility = 'hidden';
    iEye1.style.opacity = 0;
    iEyeSlash1.style.visibility = 'visible';
    iEyeSlash1.style.opacity = 1;
})
iEye2.addEventListener('click', function(event){
    event.preventDefault();
    passwordInput2.type = 'text';

    iEye2.style.visibility = 'hidden';
    iEye2.style.opacity = 0;
    iEyeSlash2.style.visibility = 'visible';
    iEyeSlash2.style.opacity = 1;
})
iEyeSlash1.addEventListener('click', function(event){
    event.preventDefault();
    passwordInput1.type = 'password';

    iEye1.style.visibility = 'visible';
    iEye1.style.opacity = 1;
    iEyeSlash1.style.visibility = 'hidden';
    iEyeSlash1.style.opacity = 0;
})
iEyeSlash2.addEventListener('click', function(event){
    event.preventDefault();
    passwordInput2.type = 'password';

    iEye2.style.visibility = 'visible';
    iEye2.style.opacity = 1;
    iEyeSlash2.style.visibility = 'hidden';
    iEyeSlash2.style.opacity = 0;
})


let regularHeart = document.querySelectorAll('.regular-heart');
let solidHeart = document.querySelectorAll('.solid-heart');

let likesAmount = document.querySelectorAll('.likes_amount');
let like = document.querySelectorAll('.like');

for (let i = 0; i < 10000000000; i++) {
    regularHeart[i].addEventListener('click', function(event) {
        event.preventDefault();
        regularHeart[i].style.opacity = 0;
        regularHeart[i].style.visibility = 'hidden';
        solidHeart[i].style.opacity = 1;
        solidHeart[i].style.visibility = 'visible';
        
        likesAmount[i].innerText = Number(likesAmount[i].innerText) + 1;
    })
    solidHeart[i].addEventListener('click', function(event) {
        event.preventDefault();
        regularHeart[i].style.opacity = 1;
        regularHeart[i].style.visibility = 'visible';
        solidHeart[i].style.opacity = 0;
        solidHeart[i].style.visibility = 'hidden';
        
        likesAmount[i].innerText = Number(likesAmount[i].innerText) - 1;
    })
}

let userIcon = document.getElementById('#user_icon');
let userName = document.getElementById('#user_name');


let commentInput = document.querySelectorAll('.add_comment_input_text');
let commentText = document.querySelectorAll('.comment_text');
let seeAllComments = document.querySelectorAll('.see_all_comments');
let comments = document.querySelectorAll('.comments');

// for (i = 0; i < 10000000000; i++) {
//     commentInput[i].addEventListener('click', function(event) {
//         event.preventDefault;
//         commentInput[i].placeholder = ' ';
//         commentInput[i].style.border = 'solid 2px #73D273';
//     })
//     commentInput[i].addEventListener('submit', function(event) {
//         event.preventDefault;
//         let comment = document.createElement('div');
//         let commentText = document.createElement('p');
//         commentText.innerText = commentInput[i].value;
//         comment.appendChild(userIcon);
//         comment.appendChild(userName);
//         comment.appendChild(commentText);
//         comments.appendChild(comment);
//     })
//     seeAllComments[i].addEventListener('click', function(event) {
//         event.preventDefault;
//         coments[i].style.visibility = 'visible';
//         coments[i].style.opacity = 0;
//     })
// }


let modePosts = document.querySelector('.mode_posts');
let modeOpinions = document.querySelector('.mode_opinions');
let userPosts = document.querySelector('.users_posts');
let userOpinions = document.querySelector('.users_opinions');
let postsHr = document.querySelector('.mode_posts_hr');
let opinionsHr = document.querySelector('.mode_opinions_hr');

modePosts.addEventListener('click', function(event) {
    event.preventDefault;
    userPosts.style.opacity = 1;
    userPosts.style.visibility = 'visible';
    userOpinions.style.opacity = 0;
    userOpinions.style.visibility = 'hidden';

    postsHr.style.border = '#73D273 2px solid';
    opinionsHr.style.border = 'gray 1px solid'
})
modeOpinions.addEventListener('click', function(event) {
    event.preventDefault;
    userPosts.style.opacity = 0;
    userPosts.style.visibility = 'hidden';
    userOpinions.style.opacity = 1;
    userOpinions.style.visibility = 'visible';
    opinionsHr.style.border = '#73D273 2px solid';
    postsHr.style.border = 'gray 1px solid'
})