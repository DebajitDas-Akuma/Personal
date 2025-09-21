
let input_div = document.getElementById("input_div")
let getName_input = document.getElementById("getName_input")
let input_div_btn = document.getElementById("input_div_btn")


//displaying user greet
let userTreat= document.getElementById("userTreat")
function treat () {
				let name = localStorage.getItem("name")
				setTimeout(()=>{
								userTreat.innerText = "Hi, " + name + ". \n\n\t Please enjoy my own developed website. 😎"
								userTreat.classList.add("treatUser_shown")
								userTreat.classList.remove("treatUser_hidden")
								userTreat.onclick = ()=>{
												userTreat.classList.remove("treatUser_shown")
												userTreat.classList.add("treatUser_hidden")
								}
				}, 1700)
}


let nameValue = localStorage.getItem("name")
if ( nameValue == null){
				input_div.classList.remove("getName_hidden")
				input_div.classList.add("getName_shown")
				
				input_div_btn.onclick = ()=>{
								nameValue = getName_input.value;
								if (nameValue == "") {
												nameValue = "Anonymous"
								}
								input_div.classList.add("getName_hidden")
								input_div.classList.remove("getName_shown")

								localStorage.setItem("name", nameValue)
								treat()
				}
}
else{
				input_div.classList.add("getName_hidden")
				treat()
}
