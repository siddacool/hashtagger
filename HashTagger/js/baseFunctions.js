/* Base Functions */

/* >>> */

//### website header enable/disable
//+++

function siteHeader(param){
    if(param === 'disable'){
        header.classList.add('hide');
        cardHolder.classList.add('deskInput');
    }
    else{
        header.classList.remove('hide');
        cardHolder.classList.remove('deskInput');
    }
}

//---

/* <<< */