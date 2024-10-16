let input = "";
let output = 0;
const maxnumbers = 6;
function button(id) {
    if (input.length<maxnumbers) {
        input = input+id;
        console.log(input);
        document.getElementById("screen").textContent = input;
    }
}
function calc() {
    output = eval(input);
    console.log(output);
    document.getElementById("screen").textContent = output;
}
function c() {
    input = " ";
    output = 0;
    console.log("cleared");
    document.getElementById("screen").textContent = output;
}