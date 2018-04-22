var fs = require("fs")

fs.writeFile("movies.txt", "Terminator, hack the code, foo bar", function(err){
    if(err){
        return console.log(err)
    }
    console.log("movies.txt was updated")
})