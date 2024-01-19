const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

//youtube new code
var navLinks = document.getElementById("navLinks");

// function showMenu(){
//     navLinks.style.right = "-170px";
//     // chatgpt/
//     var menuIcon = document.querySelector('.material-icons.menu');
//     var closeIcon = document.querySelector('.material-icons.close');
//     menuIcon.style.display = 'none';
//     closeIcon.style.display = 'flex';
// }

function showMenu() {
   
    var navLinks = document.getElementById("navLinks");
    var menuIcon = document.querySelector('.material-icons.menu');
    var closeIcon = document.querySelector('.material-icons.close');

    
    if (navLinks && menuIcon && closeIcon) {
        navLinks.style.right = "-170px";
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'flex';
    }
}


function hideMenu(){
    navLinks.style.right = "-550px";

    // chatgpt
    var menuIcon = document.querySelector('.material-icons.menu');
    var closeIcon = document.querySelector('.material-icons.close');
    menuIcon.style.display = 'flex';
    closeIcon.style.display = 'none';
}





//chatgpt part
$(document).ready(function() {
    // Function to close the navigation
    function closeNavigation() {
        $('.navigation').addClass('closed');
    }

    // Click event for login button
    $('.btnLogin-popup').on('click', function() {
        // Toggle the 'closed' class on the navigation
        $('.navigation').toggleClass('closed');
    });

    // Click event for other links in the navigation (close on click)
    $('.navigation a').on('click', function() {
        closeNavigation();
    });
});