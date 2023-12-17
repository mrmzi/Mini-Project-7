let hour = document.getElementById("p1");
let min = document.getElementById("p2");
var sec = document.getElementById("p3");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let x;
b1.addEventListener('mouseup',()=>{
  b1.style.backgroundColor='yellow';
  setTimeout(RANG,500);
  function RANG(){
    b1.style.backgroundColor="";
  }
})
b1.addEventListener("click", () => {

  // x = setTimeout(tenet, 1000);
 x= setInterval(tenet,1000)
  function tenet() {
    if (Number(sec.innerHTML) < 60) {
      sec.innerHTML = Zaman(sec.innerHTML);
      // x = setTimeout(tenet, 1000);
    }

    if (Number(sec.innerHTML) == 60) {
      sec.innerHTML = "00";
      min.innerHTML = Zaman(min.innerHTML);
      // x = setTimeout();
      console.log("3");
    }
    if (Number(min.innerHTML) == 60) {
      sec.innerHTML = "00";
      min.innerHTML = "00";
      hour.innerHTML = Zaman(hour.innerHTML);
      // x = setTimeout();
    }
    function Zaman(num) {
      if (Number(num) < 9) {
        num = Number(num) + 1;
        num = "0" + num;
        return num;
      } else {
        num = Number(num) + 1;
        return num;
      }
    }
  }
});
b2.addEventListener("click", () => {
  // clearTimeout(x);
  clearInterval(x);
});
b3.addEventListener("click", () => {
  location.reload();
});
