$(function () {
	$.get("https://heweifeng.cn/bing.php",function(response) {
		$("header").css("background","url('"+response+"')");
	});
	
	$("#head").on("tap",function () {
		$(document).one("change",function () {
			$("#wrapper").css("display","block");
		});
	});
	
	
	
	
});