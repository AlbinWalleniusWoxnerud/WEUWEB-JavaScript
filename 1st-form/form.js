
function Quiz() {
}

warning = "猫";
somthing = "運動するのが大好きです";

function AlertCat(){
    window.alert(warning)
}

/* function writesomething() {
    document.write(somthing)
} */

function writesomething() {
    document.querySelector(".p").classList.toggle("invisible");
    document.querySelector(".butt").classList.toggle("invisible");
    document.getElementById("death").innerHTML = somthing;
}

function rehide() {
    document.querySelector(".p").classList.toggle("invisible");
    document.querySelector(".butt").classList.toggle("invisible");
}

var albin = true;
var someTest = 'he "was" there';
var someTestSome = 'he \b there';

console.log(someTestSome)