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
//登录注册切换
loginSignUp("sign-up","sign-up","login");
loginSignUp("backLogin","login","sign-up");
document.querySelector(".login").addEventListener("click",function (e) {
	e.stopPropagation();
});
document.querySelector(".sign-up").addEventListener("click",function (e) {
	e.stopPropagation();
});
//定义函数 - 登录输入框检验
function loginValid ($ele1,$ele2,$ele3,$btn) {
	document.querySelector($ele1).addEventListener("input",function () {
		if(this.value != "" && document.querySelector($ele2).value != "" && document.querySelector($ele3).value != ""){
			document.querySelector($btn).removeAttribute("disabled");
			document.querySelector($btn).classList.remove("btn-disable");
		}else{
			document.querySelector($btn).setAttribute("disabled","disabled");
			document.querySelector($btn).classList.add("btn-disable");
		}
	});
}
//定义函数 - 注册输入框检验
function signUpValid ($ele1,$ele2,$ele3,$ele4,$btn) {
	document.querySelector($ele1).addEventListener("input",function () {
		if(this.value != "" && document.querySelector($ele2).value != "" && document.querySelector($ele3).value != "" && document.querySelector($ele4).value != ""){
			document.querySelector($btn).removeAttribute("disabled");
			document.querySelector($btn).classList.remove("btn-disable");
		}else{
			document.querySelector($btn).setAttribute("disabled","disabled");
			document.querySelector($btn).classList.add("btn-disable");
		}
	});
}
loginValid(".login input[name=account]",".login input[name=password]",".login .code input",".login input[type=submit]");
loginValid(".login input[name=password]",".login input[name=account]",".login .code input",".login input[type=submit]");
loginValid(".login .code input",".login input[name=account]",".login input[name=password]",".login input[type=submit]");

signUpValid(".sign-up input[name=account]",".sign-up input[name=password]",".sign-up input[name=repassword]",".sign-up .code input",".sign-up input[type=submit]");
signUpValid(".sign-up input[name=password]",".sign-up input[name=account]",".sign-up input[name=repassword]",".sign-up .code input",".sign-up input[type=submit]");
signUpValid(".sign-up input[name=repassword]",".sign-up input[name=account]",".sign-up input[name=password]",".sign-up .code input",".sign-up input[type=submit]");
signUpValid(".sign-up .code input",".sign-up input[name=account]",".sign-up input[name=repassword]",".sign-up input[name=password]",".sign-up input[type=submit]");





//弹出登录页面
document.getElementById("login").onclick = function () {
	document.querySelector("aside").classList.remove("rollOut");
	document.querySelector("aside").style.display = "block";	
}
//关闭登录注册页
document.querySelector("aside").onclick = function () {
	this.className = "rollOut";
	this.addEventListener("webkitAnimationEnd",function aside () {
		this.style.display = "none";
		this.removeEventListener("webkitAnimationEnd",aside);
	})
}