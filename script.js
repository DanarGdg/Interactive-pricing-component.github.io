var sliderRange = document.getElementById("range");
var pageviewsNum = document.getElementById("pageviewsValue");
var priceNum = document.getElementById("pricevalue");
var chossPlan = document.getElementById("choosePlan");
var toggle = document.getElementById("chk");
var discount = 1;

sliderRange.addEventListener("click", changePrice)
toggle,addEventListener("click", activeToggle)

sliderRange.addEventListener("mousemove", function() {
  var x = sliderRange.value;
  var color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + x + '%, hsl(0, 0%, 100%)' + x + '%)';
  sliderRange.style.background = color;
})


function changePrice(){
  if(sliderRange.value == 0){
    pageviewsNum.innerHTML = "10K"
    priceNum.innerHTML = "$" + discount * 8 + ".00"
   }

  if(sliderRange.value == 25){
    pageviewsNum.innerHTML = "50K"
    priceNum.innerHTML = "$" + discount * 12 + ".00"
  }

  if(sliderRange.value == 50){
    pageviewsNum.innerHTML = "100K"
    priceNum.innerHTML = "$" + discount * 16 + ".00"
  }

  if(sliderRange.value == 75){
    pageviewsNum.innerHTML = "500K"
    priceNum.innerHTML = "$" + discount * 24 + ".00"
  }

  if(sliderRange.value == 100){
    pageviewsNum.innerHTML = "1M"
    priceNum.innerHTML = "$" + discount * 36 + ".00"
  }
}

function activeToggle(){
  if(toggle.checked){
    chossPlan.innerHTML = '/ year';
    discount = 0.25
    changePrice()
  }else{
    chossPlan.innerHTML = '/ month'
    discount = 1
    changePrice()
  }
}
