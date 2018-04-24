let t1 = {
    location:'Lake Tahoe'
}
let t2 = {
    location:'Napa'
}

let myreport = (temp) => {
    return {
        tf:`Temperature in Fahrenheit is ${temp}`,
        tc:`Temperature in Celsius is ${(temp-32)*5/9}`,
        tk:`Temperature in Kelvin is ${(temp+459.67)*5/9}`, 
    }
}
let forecastReport = myreport(70)
console.log(forecastReport.tf)
console.log(forecastReport.tc)
console.log(forecastReport.tk)