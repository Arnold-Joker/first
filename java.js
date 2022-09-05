const yes = document.getElementById("yes")
const no = document.getElementById("no")

const btn1 = document.getElementById("b1")
const btn2 = document.getElementById("b2")
const btn3 = document.getElementById("b3")

no.addEventListener("click" , function(){
				alert("ZOOM OUT")
				btn1.style.opacity="1"
				no.style.opacity="0"
})
btn1.addEventListener("click" , function(){
				btn2.style.opacity="1"
				btn1.style.opacity="0"
})
btn2.addEventListener("click" , function(){
				btn3.style.opacity="1"
				btn2.style.opacity="0"
})

btn3.addEventListener("click" , function(){
				btn3.style.opacity="0"
				yes.style.fontSize="50px"
})
