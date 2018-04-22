var fs = require("fs")
//total, tally up all money in bank balance
//deposit <number>, add positive amount to bank bal
//withdraw <number>, add negative amount to bank bal
// lotto, subtract an amount from bank bal, but if a random number is hit, it should add back a larger amount into bank bal
// register all transactions in bank.txt
// use switch cases to identify type of transactions and amount involved
var action = process.argv[2]  //i.e transaction_type
var transaction_value = process.argv[3]

var total = () => {
    //read bnak file
    fs.readFile("bank.txt", "utf8", function (err, data) {
        // break down all numbers inside
        data = data.split(", ")
        var result = 0
        //loop over and add them together to get a sum
        for (var i = 0; i < data.length; i++) {
            if (parseFloat(data[i])) {
                result += parseFloat(data[i])
            }
        }
        //print final bal rounded to 2 dec
        console.log(`You've a total of ${result.toFixed(2)}`)
    })
}
var deposit = () => {
    //deposit some money
    fs.appendFile("bank.txt", ", " + transaction_value, function (err) {
        if (err) { return console.log('err') }
    })
    console.log(`Deposited ${transaction_value}.`)
}

var withdraw = () => {
    fs.appendFile("bank.txt", ", -" + transaction_value, function (err) {
        if (err) { return console.log('err') }
    })
    console.log(`Withdrew ${transaction_value}.`)
}

var lotto = () => {
    //subtract 25 cents
    fs.appendFile("bank.txt", ", -.25", function (err) {
        if (err) { return console.log(err) }
    })
    //grab rand num
    var chance = Math.floor(Math.random() * 10) + 1
    // if random num eq 1, add $2, otherwise 
    if (chance === 1) {
        fs.appendFile("bank.txt", ", 2", function (err) {
            return console.log(err)
        })
        console.log(`You've won the lotto`)
    } else {
        console.log(`Sorry, you just lost 25 cents.`);
    }
}
//switch case will direct to run specific functions
switch (action) {
    case "total":
        total()
        break;
    case "deposit":
        deposit()
        break;
    case "withdraw":
        withdraw()
        break;
    case "lotto":
        lotto()
        break;
    default:
        "no recon no action dude"
}
