


var randomCipher = function() {
	var length = 1; 
    var text = "";
    let possible = "01";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

var randomString = function() {
	var length = 256; // 32 bits * 8 = 256
    var text = "";
    let possible = "01";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

/*
Main Code Below, Function Above.
*/

// // Client Hello
// let nonceClient = randomString();
// let prefCipher = randomCipher();
// console.log(nonceClient);
// console.log(prefCipher);


// // Server Hello
// let nonceServer = randomString();
// let realCipher = randomCipher();
// console.log(nonceServer);
// console.log(realCipher);



