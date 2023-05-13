function main(){
    var ten = window.prompt("Nhập tên");
    var tuoi = window.prompt("Nhập tuổi");

    document.write("Chào bạn: <b> " + ten +"</b><br>");
    document.write("Tuổi của bạn là: " + tuoi)
};

// function main(){
  
// };

  document.getElementById("btnPhanTich").onclick = function(){
      var inp = document.getElementById("inpTen").value;
      for(x in inp) {
          var i = parseInt(x) + 1;
          console.log("ký tự thứ " + i + " là " + inp[x].toUpperCase());
      }
  }

main();

