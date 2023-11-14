let das = document.getElementById("digitSelect");
let dev = document.getElementById("numberInput");

function check() {
    if (parseInt(dev.value) % parseInt(das.value) === 0) {
        document.getElementById("Results").innerHTML = "Divisible";
    } else {
        document.getElementById("Results").innerHTML = "Not Divisible";
    }
}
