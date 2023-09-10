let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let convertBtn = document.getElementById("convert");

convertBtn.addEventListener("click", conversion);
function conversion() {
   if(fahrenheit.value=='')
   {
    let f = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));
         
    let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(c.toFixed(2));
   }
   else if(celsius.value=='')
   {
    let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(c.toFixed(2));
    let f = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));
   }
 
}

let reset = document.getElementById("reset");
reset.onclick = function () {
  celsius.value = "";
  fahrenheit.value = "";
};
