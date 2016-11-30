$(function () {
	$.get("https://heweifeng.cn/bing-1366.php",function(response) {
		$("header").css("background","url('"+response+"')");
	});
	
	$("#head").on("click",function () {
		$(document).one("change",function () {
			$("#wrapper").css("display","block");
		});
	});
	
	
	
	
});