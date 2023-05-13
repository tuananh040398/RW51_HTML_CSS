document.getElementById("btnCong").onclick = function() {
    var n1 = parseInt(document.getElementById("inpNumber1").value);
    var n2 = parseInt(document.getElementById("inpNumber2").value);
    document.getElementById("outResult").value = n1 + n2;
};

document.getElementById("btnTru").onclick = function() {
    var n1 = parseInt(document.getElementById("inpNumber1").value);
    var n2 = parseInt(document.getElementById("inpNumber2").value);
    document.getElementById("outResult").value = n1 - n2;
};

document.getElementById("btnNhan").onclick = function() {
    var n1 = parseInt(document.getElementById("inpNumber1").value);
    var n2 = parseInt(document.getElementById("inpNumber2").value);
    document.getElementById("outResult").value = n1 * n2;
};

document.getElementById("btnChia").onclick = function() {
    var n1 = parseInt(document.getElementById("inpNumber1").value);
    var n2 = parseInt(document.getElementById("inpNumber2").value);
    document.getElementById("outResult").value = n1 / n2;
};

document.getElementById("btnMod").onclick = function() {
    var n1 = parseInt(document.getElementById("inpNumber1").value);
    var n2 = parseInt(document.getElementById("inpNumber2").value);
    document.getElementById("outResult").value = n1 % n2;
};