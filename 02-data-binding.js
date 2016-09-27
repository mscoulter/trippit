var user_input = document.getElementById("name");
var output = document.getElementById("output")

document.addEventListener("keyup", function(){
  output.innerHTML = "Hello, my name is " + user_input.value
})
