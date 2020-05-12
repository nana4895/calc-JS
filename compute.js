function addChar(input, character) {
    if (input.value == null || input.value == "0")
        input.value = character
    else
        input.value += character
}

function shift(ken) {
    var shift = document.getElementById("shiftBtn");
    var arr = document.getElementsByTagName("input");
    if (ken == 1) {
        shift.setAttribute("onclick", "shift(0)");
        shift.style.backgroundColor = "orange";
        arr[4].value = "sin-1";
        arr[4].setAttribute("onclick", "sin('sin')");
        arr[3].value = "cos-1";
        arr[3].setAttribute("onclick", "cos('cos')");
        arr[5].value = "tan-1";
        arr[5].setAttribute("onclick", "tan('tan')");
        arr[2].value = "log10";
        arr[2].setAttribute("onclick", "log(1)");
        //arr[13].innerHTML = "\u0065";
        //arr[13].setAttribute("onclick", "piore('e')");
    } else {
        shift.setAttribute("onclick", "shift(1)");
        shift.style.backgroundColor = "#0d8fe6d7";
        arr[4].value = "sin";
        arr[4].setAttribute("onclick", "sin('sin')");
        arr[3].value = "cos";
        arr[3].setAttribute("onclick", "cos('cos')");
        arr[5].value = "tan";
        arr[5].setAttribute("onclick", "tan('tan')");
        arr[2].value = "log";
        arr[2].setAttribute("onclick", "log(0)");
        //arr[13].innerHTML = "\u03C0";
        //arr[13].setAttribute("onclick", "piOrE('pi')");
    }

}


function compute(form) {
    form.display.value = eval(form.display.value);
}

function checkNum(str) {
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch < "0" || ch > "9") {
            if (ch != "/" && ch != "*" && ch != "+" && ch != "-" &&
                ch != "." && ch != "(" && ch != ")" && ch != "%") {
                alert("invalid entry!")
                return false
            }
        }
    }
    return true
}

function del(input) {
    input.value = input.value.substring(0, input.value.length - 1)
}

function exponential(form) {
    form.display.value = Math.exp(form.display.value);
}

function sqrt(form) {
    form.display.value = Math.sqrt(form.display.value);
}

function log(form) {
    form.display.value = Math.log(form.display.value);
}

function sin(form) {
    form.display.value = Math.sin(form.display.value);
}


function cos(form) {
    form.display.value = Math.cos(form.display.value);
}

function tan(form) {
    form.display.value = Math.tan(form.display.value);
}

function percent(input) {
    let = input.value;
    input.value = input.value + "%";
}

function changeSign(input) {
    if (input.value.substring(0, 1) == "-")
        input.value = input.value.substring(1, input.value.length)
    else
        input.value = "-" + input.value
}