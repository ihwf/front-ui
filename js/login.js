//定义函数 - 点击一个id元素,飞入另一个class元素,飞出当前class元素
function loginSignUp ($id,$fadeInClass,$fadeOutClass) {
	document.getElementById($id).addEventListener("click",function () {
		document.querySelector("."+$fadeInClass).classList.toggle("rollIn");
		document.querySelector("."+$fadeInClass).classList.toggle("rollOut");
		document.querySelector("."+$fadeOutClass).classList.toggle("rollIn");
		document.querySelector("."+$fadeOutClass).classList.toggle("rollOut");
		
//		document.querySelector("."+$fadeOutClass).addEventListener("animationend",function fadeOut() {
//			document.querySelector("."+$fadeOutClass).style.display = "none";
//			document.querySelector("."+$fadeInClass).style.display = "flex";
//			document.querySelector("."+$fadeOutClass).removeEventListener("animationend",fadeOut);
//		});
		document.querySelector("."+$fadeOutClass).addEventListener("webkitAnimationEnd",function fadeOut() {
			document.querySelector("."+$fadeOutClass).style.display = "none";
			document.querySelector("."+$fadeInClass).style.display = "flex";
			document.querySelector("."+$fadeOutClass).removeEventListener("animationend",fadeOut);
			document.querySelector("."+$fadeOutClass).removeEventListener("webkitAnimationEnd",fadeOut);
		});
	});
}

loginSignUp("sign-up","sign-up","login");
loginSignUp("backLogin","login","sign-up");
document.querySelector(".login").addEventListener("click",function (e) {
	e.stopPropagation();
});
document.querySelector(".sign-up").addEventListener("click",function (e) {
	e.stopPropagation();
});
document.getElementById("login").onclick = function () {
	document.querySelector("aside").classList.remove("rollOut");
	document.querySelector("aside").style.display = "block";	
}
document.querySelector("aside").onclick = function () {
	this.className = "rollOut";
	this.addEventListener("webkitAnimationEnd",function aside () {
		this.style.display = "none";
		this.removeEventListener("webkitAnimationEnd",aside);
	})
	
}