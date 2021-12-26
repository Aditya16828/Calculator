let displayport = document.getElementById("display");
let buttons_numpad = document.getElementsByClassName("numpad");
let equalto_button = document.getElementsByClassName("equalto");

let displayValue = "";

for (item of document.getElementsByClassName("braces")) {
    item.addEventListener("click", function (ele) {
        buttonText = ele.target.innerHTML;
        console.log("ButtonText: ", buttonText);
        displayValue += buttonText;
        displayport.value = displayValue;
    });
}

for (item of buttons_numpad) {
    item.addEventListener('click', ele => {
        let buttonText = ele.target.innerHTML;
        console.log("ButtonText: ", buttonText);
        if (buttonText == "mod") {
            buttonText = "%";
        }
        displayValue += buttonText;
        displayport.value = displayValue;
    });
}

document.getElementsByClassName("clear")[0].addEventListener('click', function () {
    displayValue = "";
    displayport.value = displayValue;
});

equalto_button[0].addEventListener('click', function () {
    displayValue = eval(displayport.value);
    displayport.value = displayValue;
});