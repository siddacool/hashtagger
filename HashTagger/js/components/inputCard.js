/* input Card */

//### Create
//+++

tagInput.addEventListener('input', function () {
    var inputVal = {};
    inputVal.original = this.value;
    inputVal.noQuotes = inputVal.original.replace(/["]/g, "");
    inputVal.noSpace = inputVal.noQuotes.replace(/\s/g, "");
    inputVal.noComma = inputVal.noSpace.replace(/[,;]/g, " ");
    inputVal.splitComma = inputVal.noSpace.split(/[,;]/).join(" #");
    inputVal.addTag = '#' + inputVal.splitComma;
    inputVal.removeHash = inputVal.original.replace(/[#]/g, "");
    inputVal.splitSpace = inputVal.removeHash.split(" ").join(", ");
    
    if(inputVal.original.startsWith('#')){
        tagOutput.value = inputVal.splitSpace;
    }
    else{
        tagOutput.value = '#' + inputVal.splitComma;
    }
    
})

//---