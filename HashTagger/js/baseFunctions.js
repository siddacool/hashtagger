/* Base Functions */

/* >>> */

//### website header enable/disable
//+++

function siteHeader(param){
    if(param === 'disable'){
        header.classList.add('hide');
        inputCard.classList.add('mobiInput');
    }
    else{
        header.classList.remove('hide');
        inputCard.classList.remove('mobiInput');
    }
}

//---

/* <<< */