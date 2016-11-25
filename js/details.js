$(function(){
    var counter = 0;
    // 每页展示4个
    var num = 4;
    var pageStart = 0,pageEnd = 0;

    // dropload
    $('.content').dropload({
        scrollArea : window,
        domDown : {
            domClass   : 'dropload-down',
            domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中，请稍候...</div>',
            domNoData  : '<div class="dropload-noData">已经到底了,别扯了</div>'
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
                        result +=   '<div class="commentary-content">'+
										'<div class="head">'+
											'<img src="'+data.lists[i].pic+'"/>'+
										'</div>'+
										'<div class="details">'+
											'<h4>'+data.lists[i].title+'</h4>'+
											'<time>'+data.lists[i].date+'</time>'+
											'<span>'+data.lists[i].link+'</span>'+
											'<button class="btn icon-comment" id="'+i+'">评论</button>'+
										'</div>'+
									'</div>';
				
                        if((i + 1) >= data.lists.length){
                            // 锁定
                            me.lock();
                            // 无数据
                            me.noData();
                            break;
                        }
                    }
                        $('.commentary-lists').append(result);
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
});