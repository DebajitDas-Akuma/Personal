
//alert("The Website is Still Under Construction !! ")

let iter = 0
let pBtn = document.getElementById("profileBTN")

pBtn.addEventListener( "click", function handler(){
				pBtn.classList.add("pBtn_toggled")
				pBtn.classList.remove("profileBTN")
				pBtn.removeEventListener("click",handler)	
				setTimeout(()=>{
								pBtn.innerHTML = '<div id="clickBox"><button id="pBtn_cancel">×</button><ul class="pBtn_flex"><li><a href="https://www.chess.com/member/debajit_05">Chess ID</a></li><li><a href="#">GIT HUB ID</a></li></ul></div>';	
								let pBtn_cancel = document.getElementById("pBtn_cancel")
								pBtn_cancel.addEventListener("click", function cancelBtn(){
												pBtn.classList.remove("pBtn_toggled")
												pBtn.classList.add("profileBTN")
												pBtn.innerHTML = "Click"
												setTimeout(() => {
            								pBtn.addEventListener("click", handler);
         				  }, 100);
								})
				}, 500)
								
				
				
});
