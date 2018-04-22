var fs = require("fs")

// fs.writeFile("movies.txt", "Terminator, hack the code, foo bar", function(err){
//     if(err){
//         return console.log(err)
//     }
//     console.log("movies.txt was updated")
// })
fs.writeFile("bestever.txt", "code everyday, eat gelatto ice cream, and code more", function(err){
    if(err){
        return console.log(err)
    }
    console.log("bestever.txt was up")
})