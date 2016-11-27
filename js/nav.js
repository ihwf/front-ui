$(function() {
	$(".nav_list").on("tap","a",function () {
		$(".nav_list a").removeClass("a_active");
		$(this).addClass("a_active");
	});
	
	
	
	var a = $("footer a");
	for (var i = 0;i < a.length;i++) {
		var note = new RegExp($(a[i]).attr("note"));
		if (note.exec(window.location.href)) {
			$(a[i]).css("color","#3385FF");
		}
	}
	
});