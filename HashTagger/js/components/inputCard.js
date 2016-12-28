/* input Card */

//### Create
//+++

tagInput.addEventListener('input', function () {
    var inputVal = {};
     
    // trim leading/trailing spaces
    inputVal.original = this.value.trim();
    
    // set final value to blank for now
    inputVal.finale = '';
    
    // Separation based on commas and semicolons
    inputVal.commaSeparated = {};
    // Remove double quotes
    inputVal.commaSeparated.ekh = inputVal.original.replace(/["]/g, "");
    // Remove all white spaces
    inputVal.commaSeparated.doh = inputVal.commaSeparated.ekh.replace(/\s/g, "");
    // replace commas/semicolons with hashtags
    inputVal.commaSeparated.tin = inputVal.commaSeparated.doh.split(/[,;]/).join(" #");
    // add hastag at the begining
    inputVal.commaSeparated.value = '#' + inputVal.commaSeparated.tin;
    
    // Separation based on Spaces
    inputVal.spaceSeparated = {};
    // replace spaces with hashtags
    inputVal.spaceSeparated.ekh = inputVal.original.split(" ").join(" #");
    // add hastag at the begining
    inputVal.spaceSeparated.value = '#' + inputVal.spaceSeparated.ekh;
    
    // convert hastags to comma separated text
    inputVal.hashRevert = {};
    // remove hastags
    inputVal.hashRevert.ekh = inputVal.original.replace(/[#]/g, "");
    // add commas
    inputVal.hashRevert.value = inputVal.hashRevert.ekh.split(" ").join(", ");
    
    // set value for inputVal.finale
    if (inputVal.original !== '') {
        // if already a hastag
        if (inputVal.original.startsWith('#')) {
            inputVal.finale = inputVal.hashRevert.value;
        }
        else {
            // if comma/semicolon separated
            if (inputVal.original.search(/[,;]/) != -1) {
                inputVal.finale = inputVal.commaSeparated.value;
            }
            // space separated
            else {
                inputVal.finale = inputVal.spaceSeparated.value;
            }
        }
    }
    
    // set font size based on string length (inputVal.finale)
    if((inputVal.finale.length >= 80) && (inputVal.finale.length <= 129)){
        cardHolder.setAttribute('data-font','break.mob');
    }
    else if(inputVal.finale.length >= 130){
        cardHolder.setAttribute('data-font','break.deskMix');
    }
    else {
        cardHolder.removeAttribute('data-font');
    }
    
    // assign final value
    tagOutput.value = inputVal.finale;
});

//---