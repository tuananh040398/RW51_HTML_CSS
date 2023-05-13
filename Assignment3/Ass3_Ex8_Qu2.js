document.getElementById("btnTinhtoan").onclick = function() {
    var n1 = parseInt(document.getElementById("inpCd1").value);
    var n2 = parseInt(document.getElementById("inpCd2").value);
    document.getElementById("outResultCv").value = (n1 + n2) * 2;
    document.getElementById("outResultDt").value = n1 * n2;
};