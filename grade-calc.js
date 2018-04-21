// console.log('grade calc works')
/* 
function that passes in: students score, total possible score
For ex. 15/20 correct answers mean they got a C which is a 75%
Print out: You got a C (75%)!
Letter Grade:
A 90-100
B 80-89
C 70-79
D 60-69
F 0-59 (anything that falls under 60, pretty much)
*/

let gradeCalc = (score, totalScore) => {
    let percent = (score / totalScore) * 100 //i.e 75%
    if(percent >= 90){
        console.log(`You got an A (${percent}%)!`);
    }
    else if(percent >= 80 && percent < 89){
        console.log(`You got a B (${percent}%)!`);
    }
    else if(percent >= 70 && percent < 79){
        console.log(`You got a C (${percent}%)!`);
    }
    else if(percent >= 60 && percent < 69){
        console.log(`You got a C (${percent}%)!`);
    }else{
        console.log(`You got an F (${percent}%)!`);
    }
}

//test func
gradeCalc(1, 20)