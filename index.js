const btn = document.getElementById("btnTalk");
console.log(btn)
window.addEventListener("scroll", ()=>{
	const scrolled = window.scrollY;
	console.log(scrolled)
	if(scrolled === 315){
		btn.classList.add("btn-talk")
		btn.classList.remove("btn-talk-appear")
	}else {
		btn.classList.add("btn-talk-appear")
		
	}
})