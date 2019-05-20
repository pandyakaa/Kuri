var express = require('express')

var app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function isUpperCase(ch) {
    return ch === ch.toUpperCase();
}

function caesarEncrypt(text,ciphkey) {
    var strtemp = '';

    for (var i = 0 ; i < text.length ; i++) {
        if (isUpperCase(text[i])) {
            strtemp += String.fromCharCode((parseInt(text.charCodeAt(i)) + parseInt(ciphkey) - 65 ) % parseInt(26) + parseInt(65));
        } else {
            strtemp += String.fromCharCode((parseInt(text.charCodeAt(i)) + parseInt(ciphkey) - 97 ) % parseInt(26) + parseInt(97));
        }
    }
    return strtemp;
}

function caesarDecrypt(text,ciphkey) {
    var strtemp = '';

    for (var i = 0 ; i < text.length ; i++) {
        if (isUpperCase(text[i])) {
            strtemp += String.fromCharCode((parseInt(text.charCodeAt(i)) - parseInt(ciphkey) + 65 ) % parseInt(26) + parseInt(65));
        } else {
            strtemp += String.fromCharCode((parseInt(text.charCodeAt(i)) - parseInt(ciphkey) + 97 ) % parseInt(26) + parseInt(97));
        }
    }
    return strtemp;
}

function vigenereEncrypt(text,key) {
    var strtemp = '';

    for (var i = 0 , j = 0 ; i < text.length ; i++) {
        if (isUpperCase(text[i])) {
            strtemp += String.fromCharCode((parseInt(text.charCodeAt(i)) + parseInt(key.charCodeAt(j % key.length)) - 130 ) % parseInt(26) + parseInt(65));
            j++;
        } else {
            strtemp += String.fromCharCode((parseInt(text.charCodeAt(i)) + parseInt(key.charCodeAt(j % key.length)) - 194 ) % parseInt(26) + parseInt(97));
            j++;
        }
    }
    return strtemp;
}

function vigenereDecrypt(text,key) {
    var strtemp = '';

    for (var i = 0 , j = 0 ; i < text.length ; i++) {
        if (isUpperCase(text[i])) {
            strtemp += String.fromCharCode((parseInt(text.charCodeAt(i)) - parseInt(key.charCodeAt(j % key.length)) + 130 ) % parseInt(26) + parseInt(65));
            j++;
        } else {
            strtemp += String.fromCharCode((parseInt(text.charCodeAt(i)) - parseInt(key.charCodeAt(j % key.length)) + 194 ) % parseInt(26) + parseInt(97));
            j++;
        }
    }
    return strtemp;
}

app.post("/caesarencrypt", (req, res) => {
    res.json(caesarEncrypt(req.body.plaintext,req.body.key));
   });

app.post("/caesardecrypt", (req, res) => {
    res.json(caesarDecrypt(req.body.ciphertext,req.body.key));
   });

app.post("/vigenereencrypt",(req,res) => {
    res.json(vigenereEncrypt(req.body.plaintext,req.body.key));
});

app.post("/vigeneredecrypt",(req,res) => {
    res.json(vigenereDecrypt(req.body.ciphertext,req.body.key));
});

app.listen(8000, () => {
 console.log("Server running on port 8000");
});

