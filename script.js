function romanConverter() {
    const convert = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    }
    let output = document.getElementById("output");
    let x = document.getElementById("number").value;

    let result = "";
    let number = Object.keys(convert);
    let roman = Object.values(convert);

    if (!(x) || x === "" || x <= 0 || x > 3999 || !Number.isInteger(+x)) {
        if (x > 3999) {
            output.innerText = "Please enter a number less than or equal to 3999";
            output.style.color = "red";
            output.style.backgroundColor = "#ffe6e6"
        } else if (!x) {
            output.innerText = "Please enter a valid number";
            output.style.color = "red";
            output.style.backgroundColor = "#ffe6e6"
        } else if (Number(x) <= 0) {
            output.innerText = "Please enter a number greater than or equal to 1";
            output.style.color = "red";
            output.style.backgroundColor = "#ffe6e6"
        }
        return;
    }
    x = Number(x);
    for (let i = number.length - 1; i >= 0; i-- ) {
        while (x >= number[i]) {
            if (x >= number[i]) {
                x -= number[i];
                result += roman[i]
            }
        }
    }
    output.innerText = `${result}`
    

}
let convertBtn = document.getElementById("convert-btn");
convertBtn.onclick = romanConverter;
