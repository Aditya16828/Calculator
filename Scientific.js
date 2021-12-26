let displayport = document.getElementById("display");
let buttons_numpad = document.querySelectorAll(".numpad");
let equalto_button = document.getElementsByClassName("equalto");
let button_scntfc = document.querySelectorAll(".scientific");
let anglemode = document.getElementsByClassName("anglemode");
let constants = document.getElementsByClassName("constants");

for (item of constants) {
    item.addEventListener("click", function (ele) {
        let buttonText = ele.target.innerHTML;
        if (buttonText == "π") {
            displayport.value = Math.PI;
        } else if (buttonText == "e") {
            displayport.value = Math.exp(1);
        }
    });
}

for (item of document.querySelectorAll(".braces")) {
    item.addEventListener("click", function (ele) {
        buttonText = ele.target.innerHTML;
        console.log("ButtonText: ", buttonText);
        displayValue += buttonText;
        displayport.value = displayValue;
    });
}

function factorial(x) {
    let res = 1;
    for (let i = 2; i <= x; i++) {
        res = res * x;
    }
    return res;
}

let displayValue = "";
document.getElementsByClassName("anglemode")[0].disabled = true;
document.getElementsByClassName("anglemode")[1].onclick = function () {
    document.getElementsByClassName("anglemode")[1].disabled = true;
    document.getElementsByClassName("anglemode")[0].disabled = false;
}

document.getElementsByClassName("anglemode")[0].onclick = function () {
    document.getElementsByClassName("anglemode")[0].disabled = true;
    document.getElementsByClassName("anglemode")[1].disabled = false;
}

function solve_scntfc(str) {
    let param = displayport.value;
    if (str == "sin") {
        if (anglemode[1].disabled) {
            param = (Math.PI / 180) * param;
        }
        return Math.sin(param);
    } else if (str == "cos") {
        if (anglemode[1].disabled) {
            param = (Math.PI / 180) * param;
        }
        return Math.cos(param);
    } else if (str == "tan") {
        if (anglemode[1].disabled) {
            param = (Math.PI / 180) * param;
        }
        return Math.tan(param);
    } else if (str == "ln") {
        return Math.log(param);
    } else if (str == "log") {
        return Math.log10(param);
    } else if (str == "√") {
        return Math.sqrt(param);
    } else if (str == "x!") {
        return factorial(param);
    } else if (str == "EXP") {
        return Math.exp(param);
    } else if (str == "sin-1") {
        let ans = Math.asin(parseFloat(param));
        if (anglemode[1].disabled) {
            ans = (180 / Math.PI) * ans;
        }
        return ans;
    } else if (str == "cos-1") {
        let ans = Math.acos(parseFloat(param));
        if (anglemode[1].disabled) {
            ans = (180 / Math.PI) * ans;
        }
        return ans;
    } else if (str == "tan-1") {
        let ans = Math.atan(parseFloat(param));
        if (anglemode[1].disabled) {
            ans = (180 / Math.PI) * ans;
        }
        return ans;
    }
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

for (item of button_scntfc) {
    item.addEventListener("click", ele => {
        let buttonText = ele.target.innerHTML;
        console.log("ButtonText: ", buttonText);
        displayValue = solve_scntfc(buttonText);
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

function disableit() {
    if (document.getElementsByClassName("inv")[0].innerHTML == "inv") {
        document.getElementsByClassName("inv")[0].innerHTML = "revert";
        for (let i = 1; i <= 3; i++) {
            button_scntfc[i].innerHTML = button_scntfc[i].innerHTML + "-1";
        }
    }
    else if (document.getElementsByClassName("inv")[0].innerHTML == "revert") {
        document.getElementsByClassName("inv")[0].innerHTML = "inv";
        for (let i = 1; i <= 3; i++) {
            if (button_scntfc[i].innerHTML == "sin-1")
                button_scntfc[i].innerHTML = "sin";
            else if (button_scntfc[i].innerHTML == "cos-1")
                button_scntfc[i].innerHTML = "cos";
            else if (button_scntfc[i].innerHTML == "tan-1")
                button_scntfc[i].innerHTML = "tan";
        }
    }
}

