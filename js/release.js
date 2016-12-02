$(function () {
//	自定义对编辑器的菜单
	___E.config.menus = [
	    'bold',
	    'color',
	    'quote',
	    'list',
	    'img',
	    'happy',
	];
	
	//自定义表情
	___E.config.happy = [
		'img/QQExpression/1.gif','img/QQExpression/2.gif','img/QQExpression/3.gif','img/QQExpression/4.gif','img/QQExpression/5.gif','img/QQExpression/6.gif','img/QQExpression/7.gif','img/QQExpression/8.gif','img/QQExpression/9.gif','img/QQExpression/10.gif','img/QQExpression/11.gif','img/QQExpression/12.gif','img/QQExpression/13.gif','img/QQExpression/14.gif','img/QQExpression/15.gif','img/QQExpression/16.gif','img/QQExpression/17.gif','img/QQExpression/18.gif','img/QQExpression/19.gif','img/QQExpression/20.gif','img/QQExpression/21.gif','img/QQExpression/22.gif','img/QQExpression/23.gif','img/QQExpression/24.gif','img/QQExpression/25.gif','img/QQExpression/26.gif','img/QQExpression/27.gif','img/QQExpression/28.gif','img/QQExpression/29.gif','img/QQExpression/30.gif','img/QQExpression/31.gif','img/QQExpression/32.gif','img/QQExpression/33.gif','img/QQExpression/34.gif','img/QQExpression/35.gif','img/QQExpression/36.gif','img/QQExpression/37.gif','img/QQExpression/38.gif','img/QQExpression/39.gif','img/QQExpression/40.gif','img/QQExpression/41.gif','img/QQExpression/42.gif','img/QQExpression/43.gif','img/QQExpression/44.gif','img/QQExpression/45.gif','img/QQExpression/46.gif','img/QQExpression/47.gif','img/QQExpression/48.gif','img/QQExpression/49.gif','img/QQExpression/50.gif','img/QQExpression/51.gif','img/QQExpression/52.gif','img/QQExpression/53.gif','img/QQExpression/54.gif','img/QQExpression/55.gif','img/QQExpression/56.gif','img/QQExpression/57.gif','img/QQExpression/58.gif','img/QQExpression/59.gif','img/QQExpression/60.gif','img/QQExpression/61.gif','img/QQExpression/62.gif','img/QQExpression/63.gif','img/QQExpression/64.gif','img/QQExpression/65.gif','img/QQExpression/66.gif','img/QQExpression/67.gif','img/QQExpression/68.gif','img/QQExpression/69.gif','img/QQExpression/70.gif','img/QQExpression/71.gif','img/QQExpression/72.gif','img/QQExpression/73.gif','img/QQExpression/74.gif','img/QQExpression/75.gif','img/QQExpression/76.gif','img/QQExpression/77.gif','img/QQExpression/78.gif','img/QQExpression/79.gif','img/QQExpression/80.gif','img/QQExpression/81.gif','img/QQExpression/82.gif','img/QQExpression/83.gif','img/QQExpression/84.gif','img/QQExpression/85.gif','img/QQExpression/86.gif','img/QQExpression/87.gif','img/QQExpression/88.gif','img/QQExpression/89.gif','img/QQExpression/90.gif','img/QQExpression/91.gif','img/QQExpression/92.gif','img/QQExpression/93.gif','img/QQExpression/94.gif','img/QQExpression/95.gif'
	];
	
	//图片上传服务器地址
	___E.config.uploadImgUrl = '/upload';
	
// ___E 三个下划线
    var editor = new ___E('content-text');
    
    editor.init();
    
//  表单提交时检验
    $("form").on("submit",function () {
		if($("#title").val() == "" ){
			$("#title").css("background-color","red");
			$("#title").attr("placeholder","标题不能为空");
			$("#title").addClass("vibration");
			return false;
		}else if(editor.$txt.text() == "" ){
			$(".wangEditor-mobile-txt").css("background-color","red");
			$(".wangEditor-mobile-txt").addClass("vibration");
			return false;
		}
	});
//	标题输入时检验
	$("#title").on("input",function () {
		if($("#title").val() != "" ){
			$("#title").css("background-color","transparent");
			$("#title").attr("placeholder","标题");
			$("#title").removeClass("vibration");
		}else{
			$("#title").css("background-color","red");
			$("#title").attr("placeholder","标题不能为空");
		}
	});
//	内容输入时检验
	$(".wangEditor-mobile-txt").on("input",function () {
		if(editor.$txt.html() != "" ){
			$(".wangEditor-mobile-txt").css("background-color","transparent");
			$(".wangEditor-mobile-txt").removeClass("vibration");
		}else{
			$(".wangEditor-mobile-txt").css("background-color","red");
		}
	});
	
});


