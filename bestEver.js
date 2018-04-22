var fs = require("fs")
//this block of code will read from bestever.txt
fs.readFile("bestever.txt", "utf8", function(error, data){
    //split it by commas
    var o = data.split(",")
    for(var i = 0; i < o.length; i++){
        console.log(o[i])
    }    
})