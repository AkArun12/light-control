



let btn = document.getElementById("toggleBtn");

let bulb = document.getElementById("bulb");

btn.addEventListener("click", toggleBulb);

function toggleBulb(e) {
  if(btn.textContent.includes("on")){
    bulb.src="images/bulbon.jpg";
  
    btn.textContent ="Turn off";

  }
  else{

  
    bulb.src="images/bulboff.jpg";
  
    btn.textContent ="Turn on";

  }
 
}
