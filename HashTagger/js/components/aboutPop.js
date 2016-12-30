/* About Pop */

//### Create
//+++

//## Launch about onclick title
title.addEventListener('click',function() {
    header.classList.add('hide');
    cardHolder.classList.add('expand');
    setTimeout(function(){
        aboutPopup.classList.add('show');
    }, 200);
});

//## Back to homepage
backButtonAboutPopup.addEventListener('click',function(){
    aboutPopup.classList.remove('show');
    setTimeout(function(){
        cardHolder.classList.remove('expand');
        header.classList.remove('hide');
    }, 200);
})

//---