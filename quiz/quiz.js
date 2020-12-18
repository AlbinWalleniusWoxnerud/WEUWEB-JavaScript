let counter = 0;
let stop = false;
let questionfill = document.getElementsByClassName("question");
let invis = document.getElementsByClassName("invisible");
var formlength = questionfill.length;
var correctAnswerArr = Array(formlength);

function random_question() {
    if (!stop) {

        //Toggle in the invisible elements
        // let invis = document.getElementsByClassName("invisible");
        invis[0].classList.toggle("invisible");

        //Randomly choose an operator with random variables
        let rndOperator = Math.round(Math.floor(Math.random() * 4));
        let A = (Math.floor(Math.random() * 100) + 1);
        let B = (Math.floor(Math.random() * 100) + 1);
        // let questionfill = document.getElementsByClassName("question");
        // let formlength = questionfill.length;
        let answer = 0;
        switch (rndOperator) {
            case 0:
                answer = (A / B);
                questionfill[counter].innerHTML = (`Question ${counter+1}: ${A} / ${B} = ?`);
                break;
            case 1:
                answer = (A * B);
                questionfill[counter].innerHTML = (`Question ${counter+1}: ${A} * ${B} = ?`);
                break;
            case 2:
                answer = (A - B);
                questionfill[counter].innerHTML = (`Question ${counter+1}: ${A} - ${B} = ?`);
                break;
            case 3:
                answer = (A + B);
                questionfill[counter].innerHTML = (`Question ${counter+1}: ${A} + ${B} = ?`);
                break;
        }

        /* let hello = "hello";
        let as1 = document.getElementsByClassName("qs1");
        as1[0].setAttribute('value', hello);
        as1[0].innerHTML = hello; */

        // let correctAnswerArr = Array(formlength);
        // let newEntry = correctAnswerArr.push(answer);

        //Saves the correct answer
        correctAnswerArr[counter] = answer;

        //Randomized the options/answers, 1 true 3 false
        let answers = [
            (`${answer}`),
            (`${(answer) - (Math.floor(Math.random() * 7)+1)}`),
            (`${(answer) * (Math.floor(Math.random() * 1.2)+0.8)}`),
            (`${(answer) + (Math.floor(Math.random() * 7)+1)}`),
        ];

        //Shuffle array
        let array = [ 0, 1, 2, 3];
            let m = array.length, t, i;
            while (m) {
                i = Math.floor(Math.random() * m--);
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }

        //Use shuffled array to randomly assign the options/answers
        let as1 = document.getElementsByClassName("qs1");
        as1[counter].innerHTML = answers[array[0]];

        let as2 = document.getElementsByClassName("qs2");
        as2[counter].innerHTML = answers[array[1]];

        let as3 = document.getElementsByClassName("qs3");
        as3[counter].innerHTML = answers[array[2]];

        let as4 = document.getElementsByClassName("qs4");
        as4[counter].innerHTML = answers[array[3]];
        
        if (counter + 1 == formlength) {
        stop = true;
            // counter = 0;
        }
        else {
            counter++;
        }
    }
}
/* function Check() {
    // let useranswers = document.getElementsByTagName("input:checked");
    let x = document.querySelectorAll("input[type='radio']:checked");
    console.log(x[0])
}

document.getElementsClassName("option").addEventlistener("click", unHide);

function unHide() {
    invis[0].classList.toggle("invisible");
}

console.log((Math.floor(Math.random() * 100) + 1) / (Math.floor(Math.random() * 100) + 1));
let rnd1 = (Math.floor(Math.random() * 100) + 1);
console.log(`${(Math.floor(Math.random() * 100) + 1)} / ${(Math.floor(Math.random() * 100) + 1)} = ?`);

let nodes = document.getElementsByClassName("question"),
    i, len;
    for (i = 0, len = nodes.length; i < len; i++) {
    nodes[i].innerHTML = "...";
}
console.log(`len ${len} i ${i}`);
 */