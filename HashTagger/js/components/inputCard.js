/* input Card */

//### Create
//+++

tagInput.addEventListener('input', function () {
    var inputVal = {};
     
    // trim leading/trailing spaces
    inputVal.original = this.value.trim();
    
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
    
    if (inputVal.original !== '') {
        if (inputVal.original.startsWith('#')) {
            tagOutput.value = inputVal.hashRevert.value;
        }
        else {
            if (inputVal.original.search(/[,;]/) != -1) {
                tagOutput.value = inputVal.commaSeparated.value;
            }
            else {
                tagOutput.value = inputVal.spaceSeparated.value;
            }
        }
    }
    else {
        tagOutput.value = '';
    }
    
})

//---