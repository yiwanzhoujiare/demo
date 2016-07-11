//轮播1：swiper
$(function(){
    var mySwiper = new Swiper('.swiper-container',{
        pagination : '.swiper-pagination',
        paginationClickable :true,
        autoplay : 1000,   // 自动切换 ：1秒间隔
        nextButton:'.swiper-button-next',
        loop : true , // 一直循环
        lazyLoading : true //设为true开启图片延迟加载，使preloadImages无效。
    });
});
//轮播2：jQuery
var myCount = 0;
var timer=0 ;
var myIndex=0;
var m=0;
$(function () {
    myCount = $(".myImg a").length; //获得a标签长度；
    $(".myImg a:not(:first-child)").fadeOut();  //所有不是第一张图片的都隐藏；
    $(".myLi li").on("click", function () {
        myIndex=$(".myLi li").index(this);  //0,1,2
            if (myIndex < myCount) {
                if (!$(this).hasClass("li1")) {  //不是第一张的
                    $(".myImg a").filter(":visible").fadeOut(0).parent().children().eq(myIndex).fadeIn(500);
                }
            }
        $(this).addClass("li1");
        $(this).siblings().removeClass("li1");//siblings:匹配元素集合中每个元素的兄弟元素,
    });
    autoPlay();
    //    鼠标进入区域停止，离开继续播放
    $(".jQLunbo").hover(function () { //hover:将二个事件函数绑定到匹配元素上，分别当鼠标指针进入和离开元素时被执行
        clearInterval(timer);
    }, function () {
       autoPlay();
    });
//    自动轮播函数：
    function autoPlay() {
        timer = setInterval(function () {
            m = m >= myCount - 1 ? 0 : ++m;
            $(".myLi li").eq(m).trigger("click");//trigger: 根据绑定到匹配元素的给定的事件类型执行所有的处理程序和行为。
        }, 2000)
    }
});




