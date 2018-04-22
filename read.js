var fs = require("fs")
//this block of code will read from movies.txt
fs.readFile("movies.txt", "utf8", function(error, data){
    console.log(data)
    //split it by commas
    var dataArr = data.split(",")
    console.log(dataArr)
})