$(function(){
    var counter = 0;
    // 每页展示4个
    var num = 4;
    var pageStart = 0,pageEnd = 0;

    // dropload
    $('.content').dropload({
        scrollArea : window,
        domUp : {
            domClass   : 'dropload-up',
            domRefresh : '<div class="dropload-refresh">↓下拉刷新</div>',
            domUpdate  : '<div class="dropload-update">↑释放更新</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中，请稍候...</div>'
        },
        domDown : {
            domClass   : 'dropload-down',
            domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中，请稍候...</div>',
            domNoData  : '<div class="dropload-noData">已经到底了,别扯了</div>'
        },
        loadUpFn : function(me){
            $.ajax({
                type: 'GET',
                url: 'https://www.heweifeng.cn/blog/1.php',
                dataType: 'json',
                timeout: 8000,
                success: function(data){
                    var result = '';
                    for(var i = 0; i < data.lists.length; i++){
                        result +=   '<a class="item opacity" href="'+data.lists[i].link+'">'
                                        +'<img src="'+data.lists[i].pic+'" alt="">'
                                        +'<h3>'+data.lists[i].title+'</h3>'
                                        +'<span class="date">'+data.lists[i].date+'</span>'
                                    +'</a>';
                    }
                        $('.lists').html(result);
                        // 每次数据加载完，必须重置
                        me.resetload();
                        // 重置索引值，重新拼接more.json数据
                        counter = 0;
                        // 解锁
                        me.unlock();
                        me.noData(false);
                },
                error: function(xhr, type){
                    alert('连接服务器出错!请稍候再试！');
                    // 即使加载出错，也得重置
                    me.resetload();
                }
            });
        },
        loadDownFn : function(me){
            $.ajax({
                type: 'GET',
                url: 'https://www.heweifeng.cn/blog/1.php',
                dataType: 'json',
                timeout: 8000,
                success: function(data){
                    var result = '';
                    counter++;
                    pageEnd = num * counter;
                    pageStart = pageEnd - num;

                    for(var i = pageStart; i < pageEnd; i++){
                        result +=   '<a class="item opacity" href="'+data.lists[i].link+'">'
                                        +'<img src="'+data.lists[i].pic+'" alt="">'
                                        +'<h3>'+data.lists[i].title+'</h3>'
                                        +'<span class="date">'+data.lists[i].date+'</span>'
                                    +'</a>';
                        if((i + 1) >= data.lists.length){
                            // 锁定
                            me.lock();
                            // 无数据
                            me.noData();
                            break;
                        }
                    }
                        $('.lists').append(result);
                        // 每次数据加载完，必须重置
                        me.resetload();
                },
                error: function(xhr, type){
                    alert('连接服务器出错!请稍候再试！');
                    // 即使加载出错，也得重置
                    me.resetload();
                }
            });
        },
        threshold : 50
    });
    
    //搜索按钮动画
	$('.nav_right i').on('click',function(){
		$('.search').show();
		$('.search').animate({opacity:'1'},300,'linear');
	});
	
	$(document).scroll(function() {
		if(($('.search').css('display'))=='block'){
			$('.search').animate({opacity:'0'},200,'ease-out',function() {
				$('.search').hide();
			});
		}
	});

	//发表新文章按钮动画
	var a = [];
	var b = [];
	var i,j=0;
	$(document).scroll(function() {
			a[i]= $(window).scrollTop();
			b[j]=a[i++];	
			if(b[j]-b[j-1]>=0){
				$('.release').animate({bottom:'-3rem'},250,'ease-out');
//				$('footer').animate({bottom:'-2.4rem'},250,'ease-out');
				$('.nav').animate({top:'-2.4rem'},250,'ease-out');
				i=j=0;
			}else if(b[j]-b[j-1]<0){
				$('.release').animate({bottom:'10%'},250,'ease-out');
//				$('footer').animate({bottom:'0'},150,'ease-out');
				$('.nav').animate({top:'0'},250,'ease-out');
				i=j=0;
			}
			j++;
	});
    
    
});


