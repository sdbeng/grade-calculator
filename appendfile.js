var fs = require("fs")
// appendFile works effectively the same as writeFile. In fact, it will also create a new file if one does not already exist. Unlike writeFile, however, appendFile won't clear the contents of a file if that file already exists.

//store the text file given to us from the command line
var textFile = process.argv[2]

//the append the string "Hello Tin man" into the file
fs.appendFile(textFile, "Hello Tin man", function(err){
    err ? console.log('err') : console.log('content added!')
})