$(function () {
	$.get("https://heweifeng.cn/bing.php",function(response) {
		$("header").css("background","url('"+response+"')");
	});
	
});