var codechef = document.getElementById("codechef");
var codeforces = document.getElementById("codeforces");
var card = document.getElementById("card");
var submit = document.getElementById("submit");
var modalBox = document.getElementById("modal-box");
var closeBtn = document.getElementsByClassName("close")[0];
var iscc = false;
var iscf = false;
const i = -32.6292650731585; 
const s = 0.8315620555789333;
const output = document.getElementById("output"); 
const inp = document.getElementById("inp");
const out = document.getElementById("out");
const about = document.getElementById("about");


var handleButtonClick = function () {
    var rank = document.getElementById("rank").value;

    if (rank.trim() !== "") {
        modalBox.style.display = "block";
    }
    if (iscf) {
        var ans = Math.round((rank*s)+i);
        output.innerText = "Rating :- " + ans;
        out.innerText = "Your predicted Codeforces Rating ";
    }
    if (iscc) {
        var ans = Math.round((rank - i) / s);
        output.innerText = "Rating :- " + ans;
        out.innerText = "Your predicted Codechef Rating ";
    }
};

var handleEnterKeyPress = function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        handleButtonClick();
    }
};

var handleCloseModal = function () {
    modalBox.style.display = "none";
    card.style.display = "none";
    document.getElementById("rank").value = null;
    iscc = false;
    iscf = false;
    about.style.display = "block";
};

codechef.onclick = function () {
    card.style.display = "block";
    iscc = true;
    inp.innerText = "Enter Codeforces Rating ";
    about.style.display = "none";
};

codeforces.onclick = function () {
    card.style.display = "block";
    iscf = true;
    inp.innerText = "Enter Codechef Rating ";
    about.style.display = "none";
};

submit.onclick = handleButtonClick;
document.getElementById('rank').addEventListener("keypress", handleEnterKeyPress);
closeBtn.onclick = handleCloseModal;
closeBtn.onkeypress = handleCloseModal;

window.onclick = function (event) {
    if (event.target == modalBox) {
        handleCloseModal();
    }
};