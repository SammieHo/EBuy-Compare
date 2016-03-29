var myScroll,
    pullDownEl, pullDownOffset,
    pullUpEl, pullUpOffset
generatedCount = 0;

/**
 * 滚动翻页 （自定义实现此方法）
 * myScroll.refresh();		// 数据加载完成后，调用界面更新方法
 */
var i = 2;

function pullUpAction() {
    setTimeout(function() { // <-- Simulate network congestion, remove setTimeout from production!



        var main = $("#thelist");

        var page = i++; // 每上拉一次页码加一次 （就比如下一页下一页）
        Ajax(page); // 运行ajax 把2传过去告诉后台我上拉一次后台要加一页数据

        myScroll.refresh(); // 数据加载完成后，调用界面更新方法 Remember to refresh when contents are loaded (ie: on ajax completion)
    }, 1000); // <-- Simulate network congestion, remove setTimeout from production!
}

function Ajax(page) { // ajax后台交互
    var el, li, i;
    el = document.getElementById('thelist');

    $.ajax({
        type: "post",
        dataType: "text",
        url: "test.php", // 你请求的地址
        data: {
            'page': '1' // 传过去的页码
        },
        success: function(data) {
            for (i = 0; i < 10; i++) {
                li = document.createElement('li');
                li.innerHTML = "<div class=\"container-fluid introContent\"><div class=\"media\"><div class=\"media-left\"><a href=\"#\"><img class = \"media-object img-circle\" src = \"images\/con4.png\" alt = \"发布人头像\"></a> </div> <div class =\"media-body\"><div class =\"media-body\" ><span>" + 'SammieHo' + "</span> <span class =\"pull-right\">" + '¥450' + "</span> </div> <div class =\"media-heading\" ><span>" + '9 小时前' + "</span> <span class =\"news-or-old pull-right\">" + '8 成新' + "  </span> </div> </div> </div><div class=\"row photo\"><ul class=\"clearfix\">" + "<li> <a href=\"#\"> <img class=\"img-responsive\" src=\"images/con2.png\" > </a> </li>" + "<li><a href=\"#\"><img class=\"img-responsive\" src=\"images/con3.png\"></a></li>" + "<li><a href=\"#\"><img class=\"img-responsive\" src=\"images/con1.png\"></a></li></ul></div><div class=\"row proMess\"><div class=\"col-xs-12 text\">" + '资生堂尿素护手霜，价格是两盒的，喜欢吸收快的护手霜资生堂尿素护手霜，价格是两盒的，喜欢吸收快的护手霜...就不会太油腻，擦上去按摩一会就吸收了，橙色的小颗粒也不见了。' + "</div><div class=\"col-xs-12 loca-fav-mess\"><span class=\"pull-left\"><i class=\"sprite sprite-address\"></i><i>" + '来自韶关市 浈江区' + "</i></span><span class=\"pull-right\"><i class=\"sprite sprite-favorite\"></i><i>" + '收藏' + "</i></span><span class=\"pull-right\"><a href=\"liuyan.html#trunToInput\"><i class=\"sprite sprite-mess\"></i><i>" + '留言' + "</i></a></span></div></div></div>";
                el.appendChild(li);
            }
        },

    });
}
/**
 * 初始化iScroll控件
 */
function loaded() {

    pullUpEl = document.getElementById('pullUp');
    pullUpOffset = pullUpEl.offsetHeight;

    myScroll = new iScroll('wrapper', {
        scrollbarClass: 'myScrollbar',/* 重要样式 */
        useTransition: false,

        onRefresh: function() {

            if (pullUpEl.className.match('loading')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
            }
        },
        onScrollMove: function() {

            if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'flip';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
                this.maxScrollY = this.maxScrollY;
            } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
                this.maxScrollY = pullUpOffset;
            }
        },
        onScrollEnd: function() {

            if (pullUpEl.className.match('flip')) {
                pullUpEl.className = 'loading';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
                pullUpAction(); // Execute custom function (ajax call?)
            }
        }
    });

    setTimeout(function() { document.getElementById('wrapper').style.left = '0'; }, 800);
}

//初始化绑定iScroll控件 
document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', loaded, false);
