var fs = require("fs")
//total, tally up all money in bank balance
//deposit <number>, add positive amount to bank bal
//withdraw <number>, add negative amount to bank bal
// lotto, subtract an amount from bank bal, but if a random number is hit, it should add back a larger amount into bank bal
// register all transactions in bank.txt
// use switch cases to identify type of transactions and amount involved
var transaction_type = process.argv[2]  
var transaction_value = process.argv[3]  

