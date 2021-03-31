var toggleWrap = document.getElementById('toggleWrap');
var toggleBall = document.getElementById('toggleBall');
var sliderRange = document.getElementById("range");
var priceNum = document.getElementById("priceNum");
var planPrice = document.getElementById("planPrice");
var pageviewsNum = document.getElementById("pageviewsNum");
var discount = 1;


toggleWrap.addEventListener("click", function() {
  toggleBall.classList.toggle("transition")
})

sliderRange.addEventListener("mousemove", function() {
  var x = sliderRange.value;
  var color = "linear-gradient(90deg, hsl(174, 77%, 80%)" + x + "%" + ", hsl(224, 65%, 95%)" + x + "%)"
  sliderRange.style.background = color
})

sliderRange.addEventListener("mousemove", changePrice);

toggleWrap.addEventListener("click", activeToggle);

function changePrice(){
  if(sliderRange.value == 0){
    pageviewsNum.innerHTML = "10K";
    priceNum.innerHTML = "$" + discount * 8 + ".00" ;
  }
  else if(sliderRange.value == 25){
    pageviewsNum.innerHTML = "50K";
    priceNum.innerHTML = "$" + discount * 12 + ".00" ;
  }
  else if(sliderRange.value == 50){
    pageviewsNum.innerHTML = "100K";
    priceNum.innerHTML = "$" + discount * 16 + ".00" ;
  }
  else if(sliderRange.value == 75){
    pageviewsNum.innerHTML = "500K";
    priceNum.innerHTML = "$" + discount * 24 + ".00" ;
  }else{
    pageviewsNum.innerHTML = "1M";
    priceNum.innerHTML = "$" + discount * 36 + ".00" ;
  }
}

function activeToggle(){
  if(toggleBall.classList.contains("transition")){
    discount = 0.25
    planPrice.innerHTML = "/year"
    changePrice()
  }else{
    planPrice.innerHTML = "/month"
    discount = 1
    changePrice()
  }
}
